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
    superLike: 0,
    title:'',
    content:'',
    media:'',
    mediaType: ''
  },

  methods: {

    goToDetail: function (){
      var urlData = JSON.stringify(this.data);
      wx.navigateTo({
        url: `../../pages/pageDetail/pageDetail?data=${urlData}`,
      });
    },

    addLikes: function(){
      this.setData({
          countLikes: this.data.countLikes + 1
      });
      // console.log(this.data.media)
    },

    addSuperLikes: function () {
      this.setData({
        superLikes: this.data.superLikes + 1
      });
      // console.log(this.data.media)
    },
  }
})

