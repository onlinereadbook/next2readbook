var request = require('request');
// import Sequelize from 'sequelize';
// import { databaseUrl } from '../src/config';
// import GroupList from '../src/data/models/Group';
var fs = require('fs');
var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

var refreshToken;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});


let url = 'https://graph.facebook.com/v2.8/';
url = url + 'me?fields=groups{id,email,name,owner,privacy,icon,cover,description}';
url = url + '&access_token=EAACEdEose0cBAINrIvg9zbAzLEzkcwDN05SZCZBkMhAZBI41pw174Yt2Prh54Fz7Q4zcDOK7n82nqdsaX1VwNrzRxHyvRRGxy8FOAWIXO4tW750CV2ikSXLoF2m1fxs4zW7oGqZCha85ybSzWjaCFiIVgd9TuXX2aXTZAnceUUFss0LxY3uOkfXKhtUFtzZC4ZD';


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
        var userRef = admin.database().ref("allgroup/").set(alldata);
        fs.writeFile('./data/groupData.json', JSON.stringify(alldata))
        fs.writeFile('./data/groupsimpleData.json', JSON.stringify(simpledata))

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
