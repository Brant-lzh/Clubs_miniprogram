import {My} from 'my-model.js';
var my = new My();
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad: function () {
    if(app.globalData.is_login == true){
      this._loadData();
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  onShow:function(){
    if(app.globalData.is_login == false){
      wx.switchTab({
        url: '../my/my',
      })
    }
  },

  _loadData:function(){
    my.MyCollectData((res)=>{
      this.setData({
        'myCollect':res
      });
    });
  },
})