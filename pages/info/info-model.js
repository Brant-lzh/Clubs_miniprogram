import {Base} from '../../utils/base.js';

class Info extends Base {
    constructor() {
        super();
    }
    //获取某个活动的数据
    getActivityData(id, callBack) {
        var params = {
            url: '/activity/' + id,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    //获取某篇新闻的数据
    getNewData(id, callBack) {
        var params = {
            url: '/new/' + id,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    //获取火热报名中的活动数据
    getHotActData(callBack) {
        var params = {
            url: '/activity/hot',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    //收藏
    Collect(id, callBack) {
        var params = {
            url: 'collect/' + id,
            type: 'POST',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    //申请报名活动
    Apply(id,phone,remark,callBack) {
        var params = {
            url: 'apply/submit',
            type: 'POST',
            data:{
                aid:id,
                phone:phone,
                remark:remark,
            },
            sCallBack: function (res) {
                callBack && callBack(res);
            },
            eCallBack:function(res){
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    //获取动态列表
    getInfoListData(pageIndex,callBack) {
        var params = {
            url: 'info/list',
            type:'GET',
            data:{
                page:pageIndex
            },
            sCallBack: function (res) {
                console.log(res)
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    //获取关注的社团对应活动列表
    getFollowListData(pageIndex,callBack) {
        var params = {
            url: 'info/myfollow',
            type:'GET',
            data:{
                page:pageIndex
            },
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    //获取只有活动列表
    getActListData(pageIndex,callBack) {
        var params = {
            url: 'info/activity',
            type:'GET',
            data:{
                page:pageIndex
            },
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    //获取招新活动列表
    getIsNewListData(pageIndex,callBack) {
        var params = {
            url: 'info/isnew',
            type:'GET',
            data:{
                page:pageIndex
            },
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export {
    Info
};