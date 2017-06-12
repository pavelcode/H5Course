/*
1.已知有两个字符串str1 = ‘hello’ str2 = ‘world’,将两个拼接
2.已知字符串str = “I love BeiJing”,找出love的范围(开始位置和结束位置)
3.已知字符串 str = “I  hate BeiJing!”,提取第3个字符到第5个字符
4.将字符串str = “When I was young, I love a girl in neighbor class.”中,从young提取到girl生成新字符串。但是不许数
5.统计一个字符串（sdfIUIHwewUIwws）里面包含的大小写字母，并把大小写字母分别保存在不同的数组中
*/
		
//var str1 = "hello";
//var str2 = "world";
//var newStr =  str1.concat(str2);
////var newStr = str1 + str2;
//document.write(newStr+"<br/>");

//var str = "I love BeiJing";
//var start = str.indexOf("love");
//var end = start + "love".length;
//document.write("开始下标:" + start + " 结束下标:" + end+"<br/>");


//var str ="I  hate BeiJing!";
//var count =0;
//var arr = [];
//for(var i =0;i<str.length;i++){
//	//String.charCodeAt("a"); //97
//	 var d = String.charCodeAt(str[i]);//获得每个字母的ASCII码
//	 if((d>=65&&d<=90)||(d>=97&&d<=122)){
//		 //说明是字母
//		 count++;
//		 if(count>=3&&count<=5){
//			 document.write(String.fromCharCode(d)+"<br/>");
//			 arr.push(String.fromCharCode(d));
//		 }
//	 }
//}
//document.write(arr+"<br/>");
//document.write(arr.join("|"));


//var str = "When I was young, I love a girl in neighbor class.";
//var start = str.indexOf("young");
//var end = str.indexOf("girl") + "girl".length;
//var newStr = str.substring(start, end);
//document.write(newStr+"<br/>");


