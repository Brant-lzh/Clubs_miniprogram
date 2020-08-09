import {Base} from '../../utils/base.js';

class Index extends Base{
    constructor(){
        super();
    }
    getBannerData(callBack){
        var params = {
            url:'banner',
            sCallBack:function(res){
                callBack&&callBack(res);
            }
        }
        this.request(params);
    }
    getHotActData(callBack){
        var params = {
            url:'activity/acthot',
            sCallBack:function(res){
                callBack&&callBack(res);
            }
        }
        this.request(params);
    }
    getNewInfoData(callBack){
        var params = {
            url:'info/new',
            sCallBack:function(res){
                callBack&&callBack(res);
            }
        }
        this.request(params);
    }
}

export {Index};