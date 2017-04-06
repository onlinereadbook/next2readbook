var request = require('request');
// import Sequelize from 'sequelize';
// import { databaseUrl } from '../config';
// import Eventslist from '../src/data/models/Events';
var fs = require('mz/fs');





let url = 'https://graph.facebook.com/v2.8/me?fields=id,name,events{id,start_time,description,owner,end_time,parent_group,name}'

url = url + '&access_token=EAACEdEose0cBAGwLZCYpWMpBOjvhzu1FzOaMtZCe92OMLcxAIcqxO0zNL0kyNcE7wxY0FjGPdymByO5aLYcbLczgmUiw7YC4WkVgBrsdluyHSxjXY3Nwo14Eh2dJooeUW3P0h5Ci7m1k7lLgrqZAj0fPY9zNOuqvtjpGBxPFuNClmSvZB5ZCeKbASBZA9ZBNQgZD'

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
            alldata.push(data);

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

    request(url, function (err, res, body) {
        let item = JSON.parse(body);
        //console.log(item.events.data);
        //console.log(item);
        let next = item.paging.next;


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
            // alldata.push(data);

            fs.writeFile('data/lessonDataTest.js', JSON.stringify(v));
            //console.log(typeof (v.parent_group));
        })



        if (next != "") {
            setTimeout(function () {
                console.log('下一次的旅行');
                go2(next);
            }, 5000);
        } else {
            console.log(alldata);

        }
    });



}
