//extend方式

//定义一个对象 - 名字是$
var $$ = function() {};
$$.prototype = {
    //将原对象的属性赋值给目标对象
    extend:function(target,source) {
        //遍历对象
        for(var i in source){
            target[i] = source[i];
        }
        return target;
    }
}
//在框架中实例化，这样外面使用的使用就不用实例化了
$$ = new $$();

//封装一些常用的dom操作
$$.extend($$,{
	$id:function (str){
        return document.getElementById(str);
   },
    //给某个元素设置内容
    html:function(id, value){
        $$.$id(id).innerHTML = value;
    }
})


   