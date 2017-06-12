/*
 数组：是数据类型的集合
*/

//创建数组
/*
var a1 = new Array();  //创建数组对象 空的数组对象
var a2 = new Array(10); //创建了包含10个空元素的数组对象
var a3 = new Array("zhangsan",20); //创建了包含2个具体元素的数组对象
*/

//看下数组对象
/*
document.write(a1+"111<br/>"); //打印是空
document.write((typeof a1)+"<br/>");//object  引用数据类型
document.write((a1.constructor==Array)+"<br/>");  //true 判断a1是否是数组对象  constructor 构造函数：创建对象实例的函数
*/

//document.write(a2+"<br/>"); //,,,,,,,,, 9个逗号，包含10个元素   元素1，元素2
//document.write(a3+"<br/>");//zhangsan,20

//获得数组中的元素值
//document.write(a3[0]+"<br/>");//zhangsan

//给数组中的元素赋值
//a3[0] ="lisi";
//document.write(a3+"<br/>"); //lisi,20

//使用字面量创建数组
/*
var a4 = ["wangwu",20]; //a4[0]="wangwu" a4[1]=20 
document.write((typeof a4)+"<br/>"); //object 引用类型
document.write((a4.constructor==Array)+"<br/>");//true 说明是数组对象
document.write(a4[1]+"<br/>");//20
document.write(a4[2]+"<br/>");//undefined
*/

//获得数组个数
/*
document.write(a1.length+"<br/>"); //0
document.write(a2.length+"<br/>"); //10
document.write(a4.length+"<br/>"); //2
*/

//给数组添加元素
/*
a4[a4.length] = "男"; //a4[2]="男";
document.write(a4+"<br/>");//wangwu,20,男
document.write(a4.length+"<br/>"); //3
*/


//练习：创建你们小组四个人的数组对象，然后得到数组的个数，并添加第五个人
/*
var group = new Array("zhang","wang","li","zhao");
document.write(group.length+"<br/>");
group[group.length]="qian";
document.write(group+"<br/>");
*/

/*
var group = new Array(4);
group[0]="zhao"; 
*/

/*
 数组元素的下标是从0开始的
 数组元素的个数是从1开始的
 所以数组元素的下标比数组元素的个数少1
*/
//var group = ["zhang","wang","li","zhao"];
//遍历数组
/*
for(var i=0;i<group.length;i++){
	document.write(group[i]+"<br/>");
}
*/
//加强for循环
//for(var 变量名 in 数组)
/*
for(var i in group){ //含义是在group中，循环每一个group的下标
 document.write(i+"<br/>");	
 document.write(group[i]+"<br/>");
 
}
*/

//练习：求出数组 10,20,50,120,90的数组元素和
/*
var num =[10,20,50,120,90];
var sum = 0;
for(var i=0;i<num.length;i++){
	sum+=num[i];
}
document.write(sum+"<br/>");

var sum1 = 0;
for(var j in num){
	sum1+=num[j];
}
document.write(sum1+"<br/>");
*/

//综合练习：把1-100以内，能够被3或7整除的数放入到数组中，并求出这些数的平均数
/*
  1>1-100以内，能够被3或7整除的数
  2>赋值给数组
  3>求出数组元素的和
  4>求出平均值
*/
/*
var arr =[];
var num =0; //定义数组的下标
var sum =0;

for(var i=1;i<=100;i++){
	if(i%3==0||i%7==0){
		arr[num++]= i; //0 1 
		//arr[arr.length] = i;
	}
}
//document.write(arr);
for(var j in arr){
	sum+=arr[j];
}
var avg = sum/arr.length;
document.write(avg);
*/

//数组的排序
/*
  冒泡算法：算法就需要包含一些编程思路
  排序的思路：从小到大排列
  15 25 36 8 49 0 9 
  把数组从下到上排列出来/
*/
/*
var arr = [15,25,36,8,49,0,9]; //length =7 
for(var i=0;i<arr.length-1;i++){  //代表比较次数
	for(var j=0;j<arr.length-1-i;j++){ //元素比较次数  arr.length-1-i注意
		if(arr[j]>arr[j+1]){
			var temp =0; //默认一个中间值
			temp = arr[j+1];
			arr[j+1]= arr[j];
			arr[j]= temp;
		}
	}
}
document.write(arr);
*/
			
