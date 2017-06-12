//阻止右键
document.oncontextmenu = function(evt){
	var event = evt||window.event;
	//阻止浏览器的默认行为
	event.preventDefault();
}


onload = function(){
	
	var box = document.getElementById("box");
	//创建数组，记录移动坐标
	var positionArr = [];
	var p = new Object();
	p.x = box.style.left;
	p.y = box.style.top;
	positionArr.push(p);
	
	box.onmousedown = function(evt){
		var event = evt||window.event;
		//获得鼠标相对于box的位置
		 var offsetX = event.offsetX;
		 var offsetY = event.offsetY;
		 
		 document.onmousemove=function(evt){
			 var event = evt||window.event;
			 //修改窗口的位置
			 box.style.left = event.clientX + (document.documentElement.scrollLeft||document.body.scrollLeft) - offsetX + "px";
			 box.style.top = event.clientY + (document.documentElement.scrollTop||document.body.scrollTop) - offsetY + "px";
			 //记录一次，当前位置，放入数组
			 //把X和Y坐标打包成一个对象，存入数组
			 var object = new Object();
			 object.x = box.style.left;
			 object.y = box.style.top;
			 positionArr.push(object);
		 } 
	}
	
	box.onmouseup = function(){
		document.onmousemove = null;
	}
	
	document.getElementById("review").onclick = function(){
		//得到数组的下标最大值
		var i = positionArr.length-1;
		var id = setInterval(function(){
			//得到最后位置的坐标
			var pos = positionArr[i];
			if(i<0){
				//停止计时器
				clearInterval(id);
				//把第一个位置的坐标重新保存到数组中
			    positionArr = [pos];
				//终止这个函数
				return;
			}
			
			box.style.left = pos.x;
			box.style.top = pos.y;
			i--;
		},30);
	}
}