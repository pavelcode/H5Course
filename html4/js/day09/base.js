function log(str) {
	console.log(str);
}

function write(str){
	document.write(str+"<br/>");
}

function getRandom(init,end){S
	var d = end+1-init;
	return Math.floor(Math.random()*d+init);
}

function showTime(date){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minu = date.getMinutes();
	var sec = date.getSeconds();
	return year+"年"+month+"月"+day+"日 "+addZero(hour)+":"+addZero(minu)+":"+addZero(sec);
}

function getStyle(obj) {
	if(obj.currentStyle) {
		return obj.currentStyle;
	} else {
		return window.getComputedStyle(obj,null);
	}
}

//根据class名称来获取DOM元素
function getByClassName(classname){
	if(document.getElementsByClassName == undefined) {
		var domList = document.getElementsByTagName("*");
		var arr = [];
		for(var i=0; i<domList.length; i++){
			if( domList[i].className == classname){
				arr.push(domList[i]);
			}
		}
		return arr;
	} else {
		return  document.getElementsByClassName(classname);
	}
}

/**
 * ele : 需要添加事件的元素
 * eventtype : 事件的类型（字符串，不加on）
 * fun : 要绑定的函数
 * isCapture : 是否捕获，true代表捕获，false代表冒泡
 * 举例：
 */
function addEvent(ele, eventtype, fun, isCapture) {
	if(ele.attachEvent) {
		ele.attachEvent("on"+eventtype, fun);
	} else {
		ele.addEventListener(eventtype, fun, isCapture);
	}
}

function getCookie(key) {
	var str = document.cookie;
	var list = str.split("; ");
	for(var i in list) {
		var kv = list[i].split("=");
		if( kv[0] == key ){
			return kv[1]; //xxx=val
		}   
	}
	return null;
}

//设计能力
function addCookie(key,val,time){
	var d = new Date();
	d.setDate(d.getDate()+time);
	document.cookie = key+"="+val+"; expires="+d;
}

function removeCookie(key) {
	addCookie(key,null,-1);
}


function randomColor(){
	var R = Math.round(Math.random()*255).toString(16);
	var G = Math.round(Math.random()*255).toString(16);
	var B = Math.round(Math.random()*255).toString(16);
	return "#" + (R.length<2 ? "0"+R : R) + (G.length<2 ? "0"+G : G) + (B.length<2 ? "0"+B : B);
}










//使用原来的方式来访问节点对象，非常的冗长
//window.onload = function(){
//	alert(document.getElementById("div_id").innerHTML);
//	alert(document.getElementsByName("btn")[0].value);
//	alert(document.getElementsByTagName("p")[0].innerHTML);
//}

//函数式
//function $(id){
//	return document.getElementById(id);
//}
//
//window.onload = function(){
//	alert($("div_id").innerHTML);
//}

//对象式
//var Base = {
//	$:function(id){
//		return document.getElementById(id);
//	}
//};
//
//window.onload = function(){
//	alert(Base.$("div_id").innerHTML);
//}

//封装
//var Base = {
//	getId:function(id){
//		return document.getElementById(id);
//	},
//	getName:function(name){
//		return document.getElementsByName(name);
//	},
//	getTagName:function(tag){
//		return document.getElementsByTagName(tag);
//	}
//};
//
//window.onload = function(){
//	alert(Base.getId("div_id").innerHTML);
//	alert(Base.getName("btn")[0].value);
//	alert(Base.getTagName("p")[0].innerHTML);
//}

//实现连缀 原本多行设置，现在一行设置
window.onload = function(){
	//var base = new Base();
	//base.getId("show").css("color","red").html("222").click(function(){alert("abc")})
   //base.getTagName("p").css("color","green").html("AAA").click(function(){alert("AAA")});
   
   $().getId("show").css("color","red").html("222").click(function(){alert("abc")})
   
	
}

var $ = function(){
	return new Base();
}


function Base(){
	//保存节点和节点数组
	this.elements = [];
	//获得ID节点
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	}
	//获得标签节点
	this.getTagName = function(name){
		var tags = document.getElementsByTagName(name);
		for(var i=0;i<tags.length;i++){
			this.elements.push(tags[i]);
		}
		return this;
	}
}

Base.prototype.css = function(atrr,value){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style[atrr] = value;
	}
	return this;
}

Base.prototype.html = function(str){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].innerHTML=str;
	}
	return this;
}

Base.prototype.click = function(fn){  //fn 是函数变量
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onclick=fn;
	}
	return this;
}





