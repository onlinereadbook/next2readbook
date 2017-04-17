var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
var refreshToken;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});
const fs = require('mz/fs');
let { YOUTUBEDATA } = require('../youtubekey');
let YOUR_API_KEY = YOUTUBEDATA.YOUR_API_KEY;
let CHANNELID = YOUTUBEDATA.CHANNELID;
let MAXRESULTS = 50;

var userRef = admin.database().ref("youtube/");
userRef.once('value').then(function (snapshot) {
     let data= Object.values(snapshot.val());
                 fs.writeFile("data/youtubeDatatest.json", JSON.stringify(data));

      //console.log(data);
}).catch(err => { console.log(err) });
