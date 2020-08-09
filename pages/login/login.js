const app = getApp();
import {
  Config
} from '../../utils/config.js';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    is_load: false
  },

  goToSecret: function () {
    wx.navigateTo({
      url: '../login/secret',
    })
  },

  doLogin: function (param) {
    this.setData({
      is_load: true
    })
    var that = this;
    var sid = param.detail.value.sid
    var password = param.detail.value.password
    wx.login({
      success: (res) => {
        wx.request({
          url: Config.restUrl + 'login/dologin',
          method: "POST",
          data: {
            sid: sid,
            password: password,
            code: res.code
          },
          header: {
            'content-type': 'application/json',
          },
          success: function (res) {
            console.log(res)
            var code = res.statusCode.toString();
            if(code == '401'){
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 2000 //持续的时间
              })
            }
            if (code == '500') {
              wx.showToast({
                title: '服务器正忙，请稍后再试！',
                icon: 'none',
                duration: 2000 //持续的时间
              })
            }
            if (res.data.token != null) {
              app.globalData.is_login = true;
              wx.setStorageSync('token', res.data.token);
              wx.switchTab({
                url: '../my/my',
              })
            } else {
              that.setData({
                'is_load': false,
              }) //处理异常
              wx.showToast({
                title: '服务器正忙，请稍后再试！',
                icon: 'none',
                duration: 2000 //持续的时间
              })
            }

          },
          fail: function (res) {
            console.log(res)
          },
        })
      },
    })
  }

})