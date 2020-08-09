import {Base} from '../../utils/base.js';

class Search extends Base{
    constructor(){
        super();
    }
    getSearchData(words,callBack){
        var params = {
            url:'search',
            type:'POST',
            data:{
                words:words
            },
            sCallBack:function(res){
                callBack&&callBack(res);
            }
        }
        this.request(params);
    }
}

export {Search};