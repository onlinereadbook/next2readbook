var request = require('request');
// import Sequelize from 'sequelize';
// import { databaseUrl } from '../src/config';
// import Eventslist from '../src/data/models/Events';
var fs = require('fs');
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
//mongoose.connect('mongodb://localhost/readbook');
//mongoose.connect("mongodb://readbookdb:pDsRGbIh53n0pUZ3gepWOYnoMnAE5GTkVKvtBkUhpAFeZoL0xxxzWJmBOsgawsooXzhUKtH0P2bsaKKqPRHn4g==@readbookdb.documents.azure.com:10250/readbook?ssl=true");
mongoose.connect('mongodb://polo:5201314@128.199.196.98:27020/readbook');


mongoose.Promise = require('bluebird');
var groupEventSchema = require('../data/models/groupEventSchema');
var groupEventＭodel = mongoose.model('groupEventSchema', groupEventSchema);
groupEventＭodel.remove({}, () => {
    console.log('remove finish');
})

let url = 'https://graph.facebook.com/v2.8/me?fields=id,name,events.limit(100){id,start_time,description,owner,end_time,parent_group,name}'
url = url + '&access_token=EAACEdEose0cBAMl4cXy1IxZB3YBeY1IzJe4J2BeSMsD0nMpD4lKRUZBNdraLfaWXClRlgdSJgPkuZC6XKa1vjgvqJFdEBT8YxPZCc83kj4OX2liXQOVnuJZCadNSu9ig7MBShNPMeR8t7Q6tzuE1egxGOTn5tXeIHR5QFsXfnlyMsE721CcoZCvnE3KCdtaSYZD'
let alldata = [];






go(url);
async function go(url) {
    //console.log(url);
    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        // console.log(item.events.data);
        //console.log(item.events.paging.next);

        let next = item.events.paging.next;

        item.events.data.map((v) => {
            let data = {};
            data.start_time = v.start_time;
            data.title = v.name;
            data.description = v.description;
            data.speaker = '';
            data.startTime = v.start_time;
            data.endTime = v.end_time;
            if (typeof (v.parent_group) == "object") {
                data.parentGroupName = v.parent_group.name;
                data.parentGroupId = v.parent_group.id;
                data.privacy = v.parent_group.privacy;
                data.owner = v.owner.name;
                //  Eventslist.build(data).save();
            }
            if (v.owner.name == "紀相安") {
                alldata.push(data);
            }

            //console.log(typeof (v.parent_group));
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
    console.log("url:" + url);
    if (typeof (url) === "undefined") {
        console.log("最後一筆");
        console.log(alldata);
        // fs.writeFile("data/lessonData.json", JSON.stringify(alldata));

        alldata.forEach((v, i) => {
            if (typeof (v.parentGroupId) !== "undefined") {
                let obj = {};
                obj.parentGroupId = v.parentGroupId;
                obj.parentGroupName = v.parentGroupName;
                obj.owner = v.owner;
                obj.title = v.title;
                obj.description = v.description;
                obj.startTime = v.startTime;


                let data = new groupEventＭodel(obj);
                console.log(data);
                data.save()
            }

        })
        return
    }
    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        //console.log(item.events.data);
        //console.log(item);

        if (typeof (item.paging) == "object") {
            let next = item.paging.next;
        } else {
            let next = "";
            console.log("最後一筆");
        }



        let next = item.paging.next;
        console.log(typeof (item.paging));

        console.log("item:" + typeof (item));
        item.data.map((v) => {
            let data = {};
            data.start_time = v.start_time;
            data.title = v.name;
            data.description = v.description;
            data.speaker = '';
            data.startTime = v.start_time;
            data.endTime = v.end_time;
            if (typeof (v.parent_group) == "object") {
                data.parentGroupName = v.parent_group.name;
                data.parentGroupId = v.parent_group.id;
                data.privacy = v.parent_group.privacy;
                data.owner = v.owner.name;
                // Eventslist.build(data).save();
            }
            if (v.owner.name == "紀相安") {
                alldata.push(data);
            }
            //console.log(typeof (v.parent_group));
        })





        if (next != "") {
            setTimeout(function () {
                console.log('下一次的旅行');
                //   console.log(next);
                go2(next);
            }, 3000);
        }
    });



}
