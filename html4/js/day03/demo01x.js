//顺序语句
/*
document.write("开始<br/>");
document.write("学习JavaScript是件快乐的事<br/>");
document.write("结束<br/>");
*/

//选择语句：分支结构 
/*
if语句：   
 格式1：if（关系表达式）{执行代码；}   如果关系表达式成立，执行语句体，否则不执行语句体
*/
/*
var x = 10;
if(x==10){
	document.write("x="+10);
}
if(x==20){
	document.write("x="+20);
}
*/

//表达式右侧不能加分号，否则会出现错误。
/*
var x = 10;
if(x>5;){
	document.write("执行");
}
*/

//注意事项： 无论表达式多复杂，结构都要返回boolean类型  
/*
var x = 10;
if(x>5||x==10){
	document.write("执行");
} 
*/
//if语句的语句体是一条语句，大括号可以省略，如果是多条，不能省略，建议是永远不要省略。  写两句，不写括号，打印
/*
var x = 5;
if(x>5||x==10)
document.write("111");
document.write("222");
*/

/*
 格式2： if（关系表达式）{语句;} else{语句;}
*/
//判断是否相等，相等打印一个，不相等打印一个
/*
var a =10,b=20;
if(a==b){
	document.write("a与b相等");
}else{
	document.write("a与b不相等");
}
*/
//获取两个数据中较大的值  首先用户输入两个值，用if判断，打印最大值
/*
var a=100,b=200;
if(a>b){
  document.write(a);
}else{
  document.write(b);
}
*/

//判断一个数据是偶数还是奇数,被2除取余等于0,是偶数
/*
var a = 33;
if(a%2==0){
  document.write("a是偶数");
}else{
  document.write("a是奇数");
}
*/

//这种格式与三元运算符相似，三元运算符可以使用if第二种格式进行改进。
//有时候可以互换，需要有返回值的不能互换，返回值还没讲到，后面说。
/*
var a = 33;
a%2==0?document.write("aaa"):document.write("bbb");
*/


/*
  格式3：if（关系表达式1）{语句体1} else if（关系表达式2）{语句体2} 。。。else{}
 */
//根据月份来判断季节  春天 345 夏天 678 秋天 9 10 11 冬天 12 1 2 

//写法1 使用所有判断
/*
var month;
if(month==3){
  document.write("春天");
}else if(month==4){
	document.write("春天");
}
。。。。。。
*/
//写法2
/*
var month = 3; 
if(month==3||month==4||month==5){
	 document.write("春天");
}else if(month==6||month==7||month==8){
	 document.write("夏天");
}else if(month==9||month==10||month==11){
	 document.write("秋天");
}else if(month==12||month==1||month==2){
	 document.write("冬天");
}else{
	document.write("你输入的月份有误");
}
*/
//写法3
/*
var month = 3;
if(month>=1&&month<=12){
	if(month==3||month==4||month==5){
		 document.write("春天");
	}else if(month==6||month==7||month==8){
		 document.write("夏天");
	}else if(month==9||month==10||month==11){
		 document.write("秋天");
	}else if(month==12||month==1||month==2){
		 document.write("冬天");
	}
}else{
	document.write("你输入的月份有误");
}
*/
//写法3
/*
var month;
if(month>=1&&month<=12){
	if(month>2&&month<6){
		document.write("春天");
	}else if(month>5&&month<9){
		 document.write("夏天");
	}else if(month>8&&month<12){
		 document.write("秋天");
	}else{
		 document.write("冬天");
	}
}else{
	document.write("你输入的月份有误");
}
*/
//求出该年是闰年还是平年  非整百年能够被4整除是闰年，否则是平年。整百年能够被400整除，是闰年，否则是平年。
 /*情况1 整百年   
          1被400整除 闰年
	      2否则 平年
	
   情况2 非整百年
          1被4整除， 闰年
          2 否则 平年		  
	   */
	   
//写法1 
/*	   
var year =2016 ;
if(year%100==0){
	//情况1
	 if(year%400==0){
		 document.write("闰年");
	 }else{
		document.write("平年");
	 }
	
}else{
	//情况2 
	 if(year%4==0){
		  document.write("闰年");
	 }else{
		 document.write("平年");
	 }
	
}
*/

//写法2
/*
var year ;
if((year%100==0&&year%400==0)||(year%100!=0&&year%4==0)){
	 document.write("闰年");
}else{
	document.write("平年");
}
*/

//输入成绩，判断结果

//function _top(){
//	var score = score_input.value;
//	//根据成绩的大小，来显示你最终结果。 >90优秀 80-90 良好 70-80 中等 60-70 一般 50-60 需要努力 40-50 加倍努力
//	if(score >= 90) { 
//	   document.write("成绩为：优秀");
//	} else if(score >= 80) {
//	   document.write("成绩为：良好");
//	} else if(score >= 70) {
//	   document.write("成绩为：中等");
//	} else if(score >= 60) {
//     document.write("成绩为：一般");
//	} else if(score >= 50) {
//     document.write("成绩为：需要努力");
//	} else if(score >= 40) {
//	   document.write("成绩为：加倍努力");
//	} else {
//	  document.write("成绩为：你故意的吗？");
//	}
//}

//判断闰年
/*
function test() {
	//非整百年数除以4，无余为闰，有余为平；②整百年数除以400，无余为闰有余
	var year = year_input.value;
	if( (year%100==0 && year%400==0) || (year%100!=0 && year%4==0) ) {
		document.write("闰年！");
	} else {
		document.write("不是闰年");
	}						
}*/