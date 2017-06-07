//document.write(Math.PI+"<br/>");

//两个给定的数中的较大的数和较小的数
/*
document.write(Math.max(10,20)+"<br/>");
document.write(Math.min(10,20)+"<br/>");

//四舍五入 (ceil,floor,round)
var num1 = 14.9;
var num2 = 14.5;
var num3 = 14.3;

document.write(Math.ceil(num1)+"<br/>"); //向上舍去
document.write(Math.ceil(num2)+"<br/>");
document.write(Math.ceil(num3)+"<br/>");

document.write(Math.floor(num1)+"<br/>"); //向下舍去
document.write(Math.floor(num2)+"<br/>");
document.write(Math.floor(num3)+"<br/>");

document.write(Math.round(num1)+"<br/>"); //四舍五入
document.write(Math.round(num2)+"<br/>");
document.write(Math.round(num3)+"<br/>");

//随机数
document.write(Math.random()+"<br/>");//0-1之间的任意数，不包含0,1
document.write(Math.random()*10+"<br/>");//0-10之间的任意数，不包含0,10
document.write(Math.floor(Math.random()*10+1)+"<br/>"); //1到10之间的任意整数，包含1和10  
document.write(Math.floor(Math.random()*10+5)+"<br/>"); //5到14之间的任意整数，包裹5和14 
document.write(Math.random()*5+"<br/>");//0-5之间的任意数，不包含0,5
document.write(Math.floor(Math.random()*5+3)+"<br/>");//3-7，包含3,7   --->3-8，不包含8
//公式：Math.floor(Math.random()*(结束值+1-初始值)+初始值); //初始值-结束值
*/

//init 初始值 end 结束的范围  5-14
//function getRandom(start,end){
//	var d = end+1-start;
//	return Math.floor(Math.random()*d+start);
//}
//document.write(getRandom(5,14)+"<br/>");

//产生四个随机的字母
//var arr =[];
//for(var i=0;i<4;i++){
//	var rd = getRandom(65,90);
//	var ch = String.fromCharCode(rd);
//	arr.push(ch);
//}
//document.write(arr+"<br/>");
//document.write(arr.join("")+"<br/>"); //把数组转化为字符串，提供的参数是分隔符



//Math的其他方法
//document.write(Math.sqrt(9)+"<br/>");
//document.write(Math.abs(-10)+"<br/>");