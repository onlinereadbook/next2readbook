var mongoose = require('bluebird').promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost/readbook');
var Schema = mongoose.Schema;

var user = new Schema({
    name: String,
    fbId: String,
    baseinfo: [{ title: String, group: String }],
    group: [{ groupId: String, groupName: String }]

});