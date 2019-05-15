const AV = require('../../utils/av-weapp-min.js');

class Article extends AV.Object {
}
// Register object
AV.Object.register(Article, 'Article');

// Export object
module.exports = Article;