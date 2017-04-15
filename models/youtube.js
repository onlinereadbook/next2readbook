var mongoose = require('bluebird').promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost/readbook');
var Schema = mongoose.Schema;
var youtube = new Schema({
    title: String,
    id: String,
    etag: String,
    tag: String,
    descrption: String,
    publishedAt: Date,
    thumbnails_default: String,
    thumbnails_high: String
});