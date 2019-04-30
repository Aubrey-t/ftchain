const app = getApp();

Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    showProfile: {
      type: Boolean,
      value: false,
    },
    profilePic: {
      type: String,
      value: null,
    },
    backgroundColor: {
      type: String,
      value: 'black',
    },
    titleColor: {
      type: String,
      value: 'white',
    },
    iconType: {
      type: String,
      value: 'light',
    },
  },

  data: {
    showBackButton: false,
    statusBarHeight: 0,
  },


  methods: {
    goBack: () => {
      console.log('going back');
      wx.navigateBack({ delta: 1 });
    },
    goToProfile: () => {
      console.log('go to profile');
      wx.navigateTo({
        url: '../profile/profile',
      });
    },
  },
  ready() {
    console.log(getCurrentPages().length)
    if (getCurrentPages().length > 1) {
      this.setData({
        showBackButton: true,
      });
    }
    // Set status
    const sysInfo = wx.getSystemInfoSync();

    this.setData({
      statusBarHeight: sysInfo.statusBarHeight,
    });
  }
});