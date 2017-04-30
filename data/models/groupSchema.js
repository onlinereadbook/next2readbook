const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var groupSchema = new Schema({
    id: String,
    name: String,
    icon: String,
    cover: String
});

module.exports = groupSchema;