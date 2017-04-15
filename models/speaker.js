var mongoose = require('bluebird').promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost/readbook');
var Schema = mongoose.Schema;

var speaker = new Schema({
    title: String,
    introduce: String,
    youtubes: [{ title: String, vedioId: String }]
});