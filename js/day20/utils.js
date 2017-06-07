//document.write(xxx+"<br/>");

function write(str){
	document.write(str+"<br/>");
}


function log(str){
	console.log(str);
}


//获得一定范围的随机数
function getRandom(start,end){
	var d = end+1-start;
	return Math.floor(Math.random()*d+start);
}

//兼容event对象
function getEvent(evt){
	return evt||window.event;
}

//兼容target对象
function getTarget(evt){
	var e = getEvent(evt);
	return e.target||e.srcElement;
	
}

//兼容获得不可见区域的左边缘到可见区域的左边缘的距离
function getScrollLeft(){
	
	return document.documentElement.scrollLeft||document.body.scrollLeft;
}
//兼容获得不可见区域的顶边缘到可见区域的顶边缘的距离
function getScrollTop(){
	
	return document.documentElement.scrollTop||document.body.scrollTop;
}

//兼容阻止默认行为
function stopAction(evt){
	var e = getEvent(evt);
	e.preventDefault?e.preventDefault():e.returnValue = false;
}

//获得时间
function showTime(date){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minu = date.getMinutes();
	var sec = date.getSeconds();
	return "现在是："+year+"年"+month+"月"+day+"日"+" "+hour+":"+minu+":"+sec;
}


//获得外部样式兼容代码
function getStyle(element,style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}



//根据ID来获得DOM对象
function $(id){
	return document.getElementById(id);
}


//获得Cookie的值
function getCookie(name){
	                          
	//alert(document.cookie);  //name=%E4%B9%90%E5%B8%85; country=%E4%B8%AD%E5%9B%BD
	var cookieValue = null;
	var cookieName = encodeURIComponent(name)+"=";  //country=
	//找到cookiename的开始位置
	var cookieStart = document.cookie.indexOf(cookieName);
	
	if(cookieStart>-1){
		var cookieEnd = document.cookie.indexOf(";",cookieStart);
		//要找的Cookie是不在最后一个
		if(cookieEnd==-1){
			cookieEnd= document.cookie.length;
		}	
	}
	cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
	return cookieValue;
	

}

//封装Cookie
function setCookie(name,value,expires,domain,path,secure){
	var cookieContent = encodeURIComponent(name)+"="+encodeURIComponent(value);
	
	if(expires instanceof Date){
		cookieContent += ";expires="+expires;
	}
	
	if(domain){
		cookieContent +=";domain="+domain;
	}
	
	if(path){
		cookieContent+=";path="+path;
	}
	if(secure){
		cookieContent += ";SECURE";
	}
	
	document.cookie = cookieContent;
	
}

//设置超时时间
function setCookieDate(day){
	 var date = null;
	if(typeof day =="number"&&day>0){
		date = new Date();
		date.setDate(date.getDate()+day);
	}
	return date;
}













