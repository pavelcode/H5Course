//打印cookie，查看原本是否保存cookie信息
//alert(document.cookie);
			
//保存并显示cookie
//document.cookie='name=zhangsan';
//document.write(document.cookie);

//中文cookie 转码
//document.cookie = "country="+encodeURIComponent("中国");
//document.write(decodeURIComponent(document.cookie)+"<br/>");

//设置过期时间  到了过期时间，Cookie会自动清理  会话结束是，是指游览器关闭时，Cookie就会自动清理 
//但不会影响其他游览器的Cookie
//var date = new Date();
//document.write(date+"<br/>");
//date.setDate(date.getDate()+2);
//document.write(date+"<br/>");
//document.cookie = "city="+encodeURIComponent("北京")+";expires="+date;
//document.write(decodeURIComponent(document.cookie));


//设置Cookie过时，删除Cookie
//document.cookie = "city="+encodeURIComponent("北京")+";expires="+(new Date(0));



/**
 * 把Cookie封装成方法
 */
//设置cookie
function setCookie(name, value, expires, path, domain, secure) {
	var cookieContent = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	if (expires instanceof Date) {
		cookieContent += '; expires=' + expires;
	}
	if (path) {
		cookieContent += '; path=' + path;
	}
	if (domain) {
		cookieContent += '; domain=' + domain;
	}
	if (secure) {
		cookieContent += '; secure';
	}
	document.cookie = cookieContent;
}

//过期时间
function setCookieDate(day) {			//传递一个天数，比如传递7，就7天后失效
	var date = null;
	if (typeof day == 'number' && day > 0) {
		date = new Date();
		date.setDate(date.getDate() + day);
	} else {
		throw new Error('您传递的天数不合法！必须是数字且大于0');
	}
	return date;
}

/***
 * 测试 
 */
//setCookie("name","zhangsan",setCookieDate(2));
//setCookie("url","baidu.com",setCookieDate(2));
//setCookie("sex","男",setCookieDate(2));

//获取Cookie
function getCookie(name) {
	//document.write(document.cookie); //只能获得全部cookie
	var cookieValue = null;
	
	var cookieName = encodeURIComponent(name) + '=';
	//得到Cookie字符串中，找到name对应的Cookie开始位置
	var cookieStart = document.cookie.indexOf(cookieName);
	
	//如果找到name对应Cookie的开始位置
	if (cookieStart > -1) {
		//如果找到name对应Cookie的结束位置
		var cookieEnd = document.cookie.indexOf(';', cookieStart);
		//没有找到分号，说明后面的都是Cookie长度
		if (cookieEnd == -1) {
			cookieEnd = document.cookie.length;
		}
        //cookieStart + cookieName.length,就是去掉Cookie的键=，得到的就是cookie的值内容
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	}
	return cookieValue;
}

/**
 * 测试
 */
//document.write(getCookie("url"));

/**
 * 使用H5的保存：sessionStroage和localStorage 
 * 
 */
//通过方法存取 firebug下sessionStroage
sessionStorage.setItem("age",20);
document.write(sessionStorage.getItem("age"));

//通过属性存取
sessionStorage.name="王五";
document.write(sessionStorage.name);

//删除属性
sessionStorage.sex="男";
sessionStorage.removeItem("name");
//document.write(sessionStorage.sex);




