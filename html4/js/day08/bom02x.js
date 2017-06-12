//当屏幕的垂直滚动距离大于500的时候，出现一个Div，点击Div调回页面的顶部
window.onscroll = function(){
//documentElement 就是html标签
//document.documentElement.scrollTop 表示页面的垂直滚动距离
//得到垂直的滚动条，向下滚动的距离			
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//A || B 的值等于 A和B中不为false的那一个 
//例如： 
//var obj1 = new Date();
//var obj2 = null;
//var a = obj1 || obj2;
//document.write(a);  //那么a等于obj1，因为obj2值为null，代表false,而obj1是一个对象代表true

//再例如：
// var v1 = 0;
// var v2 = 400;
// var a = v1 || v2;
// document.write(a+"<br/>")//那么a等于400，因为v1的值为0，代表false

//再例如：
// var v1;
// var v2 = "abc";
// var str = v1 || v2;
// document.write(str+"<br/>");//那么str等于v2， 因为v1的值是undefined，代表false

var backTop = document.getElementById("backTop");
   if(scrollTop >= 500){//距离如果大于等于500，
	//将DIV设置为显示
	   backTop.style.display = "block";
	   backTop.onclick = function(){
	   	  //回到顶部,将document.documentElement.scrollTop设置为0，页面滚回顶部
		  document.documentElement.scrollTop = document.body.scrollTop = 0  ;
	   }
	   }else {//距离如果小于500
		//将DIV设置为隐藏
		backTop.style.display = "none";
	}
}