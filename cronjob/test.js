var mongoose = require('bluebird').promisifyAll(require('mongoose'));
mongoose.connect('mongodb://localhost/readbook');
mongoose.Promise = require('bluebird');


var groupSchema=require('../models/groupSchema');
        var groupＭodel = mongoose.model('groupSchema', groupSchema);

           let obj = {};
            obj.id = '11';
            obj.name = '2';
            obj.icon = '33';
            let data = new groupＭodel(obj);
            data.save();
console.log('finish')