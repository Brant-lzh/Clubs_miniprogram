const app = getApp();
import {
  Club
} from 'club-model.js';
var club = new Club();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    item: 0,
    sort: 0,
    club_detail: [],
    is_follow: false,
    clubInfoList:[],
    info_loadAll: false,
    pageIndex:1,
  },

  navigateBack: function (e) {
    wx.navigateBack({})
  },


  changeItem: function (e) {
    this.setData({
      item: e.target.dataset.item
    })
  },
  changeSort: function (e) {
    // console.log(e)
    this.setData({
      sort: e.detail.current
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.is_login == true){
      this.setData({
        id:options.id,
      })
      this._loadData(options.id);
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
  getClubInfoList:function(id){
    club.getClubInfoData(id,this.data.pageIndex ,(res) => {
      if (res.data.length > 0) {
        this.data.clubInfoList.push.apply(this.data.clubInfoList, res.data)
        this.setData({
          clubInfoList: this.data.clubInfoList
        });
      } else {
        this.data.info_loadAll = true;
        this.setData({
          info_loadAll: this.data.info_loadAll
        })
      }
    })
  },

  _loadData: function (id) {
    this.getClubInfoList(id)
    club.getClubData(id, (res) => {
      if (res.follow != null) {
        var fol = true
      } else {
        var fol = false
      }
      this.setData({
        'club_detail': res,
        is_follow: fol
      });
    });
  },

  goToInfo: function (event) {
    var id = club.getDataSet(event, 'id');
    var type = club.getDataSet(event, 'type');
    if (type == 0) {
      wx.navigateTo({
        url: '../info/new_detail?id=' + id,
      })
    } else {
      wx.navigateTo({
        url: '../info/activity_detail?id=' + id,
      })
    }
  },

  goTofollow: function (e) {
    var id = club.getDataSet(e, 'id')
    this.setData({
      is_follow: !this.data.is_follow
    })
    club.Follow(id, (res) => {
      
    })
  },

  clubInfoLower:function() {
      if (!this.data.info_loadAll) {
        this.data.pageIndex++;
        this.getClubInfoList(this.data.id);
      }
  }


})