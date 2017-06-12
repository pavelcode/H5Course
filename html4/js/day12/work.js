onload = function(){
	var dialog = document.getElementById("dialog");
	var head = document.getElementById("head");
	var title = document.getElementById("title");
	var btn = document.getElementById("btn");
	
	title.onmousedown = function(evt){
		var event = evt||window.event;
		//记录鼠标的相对位置
		var offsetX = event.offsetX;
		var offsetY = event.offsetY;
		document.onmousemove = function(evt){
			var event = evt||window.event;
			head.style.margin="0px";////样式会影响运动效果
			head.style.left=(event.clientX-offsetX)+"px";
			head.style.top=(event.clientY-offsetY)+"px";
			
		}
	}
	title.onmouseup = function(){
		document.onmousemove = null;
	}
	btn.onclick = function(){
		dialog.style.display ="none";
	}
}