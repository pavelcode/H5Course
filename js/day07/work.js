//计算出1970年1月1日到今天，经过了几年，求出整年数，如果超过半年，按一年计算
// 计算两个日期之间相差的天数
// 使用超时调用不断的打印当前时间，时间格式是：时:分:秒

//计算出1970年1月1日到今天，经过了几年，求出整年数，如果超过半年，按一年计算
//var now = new Date();
//document.write(now.getTime()+"<br/>");//1477920422958
//var year = now.getTime()/1000/60/60/24/365; 
//document.write("经过了"+year+"<br/>");//经过了46.864549180555564
//document.write("经过了"+Math.round(year)+"年<br/>");//经过了47


//var now = new Date();
//var m =now.getMonth();
//var y=now.getFullYear();
////document.write(now.getFullYear()+"<br/>");
////document.write(now.getMonth()+"<br/>");
//function show(a,b){
//	if(a>6){
//		return "经过了"+((b-1970)+1)+"年";
//	}else{
//		return "经过了"+(b-1970)+"年";
//	}
//}
//document.write(show(m,y));


// 计算两个日期之间相差的天数
//var date1= new Date();
//var date2=new Date("2016/10/20");
//var a = date1.getTime()/1000/60/60/24; //现在到1970年经过的天数
//var b = date2.getTime()/1000/60/60/24;
//document.write(a+"<br/>");
//document.write(b+"<br/>");
//document.write("相差"+Math.floor(Math.abs(a-b))+"天");

//方法2
//var date = new Date("2016/10/20");
//var now = new Date();
//document.write((now-date)+"<br/>");//相差的毫秒数
//document.write((date.getTime()-now.getTime())+"<br/>");//相差的毫秒数
//document.write((now-date)/(1000*60*60*24)+"<br/>");



//使用超时调用不断的打印当前时间，时间格式是：时:分:秒
/*
function startTime()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	m=checkTime(m)
	s=checkTime(s)
	//document.getElementById('txt').innerHTML=h+":"+m+":"+s
	document.write(h+":"+m+":"+s+"<br/>")
	setTimeout("startTime()",1000)
}

function checkTime(i)
{
  if (i<10) {
  	i="0" + i
  }
  return i
}
startTime();
*/









// 使用超时调用不断的打印当前时间，时间格式是：时:分:秒
/*
function show(){
	var now = new Date()
	var hour=now.getHours();
	var minu=now.getMinutes();
	var sec=now.getSeconds();
	document.write(hour+"时"+minu+"分"+sec+"秒"+"<br/>");
	setTimeout(show,1000);
}
setTimeout(show,1000);
*/
