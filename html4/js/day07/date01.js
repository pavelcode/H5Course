//日期和时间使用的是Date对象，获取本机时间
//var date = new Date();
//document.write(date+"<br/>"); //Mon Oct 31 2016 17:40:39 GMT+0800 (CST)  (星期 月份 日期 年 时：分：秒 格林威治+8) //CST
//获取的是本机时间的方法2，不要这么写
//document.write(Date()+"<br/>");// Wed Sep 21 2016 11:23:59 GMT+0800

//获取指定的日期的Date对象
//var date = new Date("2016/09/20");
//document.write(date+"<br/>");  //Tue Sep 20 2016 00:00:00 GMT+0800 (CST)

//var date1 = new Date("2016-09-20");
//document.write(date1+"<br/>");//Tue Sep 20 2016 08:00:00 GMT+0800 (CST)  默认会加上8个小时
//
//var date2 = new Date("2016-9-20");
//document.write(date2+"<br/>");//Invalid Date

//错误的时间格式
//var date3 = new Date("");
//document.write(date3+"<br/>");//Invalid Date 无效时间
//var date4 =  new Date("sdff");
//document.write(date4+"<br/>");//Invalid Date
//总结：如果要设置一个指定时间，格式很重要


//获取一个UTC格式的时间
//获得当前时间的时间戳
//var date  = new Date();
//document.write(date.getTime()+"<br/>"); //1474429343709 时间戳

//获得指定时间的时间戳
//var date1 = new Date("2016-9-20");
//document.write(date1.getTime()+"<br/>");

//parse来获得时间戳
//document.write(Date.parse("2016/9/20")+"<br/>");//1474300800000
//document.write(Date.parse("2016-9-20")+"<br/>");//NaN这种格式IE都不支持，但是Chrom可以
//document.write(Date.parse()+"<br/>"); //NaN

//UTC来获得时间戳
//document.write(Date.UTC(2016,09,20)+"<br/>");//1476921600000 为什么跟上面不一样那，这里默认加了+8小时

//时间戳转化为时间
//var date = new Date(1474438771937);
//document.write(date+"<br/>");

//你一定会这么干
//var date1 = new Date("1474438771937");
//document.write(date1+"<br/>"); //Invalid Date


//比较两个时间 ：当前时间   2016/9/25
//var now = new Date();
//var otherTime = new Date("2016/9/25");
//if(now>otherTime){
//	document.write("今天已经过了2016-9-25");
//}else{
//	document.write("今天还没过2016-9-25");
//}


//指定一个日期和时间
//var date  = new Date(2016,9,22,11,54,25,700);//月份是从0开始
//document.write(date+"<br/>"); //Sat Oct 22 2016 11:54:25 GMT+0800 (中国标准时间)

//var date1  = new Date(2016,8,22,11,54,25,700);
//document.write(date1+"<br/>"); //Thu Sep 22 2016 11:54:25 GMT+0800 (中国标准时间)
//通过上面这种方式执行的时间，月份是从0-11


//日期的通用方法
//var date = new Date();
//document.write(date+"<br/>");  //Wed Sep 21 2016 14:17:01 GMT+0800 (中国标准时间)
//document.write(date.toString()+"<br/>");//Wed Sep 21 2016 14:17:35 GMT+0800 (中国标准时间)
//document.write(date.toLocaleString()+"<br/>");//2016/9/21 下午2:18:25
//document.write(date.valueOf()+"<br/>");//1474438771937
//document.write(date.getTime()+"<br/>");//1477914539239


//格式化方法
//var date = new Date();
//document.write(date+"<br/>"); //Wed Sep 21 2016 14:27:18 GMT+0800 (中国标准时间)
//document.write(date.toDateString()+"<br/>");//Wed Sep 21 2016
//document.write(date.toLocaleDateString()+"<br/>");//2016年10月31日
//document.write(date.toTimeString()+"<br/>");//19:54:09 GMT+0800 (中国标准时间)
//document.write(date.toLocaleTimeString()+"<br/>");//GMT+8下午7:55:20 
//document.write(date.toUTCString()+"<br/>");//Wed, 21 Sep 2016 06:30:37 GMT


