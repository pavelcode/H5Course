//火狐获得XMLHTTP对象
//不能用这个方式打印，IE会出现加载问题，直接放在onload外面进行执行
//window.onload = function(){
//	var xhr = new XMLHttpRequest();
//	document.write(xhr);  
//}

//var xhr = new XMLHttpRequest();
//document.write(xhr);  


function createXHR(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
	    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	    xmlhttp=new XMLHttpRequest();
	}
	else
	{
	    // IE6, IE5 浏览器执行代码
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}
//xhr 兼容写法  IE获取不到Activ/eXObject对象
function createXHR(){
	try{
	   // Firefox, Opera 8.0+, Safari
	    return new XMLHttpRequest();
	 }catch (e){
	  // Internet Explorer
	   try{
		   return new ActiveXObject("Msxml2.XMLHTTP");
	      }catch (e){
	      try{
	    	      return new ActiveXObject("Microsoft.XMLHTTP");
	         }catch (e){
	           alert("您的浏览器不支持AJAX！");
	           return false;
	         }
	      }
	 }
}

/*
function createXHR(){
	if(typeof XMLHttpRequest!='undefined'){
		return new XMLHttpRequest();
	}else if(typeof ActiveObject!='undefined'){
		//判断支持的XMLHttp版本
		var version = ['MSXML2.XMLHTTP.6.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP'];
		for(var i=0;i<version.length;i++){
			try{
				return new ActiveXObject(version[i]);
			}catch(e){
				//TODO handle the exception
			}
		}
	}else{
		throw new Error("你的游览器不支持XMLHttpRequest");
	}
}
*/

//无刷新获得即时日期
/*
 <button onclick="getDate()">获得时间</button><span></span>
 */
function getDate(){
	var xhr = createXHR();
	//document.write(xhr);
	xhr.open("GET","ajax01.jsp",true);//false代表同步： 按照步骤顺序执行  true代表异步：同时执行
	xhr.send(null); //开始发送
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			//alert(xhr.responseText);
			document.getElementsByTagName("span")[0].innerHTML = xhr.responseText;
		}
	}
}

//IE第一次访问服务器的数据，第二次开始访问服务端，我们通过随机数解决
//window.onload = function(){
//	xhr.open("GET","ajax01.jsp?rand="+Math.random(),true);
//}

//整理添加返回状态
window.onload = function(){
	var xhr = createXHR();
	//document.write(xhr);
	xhr.open("GET","ajax01.jsp?rand="+Math.random(),true);//false 代表同步    只是发送请求的准备
	xhr.send(null); //开始发送
	document.write("数据获取：状态码是"+xhr.status+"--状态信息是："+xhr.statusText);
}

//整理添加准备状态
//window.onload = function(){
//	var xhr = createXHR();
//	//document.write(xhr);
//	xhr.open("GET","demo.html?rand="+Math.random(),true);// 这里必须是true false代表同步： 按照步骤顺序执行  true代表异步：同时执行
//	xhr.send(null); //开始发送
//	if(xhr.readyState==4&&xhr.status==200){
//	document.write(xhr.responseText+"<br/>"); //打印出服务端返回的数据
//	}else{
//	document.write("数据获取失败：状态码是"+xhr.status+"--状态信息是："+xhr.statusText);
//	}
//}

//判断名字是否存在
/*
 用户名<input type="text" id="name" onblur="isExistName()" /> <span></span>
 */
//function isExistName(){
//	var xhr = createXHR();
//	//document.write(xhr);
//	var name = document.getElementById("name").value;
//	xhr.open("GET","ajax02.jsp?rand="+Math.random()+"&name="+name,true);//false代表同步： 按照步骤顺序执行  true代表异步：同时执行
//	xhr.send(null); //开始发送
//	
//	xhr.onreadystatechange = function(){
//		if(xhr.readyState==4){
//			//alert(xhr.responseText);
//			var result = xhr.responseText.trim();
//			if(result=="ok"){
//				document.getElementsByTagName("span")[0].innerHTML = "用户名已存在，不可以注册";
//			}else{
//				document.getElementsByTagName("span")[0].innerHTML = "用户名不存在，可以注册";
//			}
//		}
//	}
//}
//错误1：ie不支持trim()
//错误2：返回的数据个数不对，这个是服务端的问题，我们使用result.indexOf("ok")>-1解决




