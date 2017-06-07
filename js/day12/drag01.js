dwindow.onload = function(){
    var div = document.getElementsByTagName("div")[0];
    div.onmousedown = function(evt){
	    	var e = evt||window.event;
	    	//鼠标相对于触发对象的偏移量
	    	var offsetX = e.offsetX;
	    	var offsetY = e.offsetY;
	    	document.onmousemove = function(evt){
	    		var e = evt||window.event;
	    		div.style.left = evt.clientX + (document.documentElement.scrollLeft||document.body.scrollLeft)-offsetX+"px";
	    		div.style.top = evt.clientY+(document.documentElement.scrollTop||document.body.scrollTop)-offsetY+"px";
	    	}
    }
    //当鼠标抬起的时候，取消拖动事件
    div.onmouseup = function(){
    	document.onmousemove = "";
    }
}
