
const AV = require('../../utils/av-weapp-min.js');

class Media extends AV.Object {
}
// Register object
AV.Object.register(Media, 'Media');

// Export object
module.exports = Media;