//事件冒泡和阻断
window.onload = function(){
	document.onclick = function(){
		alert("document");
	}
	document.documentElement.onclick = function(){
		alert("html");
	}
	document.body.onclick = function(){
		alert("body");
	}
	document.getElementsByTagName("div")[0].onclick = function(){
		alert("div");
	}
	document.getElementsByTagName("input")[0].onclick = function(evt){
		alert("input");
		var e = evt||window.event;
		e.stopPropagation();   //Propagation 传播 IE不支持
		//e.cancelBubble = true;//FireFox不支持  现在的火狐也支持
		
	}
	
	
}

//兼容性
function stopPro(evt){
	var e = evt||window.event;
	window.event?e.cancelBubble=true:e.stopPropagation();
}
