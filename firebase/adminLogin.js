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