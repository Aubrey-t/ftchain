const AV = require('../../utils/av-weapp-min.js');

var file = new AV.File();
class File extends AV.Object{

  get title() {
    return this.get('title');
  }

  get content() {
    return this.get('content');
  }

  get mediaType() {
    return this.get('mediaType');
  }

  get media() {
    return this.get('url')
  }
}

AV.Object.register(File, 'File');
module.exports = File;
