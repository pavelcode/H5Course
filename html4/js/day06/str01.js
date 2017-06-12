//字面量定义的字符串常量
//var str = "abcd";

//使用new关键字定义的字符串对象
//var strObj = new String("abc");

//常量字符串和new创建的字符串数据类型的区别
//document.write((typeof str)+"<br/>") //string
//document.write((typeof strObj)+"<br/>");//object


//常量字符串和new创建的字符串值的区别
//var s1 = "abc";
//var s2 = "abc";
//var s3 = new String("abc");
//var s4 = new String("abc");
//document.write((s1==s2)+"<br/>");//true
//document.write((s1==s3)+"<br/>");//true
//document.write((s3==s4)+"<br/>");//false
//document.write((s1==s4)+"<br/>"); //true
//错误，这个讲法有问题
//总结：常量池，为了避免频繁创建和销毁对象，实现数据的共享。
//当我们第一次使用一个字符串并赋值的时候，保存在栈中。
//当我们再次创建相同内容的字符串的时候，这个就会被放入到常量池中。
//再次，创建的时候，如果只是声明字符串，是引用的常量池的内容，除非使用new重新开辟空间。


//除去我们上面讲的字符串常量和字符串对象区别之外，其他没有区别
//属性一样
/*
document.write(strObj.length+"<br/>");
document.write(str.length+"<br/>");
*/

//方法一样
/*
document.write(strObj.charAt(1)+"<br/>");
document.write(str.charAt(1)+"<br/>");
*/

//基本数据类型String ---》String对象 内容没变，类型变化
/*
document.write(str.concat("111")+"<br/>");
document.write(str.substring(1)+"<br/>");
document.write(str.toUpperCase()+"<br/>");
document.write(str.indexOf("b")+"<br/>");
document.write(str.replace("b","1")+"<br/>"); //替换 只替换第一个位置的字符
*/

/*
var content ="google,apple,firefox,ie";
var result = content.split(","); //分隔之后，返回的是数组对象
document.write((typeof result)+"<br/>");//object  var arr =["google","apple","firefox","ie"];
document.write((result.constructor==Array)+"<br/>");
for(var i in result){
	document.write(result[i]+"<br/>");
}
document.write(content.split(",",2));  //参数是获得数组前n个元素
*/

/*
document.write(String.charCodeAt("b")+"<br/>"); //获得指定字符的ascII码
document.write(String.fromCharCode(99)+"<br>"); //获得ascII码对应的字符
*/


//统计一个字符串（sdfIUIHwewUIwws）里面包含的大小写字母的个数
/*
1得到字符串中的每一个字符
2 判断字符是大写还是小写
3 大写累加，小写累加
*/

 /*
var str ="sdfIUIHwewUIwws";
var upperCase =0;
var lowerCase =0;
for(var i=0;i<str.length;i++){
	//document.write(str.charAt(i)+"<br/>");
	var s = str.charAt(i);
	if(String.charCodeAt(s)>=65&&String.charCodeAt(s)<=90){
		//大写字母
		upperCase++;
	}else if(String.charCodeAt(s)>=97&&String.charCodeAt(s)<=122){
		//小写字母
		lowerCase++;
	}
}
document.write("大写字母的个数是："+upperCase+";小写字母的个数是:"+lowerCase);
*/

//统计一个字符串(a,w,w,r,a,h,i)每个字母出现次数
/*
 1.获得所有字符 a,b,c,d....
 2.每个字符与字符串中的字符进行比较
 3.如果相等，累加1
*/
/*
var str = "a,w,w,r,a,h,i";
for(var i=97;i<=122;i++){
	//获得26个小写字母
	var ch = String.fromCharCode(i); //a
	var count = 0; //记录字符出现的次数
	var strArr = str.split(",");
	for(var j in strArr){
		if(ch==strArr[j]){ //如果字符和我们数组中的字符相等
			count++;
		}
	}
	if(count>0){
	document.write(ch+"出现的次数是："+count+"<br/>");
	}
}
*/

//用户输入字符串，我们的这个字符串，我们首先需要判断是否包含敏感词
/*
var str ="you are usb3.0 呵呵";
if(str.indexOf("sb")!=-1){
	alert("出现了敏感词");
}
*/

/*
var arr = ["md","nnd","sb"];//美的 牛牛的 沙包
var str ="asdfasfddds nnNnd sdfsb";
function filterKeyWord(str,arr){
	var lowerStr = str.toLowerCase();
		for(var i in arr){
			if(lowerStr.indexOf(arr[i])>=0){
				alert("出现敏感词");
				break;
			}
		}
}
filterKeyWord(str,arr);
*/

/*
var str = "safasfdsmdsdfsf";
var word = "md";
var content = str.replace("md","*");
document.write(content);
*/

//字符串的遍历
//var str ="abc";
/*
for(var i in str){
	document.write(str.charAt(i)+"<br/>");
}
*/
//也可以按照数组的方式来写
/*
for(var i=0;i<str.length;i++){
	document.write(str[i]+"<br/>");
}
*/

/*
 * ES5新加的方法
 */
//取消前后的空格
var str = "|  abc  |";
alert(str);
alert(str.trim());  //Chrom不支持
