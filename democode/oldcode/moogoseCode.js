/*
1.先定義code
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
2.var Blog = mongoose.model('Blog', blogSchema); 掛載
3.新增 var dog = new Animal({ type: 'dog' });
dog.save();
4.find
var Animal = mongoose.model('Animal', animalSchema);
Animal.findByName('fido', function(err, animals) {
  console.log(animals);
});
//正規化查找
animalSchema.query.byName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};
//用callback
var Animal = mongoose.model('Animal', animalSchema);
Animal.find().byName('fido').exec(function(err, animals) {
  console.log(animals);
});


Main流程的code

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




*/
