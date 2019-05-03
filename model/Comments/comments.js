const AV = require('../../utils/av-weapp-min.js');

console.log('Registering comment class')

var CommentObject = AV.Object.extend('Comment');
var commentObject = new CommentObject();
commentObject.set('userid', 1);
commentObject.set('fileid', 1);
commentObject.set('comment', 'hello world');
commentObject.set('date', '2018/08/16');

commentObject.save().then(function (Comment) {
  console.log('objectId is ' + Comment.id);
}, function (error) {
  console.error('Failed to create new object, with error message: ' + error.message);
});