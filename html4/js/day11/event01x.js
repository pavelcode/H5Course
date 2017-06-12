/*
 添加事件的三种方式
 */
//内联方式
//<input type="button"  value="按钮" onclick="alert('aaa');"/>
//<input type="button"  value="按钮" onclick="myclick();"/>
//function myclick(){
//	alert("bbb");
//}

//脚本方式
//window.onload = function(){
//var input = document.getElementsByTagName("input")[0]; //获得控件对象
//input.onclick = function() { //给控件添加事件
//alert("ccc");
//}

//或 
//input.onclick = myclick;  //不能加括号 input.onclick = myclick();
//}
//function myclick(){
//	alert("ddd");
//}


//事件方式，第三个参数，先设置为false，到后面捕获的时候讲
//window.onload = function(){
//	var input = document.getElementsByTagName("input")[0];
//	input.addEventListener("click",function(){
//	     alert("eee");
//	},false);  
//}