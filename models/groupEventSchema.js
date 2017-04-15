const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var groupEventSchema = new Schema({
    title: String,
    introduce: String,
    vedioId: String 
});

module.exports = groupEventSchema;