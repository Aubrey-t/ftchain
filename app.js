//app.js
// Require Leancloud library (the av-weapp-min.js).
const AV = require('./utils/av-weapp-min.js');
AV.init({
  appId: 'lhVGH8pt5CdqzisArruQrsds-gzGzoHsz',
  appKey: 'g7XBwY5K7LevQEJTqcNPH52X',
});


App({
  onLaunch: function () {
    // API call to get data from the local cache
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user;
      console.log('user from av', user)
    }).catch(console.error);

    // Get user information

    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
              
              
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    
    
  },
  globalData: {
    userInfo: null
  }
})