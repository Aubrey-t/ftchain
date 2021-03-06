const app = getApp()
const { User } = require('../../utils/av-weapp-min.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    authData: '',
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const user = User.current();
    console.log('user', user)
    if (user) {
      this.setData({
        userInfo: user.get('username'),
        authData: JSON.stringify(user.get('authData'), undefined, 2),
      });
    }
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   // app.userInfoReadyCallback = res => {
    //   //   this.setData({
    //   //     userInfo: res.userInfo,
    //   //     hasUserInfo: true
    //   //   })
    //   // }
      
    //   AV.User.loginWithWeapp().then(user => {

    //     this.globalData.user = user;
    //     console.log('user from av', user)
    //     this.setData({
    //       userInfo: user,
    //       hasUserInfo: true
    //     })
    //   }).catch(console.error);
    // } else {
    //   AV.User.loginWithWeapp().then(user => {
    //     this.globalData.user = user;
    //     console.log('user from av', user)
    //   }).catch(console.error);
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   // wx.getUserInfo({
    //   //   success: res => {
    //   //     app.globalData.userInfo = res.userInfo
    //   //     this.setData({
    //   //       userInfo: res.userInfo,
    //   //       hasUserInfo: true

    //   //     })
    //   //   }
    // }
  },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})