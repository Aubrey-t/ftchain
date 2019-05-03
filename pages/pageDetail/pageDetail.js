// pages/pageDetail/pageDetail.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    media : '',
    content:'',
    likes:'',
    mediaType:''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // console.log(options.data)
    var objData =JSON.parse(options.data)
    this.setData({
        media:objData.media,
        content:objData.content,
        likes:objData.countLikes,
        mediaType: objData.mediaType
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

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