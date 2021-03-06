import {
  Info
} from 'info-model.js';
var info = new Info();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否已经登录
    this.setData({
      id: options.id
    })

  },

  submitApply: function (e) {
    this.setData({
      loadModal: true
    })
    var that = this
    var phone = e.detail.value.phone
    var reg = /^1[0-9]{10}$/;
    if (this.check(phone, reg, '手机号码输入有误！')) {
      wx.requestSubscribeMessage({
        tmplIds: [
          'UB1GZDU6lWcEqLtaxwkHPnZX04T5YubsRWSqGZ7psoU',
          'YuhgRiFtgxBoKuyn6WoqNIM4x4d5pYafjyZes37824k'
        ],
        success(res) {
          if (
            res['UB1GZDU6lWcEqLtaxwkHPnZX04T5YubsRWSqGZ7psoU'] == 'accept'
             &&
            res['YuhgRiFtgxBoKuyn6WoqNIM4x4d5pYafjyZes37824k'] == 'accept'
          ) {
            that.ToApply(e);
          } else {
            wx.showToast({
              title: '您已拒绝授权，将无法收到通知！',
              icon: 'none',
              duration: 2000 //持续的时间
            })
            that.setData({
              loadModal: false
            })
          }
        }
      })
    }

  },


  // check()方法
  check: function (data, reg, errMsg) {
    if (!reg.test(data)) {
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 1500
      })
      this.setData({
        loadModal: false
      })
      return false
    }
    return true
  },


  ToApply: function (e) {
    var phone = e.detail.value.phone
    var remarks = e.detail.value.remarks
    info.Apply(this.data.id, phone, remarks,
      (res) => {
        this.setData({
          loadModal: false
        })
        if (res.errorCode == 0) {
          wx.showToast({
            title: '报名成功',
            icon: 'success',
            duration: 2000 //持续的时间
          })
        } else if (res.errorCode == 80000) {
          wx.showToast({
            title: res.msg,
            icon: 'none',
            duration: 2000 //持续的时间
          })
        } else {
          wx.showToast({
            title: '报名失败',
            icon: 'none',
            duration: 2000 //持续的时间
          })
        }
        setTimeout(() => {
          var pages = getCurrentPages();
          var beforePage = pages[pages.length - 2];
          beforePage._loadData(this.data.id);
          wx.navigateBack({
            delta: 1,
          })
        }, 2100)
      })
  },


})