//选择排序
//for(var i=0; i<a1.length-1; i++) {
//   for(var j=i+1;j<a1.length; j++) {
//		if(a1[i] > a1[j]) {
//			var temp = 0;
//			temp = a1[i];
//			a1[i] = a1[j];
//			a1[j] = temp;
//		}
//		//console.log(a1);
//		}
//		//console.log(a1);
//}
//document.write(a1+"<br>");
		
//快速排序


/*
数组的常用方法
*/
/*
var a = ["aa","ab"];
var b = ["bb","bc"];
var c = a.concat(b); //重新创建了一个新的数组
document.write(c+"<br/>");
*/

/*
var a = ["111","222"];
var b = a.join("---"); //转化为字符串
document.write(b+"<br/>");
document.write((typeof b)+"<br>"); //string

//在数组a末尾添加一个元素
var c = a.push("3333");
document.write(c+"<br/>");//返回新数组的长度
document.write(a+"<br/>");//111,222,3333

//在数组a头部添加一个元素
var d = a.unshift("000");
document.write(d+"<br/>");//4 返回新数组的长度
document.write(a+"<br/>"); //000,111,222,3333

//在数组a末尾删除元素，并返回
var f = a.pop();
document.write(f+"<br/>"); //删除的最后一个元素值 3333
document.write(a+"<br/>");//000,111,222

//删除头部的元素，并返回
var e = a.shift();
document.write(e+"<br/>");//000 
document.write(a+"<br/>");//111,222
*/

/*
//颠倒数组元素
var arr = ["111","222","333","444"];
var i = arr.reverse();
document.write(i+"<br/>"); //444,333,222,111

//截取数组的元素
var j = arr.slice(1,3);//参数是元素的下标
document.write(j+"<br/>");
document.write(arr+"<br/>"); //没有影响
*/

//按照下标删除数组元素,并添加元素
/*
var arr =  ["111","222","333","444"];
document.write(arr+"<br/>");
arr.splice(1,2,"aaa");
document.write(arr+"<br/>");
*/ 

//对数组元素进行排序
//var a1 =[3,45,7,8,2,1];
//document.write(a1.sort()+"<br/>");     //排序出现了问题
//document.write(a1.reverse()+"<br/>");

//定义排序规则
//function compare(value1,value2){
//	if(value1<value2){
//		return -1;
//	}else if(value1>value2){
//		return 1;
//	}else{
//		return 0;
//	}
//}
//
//document.write(a1.sort(compare)+"<br/>");  //正常排序
//document.write(a1.reverse()+"<br/>")

//添加一个复杂的数组
//var a1 =[
// {
// 	name:"李四",
// 	age:20
// },
// ["wangwu",50],
// "aaa",
// 20+10,
// new Array(1,2,3)
//];
//document.write(a1[0].name);
//document.write(a1[1][0]);








/**
 * ES5数组添加方法 
 */
var arr = [1,2,3,4];
 //indexOf直接返回元素索引位置
// alert(arr.indexOf(3));
 
//forEach遍历数据
//参数1遍历元素  index下标  arr数组本身
// arr.forEach(function(value,index,array){
// 	 alert(value);
//   alert(index);
//   alert(array);
// });

//简单写法
// arr.forEach(alert);
// 后面参数的含义是指定上下文
//arr.forEach(console.log,console);

//map遍历数组
//arr.map(function(value,index,array){
//	 if(value>2){
//	 	alert(value);
//	 }
//});

//reduce 归纳
//第一个参数是之前的值，第二参数的当前值
//var sum = arr.reduce(function(previous,current,index,array){
//	return previous+current;
//});
//alert(sum);//10 累加之和


//filter过滤  设置返回值，然后判断是不是true，true的才会被返回
//var newarr = arr.filter(function(value,index,array){
//	return value>2;
//});
//alert(newarr);

//some 判断是否有某个返回符合要求，就返回为true
//var res = arr.some(function(value){
//	return value>3;
//})
//alert(res);

//every 全部满足条件才会返回true
//var res = arr.every(function(value){
//	return value>0;
//})
//alert(res);