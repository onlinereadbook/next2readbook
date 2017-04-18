// import Sequelize from 'sequelize';
// import { databaseUrl } from '../src/config';
// import Youtubelist from '../src/data/models/YoutubeData';
//console.log(databaseUrl);

var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

var refreshToken;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost/readbook');
mongoose.Promise = require('bluebird');
var youtubeSchema = require('../models/youtubeSchema');
var youtubeＭodel = mongoose.model('youtubeSchema', youtubeSchema);

youtubeＭodel.remove({}, () => {
    console.log('remove finish');
})


//console.log(admin)

//測試寫入資料



// const sequelize = new Sequelize(databaseUrl, {
//     define: {
//         freezeTableName: true,
//     },
// });

//正準備要塞資料 有些還沒寫完歐

const request = require('request');
const fs = require('mz/fs');
//const YOUTUBEDATA = require('mz/fs');

//import YOUTUBEDATA from '../youtubekey';

//Youtubelist.truncate();
let { YOUTUBEDATA } = require('../youtubekey');
//console.log(YOUTUBEDATA.YOUR_API_KEY);

let YOUR_API_KEY = YOUTUBEDATA.YOUR_API_KEY;
let CHANNELID = YOUTUBEDATA.CHANNELID;
let MAXRESULTS = 50;

// console.log(YOUR_API_KEY);
//let url = `https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}`
let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}`
//let url = `https://www.googleapis.com/youtube/v3/activities?part=contentDetails%2Csnippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}&pageToken=CPoBEAA`
//console.log(url);
let alldata = [];

youtubeＭodel.remove({}, () => {
    console.log('remove finish');
})


first(url);
function first(url) {

    request(url, function (err, res) {
        //console.log(res);
        let data = JSON.parse(res.body);
        let pageToken = data.nextPageToken;

        //console.log(data.items);
        //var arr = JSON.stringify(data.items);
        console.log('下一頁的pageToken:' + pageToken);
        // if (data.items == "object") {

        data.items.forEach(function (value, id) {
            //  console.log(value);
            // console.log('----');
            let obj = {};
            //     //console.log(value.snippet);
            //     //console.log(value.snippet.title);
            //     //console.log(value.snippet.description);
            obj.title = value.snippet.title;
            obj.description = value.snippet.description;
            //console.log(isNaN(value.contentDetails.upload.videoId));
            obj.videoId = value.id.videoId;
            obj.publishedAt = value.snippet.publishedAt;

            if (typeof (value.id.videoId) !== "undefined") {
                let data = new youtubeＭodel(obj);
                data.save()
            }
            //console.log(value.id.videoId);
            //     data2.videoId = value.contentDetails.upload.videoId;
            //     //   console.log(value.snippet.thumbnails.default.url);
            //     // console.log(value.contentDetails.upload.videoId);
            //     //data.title = value.snippet.title;

            //   Youtubelist.build(data2).save();
            // admin.database().ref('youtube/' + value.id.videoId).set(value);
            // alldata.push(data2);
        })
        // // }
        // // fs.writeFile('xx.json', arr);
        // //console.log(data.pageToken);
        gonext(pageToken);
    })
}
async function gonext(Token) {
    let newurl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}&pageToken=${Token}`
    //console.log(newurl);
    if (Token == "undefined") {
        console.log(alldata);

        return
    }
    request(newurl, function (err, res) {
        //  console.log(res.body);
        let data = JSON.parse(res.body);

        let Token = data.nextPageToken;

        //     //var arr = JSON.stringify(data.items);
        console.log(Token);
        //console.log(typeof (data.items));
        //   if (data.items == "object") {
        //console.log(typeof(data.items));
        if (typeof (data.items) != "object") {
            console.log('最後一筆');
            fs.writeFile("data/youtubeData.json", JSON.stringify(alldata));
            //alldata.map(function (v) {

            //})
            return
        }

        data.items.forEach(function (value, id) {
            let obj = {};
            obj.title = value.snippet.title;
            obj.description = value.snippet.description;
            //console.log(isNaN(value.contentDetails.upload.videoId));
            obj.videoId = value.id.videoId;
            obj.publishedAt = value.snippet.publishedAt;
            //  data2.videoId = (typeof (value.contentDetails.upload) == "object") ? value.contentDetails.upload.videoId : "";
            //Youtubelist.build(data2).save();
            // admin.database().ref('youtube/' + value.id.videoId).set(value);
            if (typeof (value.id.videoId) !== "undefined") {
                let data = new youtubeＭodel(obj);
                data.save()
            }
            //alldata.push(data2);
        })
        // }
        if (Token != "") {
            setTimeout(function () {
                console.log('下一次的旅程');
                gonext(Token);
            }, 4000);
        }
    })


}