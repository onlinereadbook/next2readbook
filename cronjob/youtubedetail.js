// import Sequelize from 'sequelize';
// import { databaseUrl } from '../src/config';
// import Youtubelist from '../src/data/models/YoutubeData';
//import Promise from 'promise';

// var admin = require("firebase-admin");
// var serviceAccount = require("../serviceAccountKey.json");

// var refreshToken;
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://macro-duality-160006.firebaseio.com"
// });


var mongoose = require('bluebird').promisifyAll(require('mongoose'));

const options = { promiseLibrary: require('bluebird') };
//mongoose.connect('mongodb://localhost/readbook', options);
//mongoose.connect("mongodb://readbookdb:pDsRGbIh53n0pUZ3gepWOYnoMnAE5GTkVKvtBkUhpAFeZoL0xxxzWJmBOsgawsooXzhUKtH0P2bsaKKqPRHn4g==@readbookdb.documents.azure.com:10250/readbook?ssl=true");
mongoose.connect('mongodb://polo:5201314@128.199.196.98:27020/readbook');
//mongoose.Promise = require('bluebird');
var youtubeSchema = require('../data/models/youtubeSchema');
var youtubeＭodel = mongoose.model('youtubeSchema', youtubeSchema);





// const sequelize = new Sequelize(databaseUrl, {
//     define: {
//         freezeTableName: true,
//     },
// });
const request = require('request-promise');

const fs = require('mz/fs');
let { YOUTUBEDATA } = require('../youtubekey');

//import YOUTUBEDATA from '../youtubekey';

//Youtubelist.truncate();
//let YOUTUBEDATA = require('../youtubekey');
//console.log(YOUTUBEDATA.YOUR_API_KEY);
let YOUR_API_KEY = YOUTUBEDATA.YOUR_API_KEY;
let CHANNELID = YOUTUBEDATA.CHANNELID;
let MAXRESULTS = 50;

let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAXRESULTS}&channelId=${CHANNELID}&key=${YOUR_API_KEY}`

go()
async function go() {
    let yotubedata = await youtubeＭodel.find({});
    let result = [];
    //console.log(yotubedata);
    yotubedata.forEach(async (v, i) => {
        //console.log(v)
        //console.log(v.id.videoId);
        let url2 = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${v.videoId}&key=${YOUR_API_KEY}`;
        //console.log(url2);
        let data = await request(url2);
        temp = await JSON.parse(data);
        // console.log(i);
        // console.log('-----');
        console.log(temp.items[0].snippet);
        // if (typeof (temp.items[0].snippet.tags) === "object") {
        //     let tags = temp.items[0].snippet.tags.toString();
        //     // admin.database().ref("youtube/" + v.id.videoId + "/tag").set(tags);
        // v.tags = tags;
        // v.save();
        // }
        v.tags = temp.items[0].snippet.tags;
        v.publishedAt = temp.items[0].snippet.publishedAt;
        v.description = temp.items[0].snippet.description;
        //v.etag = temp.items[0].snippet.etag;
        v.save();
    });
    // Promise.all(result).then((v) => {

    //     v.forEach(function (data, id) {
    //         //yotubedata[id].tel = data;
    //         console.log('---');
    //         console.log(data);
    //         //yotubedata[id].save();
    //     });
    // }).catch(err => {
    //     console.log('---');
    //     console.log(err);
    // });
}




// var userRef = admin.database().ref("youtube/");

// userRef.once('value').then(function (snapshot) {

//     getdetail(snapshot.val());

// }).catch(err => { console.log(err) });




// async function getdetail(Youtubedata) {
//     //let Youtubedata = await Youtubelist.findAll({});
//     //console.log(Youtubedata);

//     //Youtubedata= JSON. (Youtubedata);
//     // console.log(typeof(Youtubedata));
//     let data = Object.values(Youtubedata);
//     //console.log(data);
//     data.forEach(async (v, i) => {
//         console.log(v.id.videoId);
//         let url2 = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${v.id.videoId}&key=${YOUR_API_KEY}`;
//         //console.log(url2);
//         let temp = await request(url2);
//         temp = JSON.parse(temp);

//         if (typeof (temp.items[0].snippet.tags) === "object") {
//             let tags = temp.items[0].snippet.tags.toString();
//             admin.database().ref("youtube/" + v.id.videoId + "/tag").set(tags);
//         }
//         // //     // v.tags = tags;
//         // //     // v.save();
//     });


// }


