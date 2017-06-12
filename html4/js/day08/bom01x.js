/*
 window对象
 */
//window调用方法
//alert("aaa");
//window.alert("bbb");

//总结：window的属性和方法，既可以用window.属性，window.方法()  也可以直接使用 属性  方法()

			
/**
 * 系统对话框
 */
//警告对话框
//alert("111");

//选择对话框
//window.confirm("你长大了吗?")//如果点击确定，返回true，如果点击取消，返回false

//if(confirm("你长大了吗?")){  
//	alert("yes");
//}else{
//	alert("还小");
//}

//输入对话框
//var num = window.prompt("请输入一个数字",0);
//if(num!=null){
//alert(num);
//}

/*
练习：弹出一个输入框，请求输入一个数字，当你点击确认的时候，判断数字的大小.当我们单击取消，就停止输入循环。
      当这个数字大于100的时候，我们计算这个数字的偶数，还是奇数. alert
	  当这个数字小于100的时候，求出它与100的差距
	  判断完成之后，继续接收输入。
*/
//while(true){
//	var num = prompt("请输入一个数字");
//	if(num!=null&&num!=""){  //当我们什么都不输入，点确定 num="",点取消 num=null
//		if(num>=100){
//		  alert(num%2==0?"偶数":"奇数");
//		}else{
//			alert((100-num)+"");
//		}
//		//continue;
//		//alert("111");
//	}else{
//		//alert("222");
//		break;
//	}
//}

/*
 * 打开窗口window.open()
 *          第一个参数是打开的url地址
 *          第二个参数是给窗口起的名字或窗口打开的方式
 *              如果这个窗口名字存在，就在这个窗口打开url
 *              打开方式，_blank 窗口打开（默认）
 *                       _parent 本创库打开
 *           第三个参数设置窗口属性
 */

//open("http://www.baidu.com");  //每次刷新都在一个新窗口打开url

//open("http://www.baidu.com","baidu"); //首先打开百度，然后修改成163，在原来的百度窗口打开163
//open("http://www.163.com","baidu");  
//总结：设置窗口名称，如果以这个窗口名称打开，如果这个窗口存在，就在这个窗口打开，否则新打开窗口

//open("http://www.baidu.com","_blank");  //新窗口打开
//open("http://www.163.com","_parent");   //本窗口打开

//open("http://www.baidu.com","baidu","width=500,height=500,top=100,left=100");
//open("son.html","son","width=500,height=500");  //打开子窗口，点击子窗口任一点，子窗口写入内容到父窗口

/**
 * 窗口位置: 窗口相对于屏幕左边和上面的距离
 * 不同游览器支持的属性不同，这里就明确加上window，并且计算方法不同
 */
//document.write("IE支持"+window.screenLeft+"<br/>");  // 窗口相对于屏幕左边距离  火狐不支持 
//document.write(screenLeft+"<br/>");   //不写window，也支持
//document.write(window.screenTop+"<br/>");//窗口相对于屏幕顶部距离

//document.write("火狐支持："+window.screenX+"<br/>");  //IE不支持
//document.write("火狐支持："+window.screenY+"<br/>");

//var leftX= (typeof screenLeft=='number')?screenLeft:screenX;//跨游览器的做法
//var leftY= (typeof screenTop=='number')?screenTop:screenY;
//document.write(leftX+"<br/>");
//document.write(leftY+"<br/>");


/**
 * 窗口大小 非IE支持
 */
//document.write(window.innerWidth+"<br/>");  //页面大小  FireFox支持
//document.write(window.innerHeight+"<br/>");

//这个不通用，不要讲了
//document.write(document.documentElement.clientWidth+"<br/>");//FireFox支持
//document.write(document.documentElement.clientHeight+"<br/>");

//这个通用
//document.write(document.body.clientWidth+"<br/>");//注意 这里是document对象
//document.write(document.body.clientHeight+"<br/>");