//组件方法
//var date = new Date();
//document.write(date+"<br/>");

//getFullYear ===》getYear
//document.write(date.getFullYear()+"<br/>");
//date.setFullYear(2015);
//document.write(date+"<br/>");

//document.write(date.getMonth()+"<br/>"); //8 说明月份是从0-11
//date.setMonth(10);  
//document.write(date+"<br/>");

//document.write(date.getDate()+"<br/>");
//date.setDate(50);
//document.write(date+"<br/>");  2
//总结：如果超过月份的天数，就会累加天数


//document.write(date.getHours()+"<br/>");  //2
//date.setHours(23);
//document.write(date+"<br/>");  //按照24小时制
//总结：当我们设置的小时数超过24小时，进行累加，否则就是设置值


//document.write(date.getMinutes()+"<br/>");
//date.setMinutes(80);
//document.write(date+"<br/>");


//document.write(date.getSeconds()+"<br/>");
//date.setSeconds(10);
//document.write(date+"<br/>");


//getMilliseconds() setMilliseconds();
//document.write(date.getMilliseconds()+"<br/>");
//date.setMilliseconds(2000);
//document.write(date+"<br/>");


//document.write(date.getDay()); //返回的星期
//getDay() 是从星期日开始算--星期六  0-6 

/*
var date = new Date();
var arr = new Array(7);
arr[0] ="星期日";
arr[1] ="星期一";
arr[2] ="星期二";
arr[3] ="星期三";
arr[4] ="星期四";
arr[5] ="星期五";
arr[6] ="星期六";
document.write("今天是："+arr[date.getDay()]);
*/

//本地时间与格林威治的时差(不讲)
//var date = new Date();
//document.write(date.getTimezoneOffset()/60); //-8

//加不加UTC的区别：
//var date = new Date();
//document.write(date.getHours()+"<br/>");  //本地时间
//document.write(date.getUTCHours()+"<br/>"); //格林威治时间


//按照我们的需要格式来显示时间 xxxx年xx月xx日 小时：分钟：秒
//var date = new Date();
//var year = date.getFullYear();
//var month = date.getMonth()+1;
//var day = date.getDate();
//var hour = date.getHours();
//var minu = date.getMinutes();
//var sec = date.getSeconds();
//document.write(year+"年"+month+"月"+day+"日 "+addZero(hour)+":"+addZero(minu)+":"+addZero(sec));

//function addZero(num){
//	return num<10?"0"+num:num;
//}

//练习题：显示任意的日期格式
//参数 Date对象
//function showTime(date){
//	var year = date.getFullYear();
//	var month = date.getMonth()+1;
//	var day = date.getDate();
//	var hour = date.getHours();
//	var minu = date.getMinutes();
//	var sec = date.getSeconds();
//	return year+"年"+month+"月"+day+"日 "+addZero(hour)+":"+addZero(minu)+":"+addZero(sec);
//}
//
//var now = new Date();
//document.write(showTime(now)+"<br/>");
//document.write(showTime(new Date())+"<br/>");

//var beforeday = new Date(2014,10,10,14,10,20);
//document.write(showTime(beforeday)+"<br/>");

//document.write(showTime(new Date(2014,10,10,14,10,20))+"<br/>");


//获取n天后的日期
//var now = new Date();
//now.setDate(now.getDate()+7);
//document.write(now);

//function getAfterDay(n){
//	var now = new Date();
//	return now.setDate(now.getDate()+n);
//}

//思路:可以到今天的时间戳+7天的时间戳--转化日期
//var now = new Date();
//var t1 = now.getTime();
//var t2 = 7*24*60*60*1000;
//var t3 = t1+t2;
//var date = new Date(t3);
//document.write(date+"<br/>");

//function getAfterDay(n){
//	var now = new Date();
//	var date = new Date(now.getTime()+n*24*60*60*1000);
//	return date;
//}