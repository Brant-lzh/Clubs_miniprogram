import {
  Index
} from 'index-model.js';
var index = new Index();

Page({
  data: {},

  onLoad: function () {
    this._loadData();
  },

  _loadData: function () {
    index.getBannerData((res) => {
      this.setData({
        'bannerList': res
      });
    });
    index.getHotActData((res) => {
      this.setData({
        'hotList': res
      });
    });
    index.getNewInfoData((res) => {
      this.setData({
        'infoList': res
      });
    });

  },

  goToClub: function (event) {
    var id = index.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../club/club?id=' + id,
    })
  },

  Info:function(){
    wx.switchTab({
      url: '../info/info',
    })
  },

  goToInfo: function (event) {
    var id = index.getDataSet(event, 'id');
    var type = index.getDataSet(event, 'type');
    if (type == 0) {
      wx.navigateTo({
        url: '../info/new_detail?id=' + id,
      })
    } else {
      wx.navigateTo({
        url: '../info/activity_detail?id=' + id,
      })
    }
  }


})