//document.write(window.outerWidth+"<br/>");  //页面大小+边框 FireFox支持
//document.write(window.outerHeight+"<br/>");


//兼容（这个不要讲）
//var width = window.innerWidth;  //支持firefox
//var height = window.innerHeight;
//if(typeof width!= "number"){  //支持IE
//	//IE6的标准模式
//	if(document.compatMode=="CSS1Compat"){
//		width = document.documentElement.clientWidth;
//		height = document.documentElement.clientHeight;
//	}else{//非标准模式
//		width = document.body.clientWidth;
//		height = document.body.clientHeight;
//	}
//}

/*
 window的navigator对象
 */
//document.write(window.navigator.userAgent+"<br/>"); //用户代理字符串
//Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0  Gecko是游览器内核

//通过window的navigator对象得到操作系统名称和游览器版本			
//var str = window.navigator.userAgent;
//var startIndex = str.indexOf("(");
//var endIndex = str.indexOf(")");
//document.write(str.substring(startIndex, endIndex+1)+"<br/>"); //操作系统名称
//document.write(str.split(" ").pop()+"<br/>");//游览器版本

//游览器适配
//document.write(navigator.apppName+"<br/>"); //本来是应该返回游览器名称，但google,firefox都返回的nescape，这个内容不精确，不能以这个判断游览器的名称 
//document.write(navigator.appVersion+"<br/>");//游览器版本
//document.write(navigator.platform+"<br/>");//游览器所在系统

//使用browsedetect.js
//document.write(BrowserDetect.browser+"<br/>");
//document.write(BrowserDetect.version+"<br/>");
//document.write(BrowserDetect.OS+"<br/>");
//IE7以下版本游览器处理
//if(BrowserDetect.browser=="Internet Explorer"&&BrowserDetect.version<7){
//	   alert("IE低版本兼容");
//}

/**
 * location对象
 */
//location是window的属性也是document的属性
//url路径
//document.write(window.location+"<br/>");
//等同
//document.write(window.document.location+"<br/>");

/*
 url结构：协议：主机名  端口   路径   参数 (使用京东的搜索)
*/
//document.write(location.protocol+"<br/>");//协议
//document.write(location.hostname+"<br/>");//主机名
//document.write(location.port+"<br/>");//端口
//document.write(location.pathname+"<br/>");//路径
//document.write(location.search+"<br/>"); //得到url中的参数

//得到参数
//function getArgs(){
// var args = [];
// //得到参数的长度，如果有长度，去掉前面的？号 ?id=3&name=zhang
// var p =location.search.length>0?location.search.substring(1):"";
// //alert(p);
// //id=3  name=zhang
// var pitems = p.split("&");
// //alert(pitems.length);
// var item,name,value;
// for(var i=0;i<pitems.length;i++){
// 	   //id=3 name=zhang --> id 3  name zhang
// 	   item = pitems[i].split("=");
// 	   //alert(item);
// 	   name = item[0];
// 	   value = item[1];
// 	   args[name]=value;
// 	  // alert(args);
// }
// return args;
//}
//var a = getArgs();
//document.write(a["id"]+"<br/>");
//document.write(a["name"]+"<br/>")


//跳转到指定页面
//location.href="http://www.baidu.com";
//location.assign("http://www.baidu.com"); //跳转
//location.replace("http://www.baidu.com"); //没有历史记录的跳转

//重新加载
//location.onload(); //有可能从缓存直接加载
//location.onload(true);//申请从服务器加载


/**
 * history 
 * 手动添加一个参数，让页面跳转到一个新的地址
 */
//历史记录
//history.length; //修改参数值，增加了历史记录
//history.back();
//history.forward();
//history.go();
//function length(){
//	alert(history.length);
//}
//function back(){
//	history.back();
//}
//function forward(){
//	history.forward();
//}
//function go(num){
//	history.go(num);
//}