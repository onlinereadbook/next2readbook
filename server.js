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
// const lessonData = require('./data/lessonData.json');
const groupdata = require('./data/groupsimpleData.json');
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
//mongoose.connect('mongodb://localhost/readbook');
mongoose.connect("mongodb://readbookdb:pDsRGbIh53n0pUZ3gepWOYnoMnAE5GTkVKvtBkUhpAFeZoL0xxxzWJmBOsgawsooXzhUKtH0P2bsaKKqPRHn4g==@readbookdb.documents.azure.com:10250/readbook?ssl=true");

mongoose.Promise = require('bluebird');
const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://macro-duality-160006.firebaseio.com"
// });


app.prepare()
    .then(() => {
        const server = express()
        server.get('/grouplist', (req, res) => {
            res.end(JSON.stringify(groupdata));
            //console.log(getdata);
        })
        server.get('/eventtotal/', async (req, res) => {
            const groupEventSchema = require('./models/groupEventSchema');
            const groupEventＭodel = mongoose.model('groupEventSchema', groupEventSchema);
            var groupEventtotal = await groupEventＭodel.count({});
            //    console.log('Count is ' + groupEventtotal);
            res.end(JSON.stringify(groupEventtotal));

        })
        server.get('/eventdata/:start/:rowsPerPage', async (req, res) => {
            let start = (typeof (req.params.start) == "undefined") ? 0 : req.params.start * 1;
            let rowsPerPage = (typeof (req.params.rowsPerPage) == "undefined") ? 10 : req.params.rowsPerPage * 1;
            // console.log(rowsPerPage);
            const groupEventSchema = require('./models/groupEventSchema');
            const groupEventＭodel = mongoose.model('groupEventSchema', groupEventSchema);
            let data = await groupEventＭodel.find({}).limit(rowsPerPage).skip(start * 1).sort({ publishedAt: -1 });
            res.json(data);

            //res.end(JSON.stringify(lessonData));
        })

        server.get('/youtubetotal', async (req, res) => {
            const youtubeSchema = require('./models/youtubeSchema');
            const youtubeＭodel = mongoose.model('youtubeSchema', youtubeSchema);
            var youtubetotal = await youtubeＭodel.count({});
            //    console.log('Count is ' + youtubetotal);
            res.end(JSON.stringify(youtubetotal));


        });
        server.get('/youtubedata/:start/:rowsPerPage', async (req, res) => {
            // console.log(req.params.start);
            let start = (typeof (req.params.start) == "undefined") ? 0 : req.params.start * 1;
            let rowsPerPage = (typeof (req.params.rowsPerPage) == "undefined") ? 10 : req.params.rowsPerPage * 1;
            // console.log(rowsPerPage);
            const youtubeSchema = require('./models/youtubeSchema');
            const youtubeＭodel = mongoose.model('youtubeSchema', youtubeSchema);
            let data = await youtubeＭodel.find({}).limit(rowsPerPage).skip(start * 1).sort({ publishedAt: -1 });
            res.json(data);


        })

        server.get('*', (req, res) => {
            //req.req.data=''; //<-- url
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })



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