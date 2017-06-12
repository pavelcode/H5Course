var speed =2;
var id=null;
var div = null;

window.onload = function(){
	div =  document.getElementById("box");
}

function btnUP(){
	//alert("aaa");
	//var div = document.getElementById("box");
	
	//var currentTop = parseInt(getStyle(div,"top"));
	
	
	//怎么设置当前style中top属性
	//div.setAttribute("style","top:50px");
	//div.style["top"]= (currentTop-speed)+"px";
	
	move(div,"top",false);
}


function btnDown(){
	//var div = document.getElementById("box");
	move(div,"top",true);
}

function btnLeft(){
	//var div = document.getElementById("box");	
	move(div,"left",false);
}

function btnRight(){
	//var div = document.getElementById("box");	
	move(div,"left",true);
}

function move(element,style,direction){
	clearInterval(id);
	//间歇调用
	id = setInterval(function(){
		//获得当前的top值或left值
		var old = parseInt(getStyle(element,style));
		//如果direction=true，代表加
		if(direction){
			speed = Math.abs(speed);
		}else{
			speed = -Math.abs(speed);
		}
		element.style[style]= (old+speed)+"px";
		
	},30);
}

function getStyle(element,style){
	
	if(element.currentStyle){
		//是IE
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
	
}