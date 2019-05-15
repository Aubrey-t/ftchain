const AV = require('../../utils/av-weapp-min.js');

console.log('Registering comment class')

class Comment extends AV.Object {
}
// Register object
AV.Object.register(Comment, 'Comment');

// Export object
module.exports = Comment;