const AV = require('../../utils/av-weapp-min.js')

console.log('Registering User class')

// var UserObject = AV.Object.extend('User');

var user = new AV.User();

user.setUsername('Aubrey');
user.setPassword('Aubrey');
user.set('sex', 'male');
user.set('city', 'Guangzhou');
user.set('country', 'China');

user.save().then(function (user) {
  console.log('objectId is ' + user.id);
}, function (error) {
  console.error('Failed to create new object, with error message: ' + error.message);
});