// import Sequelize from 'sequelize';
// import { databaseUrl } from '../src/config';
// import Youtubelist from '../src/data/models/YoutubeData';
//import Promise from 'promise';

var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

var refreshToken;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});



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


var userRef = admin.database().ref("youtube/");

userRef.once('value').then(function (snapshot) {
 
    getdetail(snapshot.val());

}).catch(err => { console.log(err) });




async function getdetail(Youtubedata) {
    //let Youtubedata = await Youtubelist.findAll({});
    //console.log(Youtubedata);
    
     //Youtubedata= JSON. (Youtubedata);
    // console.log(typeof(Youtubedata));
    let data=Object.values(Youtubedata);
    //console.log(data);
       data.forEach(async (v,i) => {
          console.log(v.id.videoId);
     let url2 = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${v.id.videoId}&key=${YOUR_API_KEY}`;
     //console.log(url2);
      let temp = await request(url2);
          temp = JSON.parse(temp);

        if(typeof(temp.items[0].snippet.tags)==="object"){
         let tags = temp.items[0].snippet.tags.toString();
        

          admin.database().ref("youtube/"+v.id.videoId+"/tag").set(tags);
        }
    // //     // v.tags = tags;
    // //     // v.save();
      });


}


