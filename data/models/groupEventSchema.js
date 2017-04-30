const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var groupEventSchema = new Schema({
    parentGroupId: String,
    parentGroupName: String,
    owner: String,
    title: String,
    description: String,
    startTime: Date
});

module.exports = groupEventSchema;