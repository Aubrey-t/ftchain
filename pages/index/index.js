//index.js
//获取应用实例
const AV = require('../../utils/av-weapp-min.js');
const form = require('../../model/Article/article.js');

const app = getApp()
const getFileDataForRender = file => ({
  title: file.get('title'),
  content:file.get('description'),
  mediaType:file.get('imageType'),
  media:file.get('url'),
  name:file.get('name'),
  likes:file.get('likes'),
  objectId: file.get('objectId')
});

const getArticleDataForRender = article => ({
  articleId: article.get('objectId'),
  articleDescription:article.get('description'),
  articleTitle: article.get('title'),
  fileId: article.get('fileId'),
  fileType: article.get('fileType')
});

// var todo = AV.Object.createWithoutData('Article', '5cda8147c8959c0068922fbe');
// todo.set('description', 'ftchain video lessons');
// todo.set('fileType', 'video');
// todo.set('title', 'New Video');
// todo.set('fileId', '5cda7e48c8959c0068920231');
// todo.save().then(function (articles) { /* 保存成功 */ });


Page({
  data: {
    motto: 1,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    files: [],
    articles:[]
  },

  login: function () {
    return AV.Promise.resolve(AV.User.current()).then(user =>
      user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null
    ).then(user => user ? user : AV.User.loginWithWeapp({
      preferUnionId: true,
    })).catch(error => console.error(error.message));
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  fetchFiles: function() {
    new AV.Query('_File')
      .find()
      .then(files => this.setData({
        files: files.map(getFileDataForRender)
      }))
      // .then(files => {console.log(files)})
  },

  fetchArticles: function () {
    new AV.Query('Article')
      .find()
      .then(articles => this.setData({
        articles: articles.map(getArticleDataForRender)
      }))
      .then(articles => {console.log(articles)})
  },

  onReady() {
    this.login()
    .then(this.fetchArticles.bind(this))
    .then(this.fetchFiles.bind(this))
    .catch(error => console.error(error.message)); 
  },

  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})
