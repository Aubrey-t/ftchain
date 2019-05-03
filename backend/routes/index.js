var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ftchain');

var UsersSchema = mongoose.Schema({
  userid: String,// primary key
  name: String,
  age: Number,
  sex:String,
  country: String,
  city: String
});
var Users = mongoose.model("Users", UsersSchema);

var FilesSchema = mongoose.Schema({
  fileid: String, //primary key
  likes: Number,
  title: String,
  type:String,
  userid: String,// foreign Key
});
var Files = mongoose.model("Files", FilesSchema);

var CommentsSchema = mongoose.Schema({
  commentid: String, // Primary Key
  userid: String, // foreign key
  fileid: String, // foreign Key
  comment:String,
  date: Date,
  time:String
});
var Comments = mongoose.model("Comments", CommentsSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to express Aubrey");
});


module.exports = router;

