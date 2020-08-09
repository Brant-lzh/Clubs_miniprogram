import {
    Base
} from '../../utils/base.js';
class My extends Base {
    constructor() {
        super();
    }

    MyInfoData(callBack) {
        var params = {
            url: 'myinfo',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }


    MyClubData(callBack) {
        var params = {
            url: 'myclub',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    MyFollowData(callBack) {
        var params = {
            url: 'myfollow',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    MyCollectData(callBack) {
        var params = {
            url: 'mycollect',
            sCallBack: function (res) {
                callBack && callBack(res);
            },
        }
        this.request(params);
    }

    MyApplyData(callBack) {
        var params = {
            url: 'myapply',
            sCallBack: function (res) {
                callBack && callBack(res);
            },
        }
        this.request(params);
    }


    
    Follow(id, callBack) {
        var params = {
            url: 'follow/' + id,
            type: 'POST',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    OpenMsg(id, callBack) {
        var params = {
            url: 'openmsg/' + id,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    LoginOut(callBack) {
        var params = {
            url: 'login/loginout',
            sCallBack: function (res) {
                callBack && callBack(res);
            },
        }
        this.request(params);
    }

}

export {
    My
};