/**
 * Created by zhousg on 2016/1/8.
 */
/*公用的js文件*/
window.comjd ={};
window.comjd.transitionEnd = function(obj,callback){
    /*当是对象的时候绑定事件*/
    if(typeof obj == 'object'){
        obj.addEventListener('transitionEnd',function(e){
            /*if(callback){
                callback(e);
            }*/
            callback && callback(e);
        },false);
        obj.addEventListener('webkitTransitionEnd',function(e){
            callback && callback(e);
        },false);
    }
}