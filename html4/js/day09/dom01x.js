/*
 什么是DOM
 节点之间的关系
 节点的分类
 */

/**
 * DOM的方法
 */
//通过传入元素的id，获得节点对象
//var p = document.getElementById("my");
//alert(p);
//返回为空，主要是因为DOM只能在文档加载完成之后，才能获得对象

//获得节点对象
//方法1 把<script>标签获得（底部？）
//方法2 使用将来要学到的onload()
//window.onload = function(){
//	var p = document.getElementById("my");
//  alert(p);
//}

//获取节点属性值
//window.onload = function(){
//	var p = document.getElementById("my");
//  document.write(p.id+"<br/>");
//  document.write(p.title+"<br/>");
//  document.write(p.style+"<br/>");
//  document.write(p.style.color+"<br/>");
//  document.write(p.className+"<br/>");
//}



//获得节点内容
//window.onload = function(){
//	var p = document.getElementById("my");
//  //alert(p);
//  document.write(p.tagName+"<br/>"); //标签名
//  document.write(p.innerHTML+"<br/>"); //标签内的文本  不管里面是否有标签
//}

//设置节点内容
//window.onload= function(){
//	var p = document.getElementById("my");
//  p.innerHTML = "aaa";  //可以设置节点文本内容
//  p.style.color="blue";  //设置节点属性
//  
//}

//练习：广告自动关闭 dom02x

//获得输入框的值

//按钮点击执行函数

//例子：不断的修改div的背景颜色和文字颜色 dom03x

//练习：计算两个输入数字的和dom04x




//通过标签名获得标签对象
//window.onload = function(){
//	var li = document.getElementsByTagName("li");
//	//alert(li.length);
//	for(var j=0;j<li.length;j++){
//		//document.write(j+"="+li[j].innerHTML); //打印有问题，只能出来第一个 ？？？
//		alert(i+"="+li[i].innerHTML);
//	}
//}

//得到body标签
//window.onload = function(){
//	var body = document.getElementsByTagName("body")[0];
//	document.write(body+"<br/>")
//}

//得到HTML中所有的标签
//window.onload = function(){
//	var tag = document.getElementsByTagName("*");
//	document.write(tag.length+"<br/>");  //得到标签个数，IE比非IE会多一个，是因为IE把文档声明也当
//	document.write(tag[0].tagName); //IE返回！ 非IE返回HTML
//}

//根据标签中的name属性获得标签对象
//window.onload = function(){
//	var input =  document.getElementsByName("myinput")[0];
//	alert(input);
// 	alert(input.value);
//  alert(input.test);   //自定义属性不能够获取到 非IE不能获取
//  alert(input.getAttribute("test"));  //可以获得自定义属性
//}

//获取到class属性
//window.onload = function(){
//	var input =  document.getElementsByName("myinput")[0];
//	alert(input.getAttribute("class"));  //IE无法获取
//	alert(input.getAttribute("className")); //非IE无法获取	
//}

//兼容
//window.onload = function(){
//	var input =  document.getElementsByName("myinput")[0];
//	if(input.getAttribute("class")==null){
//		document.write(input.getAttribute("className"));
//	}else{
//		document.write(input.getAttribute("class"));
//	}
//	
//}
//对于onclick，style不建议使用getAttribute获取。


//Demo4 简易日历--设置class值，事件，匿名函数 这个还不能讲

//添加属性
//window.onload = function(){
//	var input =  document.getElementsByName("myinput")[0];
//	input.setAttribute("title","标题");
//}

//动态设置样式
//onload = function(){
//	  var p = document.getElementById("myptag");
//	  if(p.getAttribute("class")==null){
//		  p.setAttribute("className","myblueclass");
//		 //p.className="myblueclass"; 
//	  }else{
//		   p.setAttribute("class","myblueclass");
//		 // p.class="myblueclass"; 错误 class是关键字
//	  }  
//}

//移除属性
//window.onload = function(){
//	var input =  document.getElementsByName("myinput")[0];
//	input.removeAttribute("title");
//}

//获取元素标签的CSS属性
//window.onload = function(){
	//var div = document.getElementById("my");
	//document.write(div.currentStyle+"<br/>");//IE支持
	//document.write(getComputedStyle(div)+"<br/>"); //非iE支持
    //document.write(div.currentStyle["color"]+"<br/>");//IE支持
	//document.write(getComputedStyle(div)["color"]+"<br/>"); //非iE支持   rgb(255, 0, 0)
//}
//兼容写法
//function getStyle(element, style){
//	if(element.currentStyle){
//	   return element.currentStyle[style];
//	}else{
//	   return getComputedStyle(element)[style];
//	}
//}

//dom05x 控制div的移动