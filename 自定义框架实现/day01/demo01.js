//原型方式

//定义一个对象 - 名字是$
var $$ = function() {};
$$.prototype = {
    $id:function (str){
        return document.getElementById(str);
    }
}
//在框架中实例化，这样外面使用的时候就不用实例化了
$$ = new $$();
