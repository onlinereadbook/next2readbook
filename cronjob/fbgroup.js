var request = require('request');
// import Sequelize from 'sequelize';
// import { databaseUrl } from '../src/config';
// import GroupList from '../src/data/models/Group';
var fs = require('fs');
var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
//mongoose.connect('mongodb://localhost/readbook');
mongoose.connect("mongodb://readbookdb:pDsRGbIh53n0pUZ3gepWOYnoMnAE5GTkVKvtBkUhpAFeZoL0xxxzWJmBOsgawsooXzhUKtH0P2bsaKKqPRHn4g==@readbookdb.documents.azure.com:10250/readbook?ssl=true");

mongoose.Promise = require('bluebird');
var groupSchema = require('../models/groupSchema');
var groupＭodel = mongoose.model('groupSchema', groupSchema);

groupＭodel.remove({}, () => {
    console.log('remove finish');
})

var refreshToken;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});


let url = 'https://graph.facebook.com/v2.8/';
url = url + 'me?fields=groups{id,email,name,owner,privacy,icon,cover,description}';
url = url + '&access_token=EAACEdEose0cBALIrteEZAaA1qLwxokGk9ihP5fyF2IZCV5izgfvWTRLlQuwY6ZC4wli3vYYNDuEvNPu83rxZBlaZBKAWZCawXs253hL8vfdNZAJrRnX6pBQQDxNCpKwmEJAiZA2mxVvtKk1eUjWfnj4eZADcoEEL40EIP2YneOISAR8lkGIalKQr3lS69UgFdOhAZD';


let alldata = [];
let simpledata = [];
go(url);
async function go(url) {
    //console.log(url);
    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        // console.log(item.events.data);
        console.log(item.groups.paging.next);

        let next = item.groups.paging.next;

        item.groups.data.map((v) => {
            if (v.owner.name == '紀相安') {
                let data = {};
                data.email = v.email;
                data.title = v.name;
                data.description = v.description;
                if (typeof (v.cover) === "object") {
                    data.cover = v.cover;
                } else {
                    data.cover = '';
                }
                data.groupId = v.id;

                simpledata.push({ "name": v.name, "id": v.id });
                alldata.push(v);
                //GroupList.build(data).save();
                //                console.log(data);
            }

        })
        //console.log(item.events);
        if (next != "") {
            setTimeout(function () {
                console.log('下一次的旅行');
                go2(next);
            }, 3000);
        }
    });
}
async function go2(url) {
    if (typeof (url) === "undefined") {
        // var userRef = admin.database().ref("allgroup/").set(alldata);
        // fs.writeFile('./data/groupData.json', JSON.stringify(alldata))
        // fs.writeFile('./data/groupsimpleData.json', JSON.stringify(simpledata))
        alldata.forEach((v, i) => {
            let obj = {};
            obj.id = v.id;
            obj.name = v.name;
            obj.icon = v.cover.source;
            let data = new groupＭodel(obj);
            data.save()

        })




        return
    }
    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        //console.log(item.events.data);
        //console.log(item);
        let next = item.paging.next;


        item.data.map((v) => {
            let data = {};
            data.email = v.email;
            data.title = v.name;
            data.description = v.description;
            // console.log(typeof (v.cover) === "object");
            if (typeof (v.cover) === "object") {
                //console.log(v.cover)
                data.cover = v.cover;
            } else {
                data.cover = '';
            }
            data.groupId = v.id;
            simpledata.push({ "name": v.name, "id": v.id });
            alldata.push(v);
            //GroupList.build(data).save();

        })


        if (next != "") {
            setTimeout(function () {
                console.log('下一次的旅行');
                go2(next);
            }, 5000);
        }
    });
}
