const app = getApp();

Component({
  properties: {
    content: {
      type: String,
      value: '',
    },
    media: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    mediaType: {
      type: String,
      value:'',
    }
  },

  data:{
    countLikes: 0,
    countSuperLikes: 0
  },

  methods: {

    goToDetail: () => {
      wx.navigateTo({
        url: '../../pages/pageDetail/pageDetail',
      });
    },

    addLikes: function(){
      this.setData({
          countLikes: this.data.countLikes + 1
      });
    },
  }
})

