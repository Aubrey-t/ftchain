const app = getApp();

Component({
  properties: {
    description: {
      type: String,
      value: '',
    },
    media: {
      type: String,
      value: '',
    },
    likes: {
      type: String,
      value: '',
    },
    mediaType: {
      type: String,
      value:'',
    }
  },

  methods: {
    goToDetail: () => {
      console.log('go to details');
      wx.navigateTo({
        url: '../../pages/pageDetail/pageDetail',
      });
    },
  }
})