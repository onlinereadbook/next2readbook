const express = require('express')
const next = require('next')
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
console.log('serviceAccount');
console.log(typeof (serviceAccount));
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://macro-duality-160006.firebaseio.com"
});


app.prepare()
    .then(() => {
        const server = express()

        server.get('/firebase', (req, res) => {
            // server.response()


            var userRef = admin.database().ref("/allgroup");

            userRef.once('value').then(function (snapshot) {
                let allgroup = snapshot.val();
                //res.end(allgroup);  
                const result = allgroup = JSON.stringify(allgroup);
                //data = '{ "xxx": "xxx" }';
                res.end(result);

            }).catch(err => { console.log(err) });
            //console.log(getdata);




        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })