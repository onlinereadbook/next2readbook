var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

var refreshToken;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});
//console.log(admin)

//測試寫入資料
var adaRef = admin.database().ref("youtube").set();
//測試撈出資料

var userRef = admin.database().ref("users/");

userRef.once('value').then(function (snapshot) {
    console.log(snapshot.val().ada);
}).catch(err => { console.log(err) });
//console.log(getdata);



// import admin from 'firebase-admin';
// import serviceAccount from '../serviceAccountKey.json';

//可以取得 admin token
// var FirebaseTokenGenerator = require("firebase-token-generator");
// var tokenGenerator = new FirebaseTokenGenerator("AIzaSyAfF9nX4afV1HpFd2NN0SqffdV5MwPmKZc");
// var token = tokenGenerator.createToken(
//     { uid: "1", some: "arbitrary", data: "here" },
//     { admin: true }
// );




// console.log(token);