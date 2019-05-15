// pages/pageDetail/pageDetail.js
const AV = require('../../utils/av-weapp-min.js');
const form = require('../../model/Comments/comments.js');
const form2 = require('../../model/Article/article.js');

const app = getApp()
const getCommentDataForRender = comment => ({
  commentId: comment.get('objectId'),
  commentFileId: comment.get('fileid'),
  comment: comment.get('comment'),
});

Page({

  /**
   * Page initial data
   */
  data: {
    comments:[],
    media : '',
    content:'',
    likes:'',
    mediaType:'',
    superLikes: '',
    objectId:'',
    articleId:'',
    fileDescription:'',
    loading:false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var objData =JSON.parse(options.data)
    objData.countLikes + 1
    this.setData({
        media:objData.media,
        content:objData.content,
        likes:objData.countLikes,
        fileType: objData.fileType,
        objectId: objData.objectId,
        fileDescription: objData.articleDescription,
        likes: objData.likes,
        articleId:objData.articleId,
    });
  },

  addLikes: function () {
    const self = this

    var todo = AV.Object.createWithoutData('Article', this.data.articleId);
    todo.save().then(function (todo) {
      todo.increment('likes', 1);
      todo.fetchWhenSave(true);
      return todo.save();
    }).then(function (todo) {
      self.queryArticle()
    }, function (error) {
    });
  },

  queryArticle: function () {
    // const self = this
    var query = new AV.Query('Article');
    query.get(this.data.articleId).then((todo) => {
      var newData = (todo.toJSON())
      this.setData({
        likes: newData.likes,
        superLikes : newData.superLikes
      })
    }).catch(function (error) {
      console.error(error);
    });
  },

  bindFormSubmit: function (e) {
    this.setData({
      loading: !this.data.loading,
      // fileId: this.data.objectId 
    })
    
    // Loading toast
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 150
    })

    // locale storage
    var comment = e.detail.value.comment

    // Leancloud permissions
    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);

    //LeanCloud Storage
    var CommentObject = AV.Object.extend('Comment');
    var commentObject = new CommentObject();
    commentObject.set('fileid', this.data.objectId);
    commentObject.set('userid', '5cd3df6d43e78c00658e285c');
    commentObject.set('comment', comment);

    commentObject.save().then(function (Comment) {
  })
},

  superLikes: function () {
    const self = this

    var todo = AV.Object.createWithoutData('Article', this.data.articleId);
    todo.save().then(function (todo) {
      todo.increment('superLikes', 1);
      todo.fetchWhenSave(true);
      return todo.save();
    }).then(function (todo) {
      self.queryArticle()
    }, function (error) {
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

    const self = this
    self.queryArticle()
    
    var query = new AV.Query('Comment')
    query.equalTo('fileid', this.data.objectId).find().then((res) => this.setData({
      comments: res.map(getCommentDataForRender)
    }))
  },


  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})