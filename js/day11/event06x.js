s//鼠标触发li的背景修改
//window.onload = function(){
//	var ul = document.getElementById("ul");
//	var lis = ul.getElementsByTagName("li");
//	for(var i=0;i<lis.length;i++){
//		lis[i].onmouseover = function(){
//			this.style.background = "red";
//		}
//		lis[i].onmouseout = function(){
//			this.style.background = "";
//		}
//	}
//}
//如果有很多个li用for循环的话就比较影响性能

//使用事件委托实现，
//window.onload = function(){
//  var ul = document.getElementById("ul");
//	ul.onmouseover = function(evt){
//		var e = evt||window.event;
//		//获得点击对象
//		var target = e.target||e.srcElement;
//		//判断点击对象是否是li对象
//		if(target.nodeName.toLowerCase()=="li"){
//			target.style.background = "red";
//		}
//	}
//	ul.onmouseout = function(evt){
//		var e = evt||window.event;
//		//获得点击对象
//		var target = e.target||e.srcElement;
//		//判断点击对象是否是li对象
//		if(target.nodeName.toLowerCase()=="li"){
//			target.style.background = "";
//		}
//	}
//}

//新添加的li，如果不用事件委托，li不会继承事件
//添加<input type="button" id="btn" />
//window.onload = function(){
//	var ul = document.getElementById("ul");
//	var lis = ul.getElementsByTagName("li");
//	var btn = document.getElementById("btn");
//	for(var i=0;i<lis.length;i++){
//		lis[i].onmouseover = function(){
//		   this.style.background = "red";	
//		}
//		lis[i].onmouseout = function(){
//			this.style.background = "";
//		}
//	}
//	btn.onclick = function(){
//		var newli = document.createElement("li");
//		newli.innerHTML="new li";
//		ul.appendChild(newli);
//	}
//}

//使用事件委托，让添加的li也有事件
//window.onload = function(){
//	var ul = document.getElementById("ul");
//	var btn = document.getElementById("btn");
//	ul.onmouseover = function(evt){
//		var e = evt||window.event;
//		var target = e.target||e.srcElement;
//		if(target.nodeName.toLowerCase()=="li"){
//			target.style.background = "red";
//		}
//	}
//	ul.onmouseout = function(evt){
//		var e = evt||window.event;
//		var target = e.target||e.srcElement;
//		if(target.nodeName.toLowerCase()=="li"){
//			target.style.background = "";
//		}
//	}
//	btn.onclick = function(){
//		var newli = document.createElement("li");
//		newli.innerHTML="new li";
//		ul.appendChild(newli);
//	}
//}