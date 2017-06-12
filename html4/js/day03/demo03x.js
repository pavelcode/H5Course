//打印10遍javascript
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");
//document.write("javascript<br/>");


//打印100000000000000000000遍JavaScript
/*
 for语句
  for(初始化条件;判断条件是否满足;条件变化)
  {
	  重复执行代码;
  }
*/
//打印10遍javascript
/*
for(var i=1;i<=10;i++){
	document.write(i+"--javascript<br/>");
}
*/

//每天早上起来跑步，每天跑5圈
/*
for(var i=1;i<=5;i++){
	alert("我跑了"+i+"圈");
}
*/
//打印1-10的值
/*
for(var i=1;i<11;i++){
	document.write(i+"<br/>");
}
*/
//打印10-1的值
/*
for(var i =10;i>0;i--){
	document.write(i+"<br/>");
}
*/
//打印1-10的和
/*
   0+1 = 1
    1 +2=3
	 3+3=6
	  6+4=10
	    10+5 = 15
		  ....
		  
	被加数是前面加数之和，加数就是第几个加数(i)	  
*/
/*
var sum = 0; //所有数之和
for(var i=1;i<11;i++){
	//sum = sum +i;
	sum+=i;
}
document.write(sum);
*/

/*
while语句的格式：
  while(判断满足条件){

     执行重复代码;
     控制条件语句;
  }

*/
/*
var i =1;
while(i<=10){
	document.write(i+"--javascript<br/>");
	i++;
}*/

/*
do..while语句格式：
do{
   重复执行的语句；
   控制条件语句;
}while(判断满足条件)；
*/
/*
var i = 1;
do{
	document.write(i+"javascript<br/>");
	i++;
}while(i<11);
*/

/*
var i = 10;
do{
	document.write("javascript");
}while(i>100);  //false 
*/


/*总结：for语句一般用在能够确定执行的次数。
      while语句不知道执行多少次，但是知道循环结束的结果。  楼下跳上来
	  do...while 不管条件是否成立，都会执行一次，其他两个一次都不会执行
*/	  


//在我们写循环的时候，经常会发生操作--每条写改变条件
/*
var x = 1;
while(x<11){
	document.write("javascript<br/>");
}
*/
//当我们的循环写法不当，会出现死循环
//两种常见的死循环  while(true){}   for(;;){} 

//打印5行5列的*号
/*
for(var i=1;i<=5;i++){
	document.write("*");
}
document.write("<br/>");
for(var i=1;i<=5;i++){
	document.write("*");
}
	document.write("<br/>");
for(var i=1;i<=5;i++){
	document.write("*");
}
document.write("<br/>");
for(var i=1;i<=5;i++){
	document.write("*");
}
document.write("<br/>");	
for(var i=1;i<=5;i++){
	document.write("*");
}
document.write("<br/>");
*/

/*
for(var j=1;j<=5;j++){
  for(var i=1;i<=5;i++){
	document.write("*");
   }
   document.write("<br/>");
	
}
*/
//九九乘法表
/*
  1*1 = 1
  1*2 = 2 2*2 = 4
  1*3 = 3 2*3 = 6 3*3=9
  .......

*/
/*
for(var i=1;i<10;i++){
	for(var j=1;j<=i;j++){
	 document.write(i+"x"+j+"="+(i*j)+"&nbsp;" );
	}
	document.write("<br/>");
	
}
*/

//break和continue
//使用while语句打印1-10的值
var iNum = 0;
for(var i=0;i<10;i++){
	if(i==5){
		break;
	}
	document.write(i+"<br/>");
	iNum++;
}
//break会跳出当前循环


var iNum = 0;
for(var i=0;i<10;i++){
	if(i==5){
		continue;
	}
	document.write(i+"<br/>");
	iNum++;
}
//1 2 3 4 6 7 8 9
//contiue跳出本次循环