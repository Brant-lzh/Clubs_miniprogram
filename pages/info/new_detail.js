import {Info} from 'info-model.js';
var info = new Info();
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this._loadData(id);
  },

  _loadData:function(id){
    var that = this;
    info.getNewData(id,(res)=>{
      // res.check_time = utils.tsFormatTime(res.check_time,'Y年M月D日 h:m')
      var new_content = res.content;
      WxParse.wxParse('new_content', 'html', new_content, that, 5);
      this.setData({
        'new':res
      });
    });
  },



  
})