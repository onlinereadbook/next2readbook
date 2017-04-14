const express = require('express')
const next = require('next')
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
//console.log('serviceAccount');
//console.log(typeof (serviceAccount));

const lessonData = require('./data/lessonData.json');
const groupdata = require('./data/groupsimpleData.json');


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
        server.get('/database', (req, res) => {
            // server.response()
            //吃firebase寫法            
            // var userRef = admin.database().ref("/allgroup");
            // userRef.once('value').then(function (snapshot) {
            //     let allgroup = snapshot.val();
            //     const result = allgroup = JSON.stringify(allgroup);
            //     //data = '{ "xxx": "xxx" }';
            //     res.end(result);

            // }).catch(err => { console.log(err) });

            //直接吐json

            res.end(JSON.stringify(groupdata));
            //console.log(getdata);
        })

        server.get('/eventdata', (req, res) => {
            res.end(JSON.stringify(lessonData));
        })
        server.get('/youtubedata', (req, res) => {
            var userRef2 = admin.database().ref("/youtube");
            userRef2.once('value').then(function (snapshot) {
                let youtube = snapshot.val();
                const result = allgroup = JSON.stringify(youtube);
                //console.log(result);
                console.log('server get youtube');
                res.end(result);

            }).catch(err => { console.log(err) });



            // res.end(JSON.stringify(lessonData));
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })