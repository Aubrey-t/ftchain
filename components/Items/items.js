const AV = require('../../utils/av-weapp-min.js');
const form = require('../../model/Article/article.js');
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
    },

    likes: {
      type: Number,
      value: '',
    },

    name: {
      type: String,
      value: '',
    },
    objectId: {
      type: String,
      value: '',
    },

    articleId: {
      type: String,
      value: '',
    },

    articleTitle: {
      type: String,
      value: '',
    },

    articleDescription: {
      type: String,
      value: '',
    },

    fileType: {
      type: String,
      value: '',
    },
  },

  data:{
    likes:0 ,
    title:'',
    name:'',
    content:'',
    media:'',
    mediaType: '',
    objectId:'',
    articleId:'',
    articleTitle:'',
    articleDesription:'',
    fileType:''
  },


  methods: {

    goToDetail: function (){
      var urlData = JSON.stringify(this.data);
      wx.navigateTo({
        url: `../../pages/pageDetail/pageDetail?data=${urlData}`,
      });
    },

    addLikes: function(){
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
    queryArticle: function() {
      // const self = this
      var query = new AV.Query('Article');
      query.get(this.data.articleId).then((todo) => {
        var newData = (todo.toJSON())
        this.setData({
          likes: newData.likes
        })
      }).catch(function (error) {
        console.error(error);
      });
    }
  },

  ready() {
    const self = this
    self.queryArticle()
  },

  pullDownRefresh() {
    const self = this
    self.queryArticle()
  },
})

