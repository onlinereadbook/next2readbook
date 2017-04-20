// import Sequelize from 'sequelize';
// import { databaseUrl } from '../src/config';
// import Youtubelist from '../src/data/models/YoutubeData';
//console.log(databaseUrl);

var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");


var mongoose = require('bluebird').promisifyAll(require('mongoose'));
//mongoose.connect('mongodb://localhost/readbook');

mongoose.connect("mongodb://readbookdb:pDsRGbIh53n0pUZ3gepWOYnoMnAE5GTkVKvtBkUhpAFeZoL0xxxzWJmBOsgawsooXzhUKtH0P2bsaKKqPRHn4g==@readbookdb.documents.azure.com:10250/readbok?ssl=true");



mongoose.Promise = require('bluebird');
var youtubeSchema = require('../models/youtubeSchema');
var youtubeＭodel = mongoose.model('youtubeSchema', youtubeSchema);
//console.log(mongoose);
let obj = {};
obj.title = "poltest";
var data = new youtubeＭodel(obj)
data.save();