//GET和POST请求方式的区别
//使用表单提交，打印接收到的数据，体现出区别
/**POST请求
 * xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); //必须设置才管用(可以不用)
 */
function validateUNameIsExist(){
	
    var name = document.getElementById("username").value;
    
	var xhr = createXHR();
	xhr.open("POST","demo02.jsp",true);//false 代表同步    只是发送请求的准备
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); //必须添加，不能错
	xhr.send("rand="+Math.random()+"&name=zhangsan"); //开始发送
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4&&xhr.status==200){
			var result = xhr.responseText;//.trim()是不支持
			    
			if(result.indexOf("ok")>-1){
				document.getElementById("hint").innerHTML="用户名已存在，请重新输入";
			}else{
				document.getElementById("hint").innerHTML="用户名不存在，可以使用";
			}
			
			
			 //alert(xhr.responseText);
		}
	}
}

/**不讲
 * 设置请求头信息
 * 得到响应头信息
 */
//window.onload = function(){
//	var xhr = createXHR();
//	//document.write(xhr);
//	xhr.open("GET","demo.html?rand="+Math.random(),false);//false 代表同步    只是发送请求的准备
//	xhr.setRequestHeader("name","zhangsan");//设置响应头信息
//	xhr.send(null); //开始发送
//	if(xhr.readyState==4&&xhr.status==200){
//	    document.write(xhr.getAllResponseHeaders()+"<br/>"); //得到所有的响应头信息
//	    document.write(xhr.getResponseHeader("Content-Type"));//得到单个响应头信息
//	}else{
//	document.write("数据获取失败：状态码是"+xhr.status+"--状态信息是："+xhr.statusText);
//	}
//}

//Get请求
//中文，Ajax默认的返回的编码格式是utf-8，所以，设置所有文件的格式的utf-8无bom格式。在服务端也可以设置一下
//如果中间出现特殊字符的话，就会出现问题
//window.onload = function(){
//	var xhr = createXHR();
//	//document.write(xhr);
//	xhr.open("GET","demo.html?rand="+Math.random()+"&name=zhang&san",false);//false 代表同步    只是发送请求的准备
//	xhr.send(null); //开始发送
//	if(xhr.readyState==4&&xhr.status==200){
//		document.write(xhr.responseText+"<br/>"); //打印出服务端返回的数据
//	}else{
//	document.write("数据获取失败：状态码是"+xhr.status+"--状态信息是："+xhr.statusText);
//	}
//}
//解决
//window.onload = function(){
//	var xhr = createXHR();
//	//document.write(xhr);
//	var url = "demo.html?rand="+Math.random();
//	url = addParam(url,"name","zhang&san");
//	//document.write("url="+url+"<br/>");
//	xhr.open("GET",url,false);//false 代表同步    只是发送请求的准备
//	xhr.send(null); //开始发送
//	if(xhr.readyState==4&&xhr.status==200){
//		document.write(xhr.responseText+"<br/>"); //打印出服务端返回的数据
//	}else{
//	document.write("数据获取失败：状态码是"+xhr.status+"--状态信息是："+xhr.statusText);
//	}
//}
//function addParam(url,name,value){
//	url += url.indexOf("?")==-1?"?":"&";
//	url += encodeURIComponent(name)+"="+encodeURIComponent(value);
//	return url;
//}



//解析JSON
window.onload=function(){
	var xhr = createXHR();
	//document.write(xhr);
	var url = "student.json";
	xhr.open("GET",url,false);//false 代表同步    只是发送请求的准备 为false才能正确加载
	xhr.send(null); //开始发送
	if(xhr.readyState==4&&xhr.status==200){
		document.write(xhr.responseText+"<br/>"); //打印出服务端返回的数据
		var box = JSON.parse(xhr.responseText);
		document.write(box);
		
	}else{
	document.write("数据获取失败：状态码是"+xhr.status+"--状态信息是："+xhr.statusText);
	}
}

//Ajax封装
