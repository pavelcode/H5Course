
function log(str) {
	console.log(str);
}

function getStyle(obj) {
	if(obj.currentStyle) {
		return obj.currentStyle;
	} else {
		return window.getComputedStyle(obj,null);
	}
}

function randomInt(min,max){
	return min + Math.round(Math.random()*(max-min));
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