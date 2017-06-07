/*
超时调用和间歇调用
*/

//超时调用的格式 setTimeout(执行代码，超时时间); 以毫秒数计算
//setTimeout("alert('aaa');",3000);

//第二种写法
//function show(){
//	alert("bbb");
//}
//setTimeout(show,3000);


//第三写法
//setTimeout(function(){//函数没有名字：匿名函数
//	alert("ccc");
//},3000);  


//取消超时调用
//var id = setTimeout(function(){
//	alert("ddd");
//},3000);
//clearTimeout(id);


//取消间歇调用
//var id = setInterval(function(){
//	alert("111");
//},3000);
//clearInterval(id);



//每隔200毫秒，打印一个字符，当打印10个时候，取消间歇调用
//var count =0;
//var id = setInterval(function(){
//	console.log("a");
//	count++;
//	if(count==10){
//		clearInterval(id);
//	}
//},2000);


//设置间歇调用的测试，比如5次
//var start =0;
//var end =5;
//function show(){
//	start++;
//	console.log(start);
//	if(start==end){
//		alert("结束");
//		clearInterval(id);
//	}
//}
//var id = setInterval(show,200);


//使用超时调用模拟了间歇调用
//var start =0;
//var end =5;
//function show(){
//	start++;
//	console.log(start);
//	if(start==end){
//		alert("结束");
//	}else{
//		setTimeout(show,2000);
//	}
//}
//setTimeout(show,2000);