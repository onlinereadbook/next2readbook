var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

var refreshToken;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});
//console.log(admin)

export default admin;
