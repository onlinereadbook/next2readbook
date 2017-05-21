const express = require('express');
const next = require('next');
const groupdata = require('./data/groupsimpleData.json');
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var mongodbKey = require("./mongodbKey.json");
const mongoString = mongodbKey.mongoString.toString();

//import bodyParser from 'body-parser';

//認證部分
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const passport = require('./core/passport');
const { port, auth } = require('./config');
//mongoose.connect(`mongodb://readbookdb:${key}@readbookdb.documents.azure.com:10250/readbook?ssl=true`);
mongoose.connect(mongoString);
console.log(mongoString);
//mongoose.Promise = require('bluebird');




const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()
var api = express.Router()

api.use(
    expressJwt({
        secret: auth.jwt.secret,
        credentialsRequired: false,
        getToken: req => {
            console.log(req.headers.cookie);
        }
    }))


app.prepare()
    .then(() => {
        const server = express()
        server.use(passport.initialize());

        // server.use(expressJwt({
        //     secret: auth.jwt.secret,
        //     credentialsRequired: false,
        //     getToken: req => {
        //         if (typeof (req.headers.cookie) !== "undefined") {
        //             const tokenId = req.headers.cookie.split('id_token=')[1];
        //              return tokenId;
        //         } else { return null }


        //     }
        // }));
        server.use('/member', api);
        server.get('/member', (req, res) => {
            res.send('it is member block');
        });

        server.get('/grouplist', (req, res) => {
            res.end(JSON.stringify(groupdata));
            //console.log(getdata);
        })
        server.get('/eventtotal/', async (req, res) => {
            const groupEventSchema = require('./data/models/groupEventSchema');
            const groupEventＭodel = mongoose.model('groupEventSchema', groupEventSchema);
            var groupEventtotal = await groupEventＭodel.count({});
            //    console.log('Count is ' + groupEventtotal);
            res.end(JSON.stringify(groupEventtotal));


        })
        server.get('/eventdata/:start/:rowsPerPage/:kinddata?', async (req, res) => {
            let start = (typeof (req.params.start) == "undefined") ? 0 : req.params.start * 1;
            let rowsPerPage = (typeof (req.params.rowsPerPage) == "undefined") ? 10 : req.params.rowsPerPage * 1;
            const groupEventSchema = require('./data/models/groupEventSchema');
            const groupEventＭodel = mongoose.model('groupEventSchema', groupEventSchema);
            //console.log(groupEventＭodel);
            let data = await groupEventＭodel.find({}).limit(rowsPerPage).skip(start * 1).sort({ startTime: -1 });
            res.json(data);

            //res.end(JSON.stringify(lessonData));
        })

        server.get('/youtubetotal', async (req, res) => {
            const youtubeSchema = require('./data/models/youtubeSchema');
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
            const youtubeSchema = require('./data/models/youtubeSchema');
            const youtubeＭodel = mongoose.model('youtubeSchema', youtubeSchema);
            let data = await youtubeＭodel.find({}).limit(rowsPerPage).skip(start * 1).sort({ publishedAt: -1 });
            res.json(data);


        })



        //
        // Authentication
        // -----------------------------------------------------------------------------

        server.get('/login/facebook',
            passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false })
        );
        server.get('/login/facebook/return',
            passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
            (req, res) => {
                const expiresIn = 60 * 60 * 24 * 180; // 180 days
                var jwtdata = {};
                jwtdata.userid = req.user.dataValues.id;

                const token = jwt.sign(jwtdata, auth.jwt.secret);
                //req.headers = {};
                //req.headers.authorization = 'Bearer ' + token;
                //$window.sessionStorage.accessToken = token;

                //var token = jwt.sign(req.user, 'shhhhh');
                //console.log(token);
                res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
                res.redirect('/logined');
            }
        );





        server.get('*', (req, res) => {
            //這邊可以給初始值使用            
            //req.req.data=''; //<-- url
            req.data = "123";
            console.log('123');
            // console.log(req.url);
            // if (req.url === '/youtube') {
            //     console.log('youtubedata');
            // }
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