/**
 *  循环的嵌套 
 */
//100以内能被7整除的值
//for(var i=1; i<=100; i++){
//	if(i%7==0) {
//		document.write(i + "\t");
//	}
//}

//求100-200以内，能被3或7整除的三位数
//for(var k=100; k<=200; k++){
//		if(k%3==0 || k%7==0){
//			 document.write(k+"<br/>");
//		}
//}

//求100以内所有奇数   
//for(var k=100; k>0; k--){
//	if(k%2 != 0) {
//	 document.write(k+"<br/>");
// }
//}

//求100以内所有偶数和
//var sum = 0;
//for(var m=0; m<=100; m++) {
//	if(m%2==0){
//		sum = sum + m;
//	}
//}
//document.write(sum);

//求出100-200所有素数  素数：定义为在大于1的自然数中，除了1和它本身以外不再有其他因数的数称为质数。
//for(var i=100; i<=200; i++) {
//	var res = true; //res表示i是否为素数,初始值为true，我们先假定数字i是素数
//		for(var j=2; j<i; j++) {
//			if(i%j==0) {
//				res = false;
//				break;
//			} 
//		}
//		//循环结束时，如果res的值，仍然为true，表示它确实是一个素数
//		//循环结束时，如果res的值为false，则表示它不是素数
//		if(res){//根据res的结果，来决定是否打印i
//					document.write(i+"<br/>");
//		}	
//}

//求1到20的阶乘和  1+2!+3!+...+20!的值 
//var sum = 0;
//for(var i=1; i<=20; i++) {
//	var num = 1;
//	for(var j=1; j<=i; j++) {
//		num *= j;
//	}
//	sum += num;
//	document.write(sum+"<br/>"); //看出累加过程
//}
//document.write(sum);
	
//求出三位数的水仙花数			
//for(var i=100; i<=999; i++) {
//	var a = i%10;  
//	var b = parseInt(i/10)%10;
//	var c = parseInt(i/100);
//	if(i == (a*a*a + b*b*b + c*c*c) ) {
//		document.write(i+"<br/>")
//	}
//}
					
/**
	打印9*9乘法表
	1X1=1 
	1X2=2 2X2=4
	1X3=3 2X3=6 3X3=9
	......
	1X9=9
*/
//for(var i=1; i<=9; i++) {
//	for(var j=1; j<=i; j++) {
//			document.write(j+"X"+i+"="+i*j+" ");
//		}
//	document.write("<br>");
//}

//显示三行三列的#号
//var x=0;
//while(x<3){
//	var y = 0; //每次外层循环执行的时候，y都会重新赋值为0
//	while(y<3){
//		document.write("# ");
//		y++;
//	}
//	document.write("<br/>");
//		x++;
//}

/**
打印直角星型 
* 
**
***
****
***** 
 */

//for(var i=1; i<=5; i++){
//	for(var j=1; j<=i; j++){ 
//		document.write("*");
//		}
//	document.write("<br>");
//}

/**
打印正三角形 （不讲）
   * 
  **
  ***
 ****
 ***** 
 */

//for(var i=1; i<=5; i++){
//	//在第一行的时候，打印几个空格？ 打印几个*？
//	for(var k=1; k<=5-i; k++){
//		//打印空格
//		document.write("&nbsp;");
//	 }
//		for(var j=1; j<=i; j++){
//			//打印*
//			document.write("*");
//		  }
//	document.write("<br>");
//}
/**
  *
 ***
*****
 ***
  *
 打印菱形
*/ 


//打印出1000-2000年中所有的闰年，并以每行四个数的形式输出
//var n = 1000;
//var count = 0;
//while(n<=2000) {
//	if( (n%100!=0 && n%4==0) || (n%100==0 && n%400==0) ){
//		document.write(n + " ");
//		++count;
//		if(count%4==0){
//		document.write("<br>");
//		}
//	}
//	n++;
//}		

//入职薪水10K，每年涨幅5%，50年后工资多少？
/*
var init_salary = 10000;
var i=0;
while(i<50){
	init_salary *= 1.05;
	i++;
}
alert(init_salary);
*/


//100以内能被7整除的值
//求100-200以内，能被3或7整除的三位数
//求100以内所有奇数 
//求100以内所有偶数和
//判断某年是闰年还是平年  判断条件：非整百年能够被4整除是闰年，否则是平年。整百年能够被400整除，是闰年，否则是平年。
//求出100-200所有素数  素数：定义为在大于1的自然数中，除了1和它本身以外不再有其他因数的数称为质数。
//显示三行三列的#号
//入职薪水10K，每年涨幅5%，50年后工资多少？