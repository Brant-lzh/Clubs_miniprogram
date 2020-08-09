import {
    Base
} from '../../utils/base.js';

class Club extends Base {
    constructor() {
        super();
    }
    getClubData(id, callBack) {
        var params = {
            url: 'club/' + id,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    getClubData(id, callBack) {
        var params = {
            url: 'club/' + id,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }

    getClubInfoData(id,pageIndex, callBack) {
        var params = {
            url: 'info/clublist',
            type:'GET',
            data:{
                id:id,
                page:pageIndex
            },
            sCallBack: function (res) {
                callBack && callBack(res);
            }
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


}

export {
    Club
};