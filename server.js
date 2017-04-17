const express = require('express')
const next = require('next')
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
//console.log('serviceAccount');
//console.log(typeof (serviceAccount));
var bluebird = require('bluebird');
var redis = require("redis");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const lessonData = require('./data/lessonData.json');
const groupdata = require('./data/groupsimpleData.json');


var mongoose = require('bluebird').promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost/readbook');
mongoose.Promise = require('bluebird');


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

        server.get('/eventdata/:page', (req, res) => {

            res.end(JSON.stringify(lessonData));
        })
        server.get('/youtubedata/:page', async (req, res) => {
            const youtubeSchema = require('./models/youtubeSchema');
            const youtubeＭodel = mongoose.model('youtubeSchema', youtubeSchema);
            let data = await youtubeＭodel.find({}).limit(10).skip(req.params.page * 10);
            //console.log(data);

            res.json(data);
            //res.end(data);
            //firebase  寫法
            // var userRef2 = admin.database().ref("/youtube");
            // userRef2.once('value').then(function (snapshot) {
            //     let youtube = snapshot.val();
            //     const result = allgroup = JSON.stringify(youtube);
            //     //console.log(result);
            //     console.log('server get youtube');
            //     res.end(result);

            // }).catch(err => { console.log(err) });



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