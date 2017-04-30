const mongoose = require('mongoose');

var Schema = mongoose.Schema;
var youtubeSchema = new Schema({
    title: String,
    id: String,
    etag: String,
    tags: String,
    videoId: String,
    description: String,
    publishedAt: Date,
    thumbnails_default: String,
    thumbnails_high: String

});

module.exports = youtubeSchema;

