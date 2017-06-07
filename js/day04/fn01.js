/*
 什么是函数？
大家是否玩过植物大战僵尸？嗖嗖，发射炮弹打僵尸。
如果每次发送炮弹，炮弹代码是100行，如果每次发射炮弹，都写100行代码？
这样会造成代码重复的问题，为了解决代码重复问题，我们给这100行代码，起一个名字。
当每次发送炮弹的时候，就用这个名字，就会执行这100行代码。
给重复的代码起名字的过程，我们称为把代码封装成一个函数。
 */

/*
 函数的定义：
 函数：定义的有一定功能的代码块。
 很多语言中都有函数的概念，在有些语言中函数又称为方法。
 所以，函数和方法都是一个意思。我在后面如果说了方法，也就是函数。
 */

/*
声明函数：
function 函数名（【参数】）{ 函数体； 【reutrn 返回值；】}
函数名：符合标识符命名规范
参数名：就是变量名
函数体语句：要完成某个功能的语句
 return：结束方法，并把结果返回 
*/
/*
函数的分类：
无参(数)无返回值
带参(数)无返回值
无参(数)带返回值
带参(数)带返回值 
*/


/*
 如果要写一个函数，首先我们需要明确两件事：
1 见名知义的函数
2 明确参数的个数
3 是否有返回值
 */

//无参(数)无返回值
function show(){
	alert("秀一下");
}

//带参(数)无返回值
/*
function show(name,age){  //不同的参数用逗号分隔
	alert(name+"，今年"+age+"岁了");
}
*/
//无参(数)带返回值
/*
function show(){
	return "我是一个函数";
}
*/
//带参(数)带返回值
/*
function getInfo(name,age){
	return name+"的年龄是"+age;
}
*/

/*
函数调用：只定义，没有意义，我们需要把调用：方法名(参数)； 
   1》单独调用：对于有返回值的函数，一般来说没有意义
   2》输出调用：document.write(方法名(参数)); ，这个一般用在程序调试   
   3》赋值调用：   
*/

//单独调用
//show();
//show("zhangsan",18);
//输出调用
//document.write(show()); //undefined
//赋值调用
//var a = show();  //undefined
//document.write(a);

//调用时候，函数名写错了
//show1();  //报错  show1 is not defined


//输出调用
//document.write(show());
//赋值调用
/*
var a = show();
document.write(a);
*/
/*
document.write(getInfo("张三丰",50));
*/



//作业：计算N个数字的和？ 
//sum(12,30,52,36,40);

  
/*       
画图，把上面的代码的每步都列出来（每步的赋值都要说出来）
   如果调用方法出现错误，说明是名字写错了
     定义变量
     调用方法
     把实参传递给形参
     运行方法中的代码
     把返回值返回给调用处的变量
     输出返回结果
 */

//求出两个数的最大值
//判断两个值是否相等（两种方式实现）（方法返回boolean类型）   
     //三元改进
     //最终版：a==b
/*判断三个数中的最大值  （三种方式实现）(使用if嵌套)
 三元改进  
 if(a>b){ return (a>c?a:c)}else{ return (b>c?b:c)}
 继续改进
 (a>b)?(a>c?a:c):(b>c?b:c)   (但不建议)
 阅读性强
 int temp = ((a>b)?a:b);
 int max = ((temp>c)？temp:c);
*/   
/*
var a ,b,c;
if(a>b){
	if(a>c){
		document.write(a);
	}else{
	    document.write(c);
	}
}else{
	if(b>c){
		document.write(b);
	}else{
		document.write(c);
	}
}
*/
//打印n行n列的星号
//3行5列
/*
for(var i=1;i<4;i++){
	for(var j=1;j<6;j++){
		document.write("*");
	}
	document.write("<br/>");
}
*/

//10行8列
/*
for(var i=1;i<11;i++){
	for(var j=1;j<9;j++){
		document.write("*");
	}
	document.write("<br/>");
}
*/

/*
function star(n,m){
	for(var i=1;i<=n;i++){
		for(var j=1;j<=m;j++){
			document.write("*");
		}
		document.write("<br/>");
	}
	
}
star(3,6);
star(10,8);

//九九乘法表
//你指定一个1-9的值，打印出来乘法表中对应值的行

/*
  1* 1 =1
  1* 2 = 2  2*2 =4;

  .....

*/
function biao(n){
	for(var i=1;i<=n;i++){
		
		for(var j=1;j<=i;j++){
			document.write(i+"*"+j+"="+(i*j)+"&nbsp");
		}
		document.write("<br/>");
	}
}

/*
总结：当要定义一个函数的时候，首先需要确定两件事：
       1 参数和参数的个数
	   2 确定返回值

*/

/*
 模拟ATM的用户密码验证功能
   用户密码是参数，且参数是一个
   返回值：当密码错误的时候，无返回值，但是弹出框。当密码正确的时候，有返回值，返回欢迎内容
*/
 /*
function ATM(password){
	//假设你的密码是123456，密码类型字符串
	if(password=="123456"){
		return "欢迎光临";
	}else{
		return "密码错误，请重新输入";
	}
}

//ATM("1234");
var v = ATM("123");
document.write(v);
*/

//使用return返回，当函数中有多个return的时候，这个return的条件是对立的

/*
function test(){
	var i = 1;
	return i;
	alert(i);
}
test();
*/
//return代表函数的执行结束，return之后的内容就不会再执行了



/*
 把函数作为参数进行传递
 */
//function add(num){
//	return num+100;
//}
//function test(add,t){
//	return add(t);
//}
//alert(test(add,100));

/*
 使用apply和call实现对象冒充调用函数
 */
/*
function add(num1,num2){
	return num1+num2;
}
document.write(add(10,20));

function executeAdd(num1,num2){
	return add.apply(this,[num1,num2])  //第一个参数是函数调用的作用域，第二个参数是参数数组
}
document.write(executeAdd(10,20));
function executeAdd2(num1,num2){
	return add.apply(this,arguments);
}
document.write(executeAdd2(10,20));
function executeAdd3(num1,num2){
	return add.call(this,num1,num2);  //第二个参数是一个个参数
}
document.write(executeAdd3(10,20));
*/
//使用对象冒充的意义：调用局部变量
/*
var color = "red";
var sky = {
	color:"blue"
};
function getColor(){
	return this.color;
}
document.write(getColor());  //默认调用全部变量
document.write(getColor.call(sky)); //使用对象冒充调用局部变量
*/

/*
通过arguments得到参数值和参数个数
动态得到参数的和
*/            
//通过arguments得到参数
//function fun1(){
//	return arguments[0]+"-"+arguments[1];
//}
//alert(fun1("zhangsan",20));

//通过arguments得到参数个数
//function fun1(){
//	return arguments.length;
//}
//alert(fun1(1,2,3,4));

//动态得到参数值
//function fun1(){
//	var sum =0;
//	if(arguments.length>0){
//		for(var i=0;i<arguments.length;i++){
//		  sum += arguments[i];
//		}
//	}
//	return sum;
//}
//alert(fun1(1,2,3,4,5));

/*
 * 函数没有重载功能，会调用最近的函数
 */
//function fun1(num){
//	return num+10;
//}
//function fun1(num){
//	return num+20;
//}
//alert(fun1(100));

//也不能根据参数个数区分
//function fun1(num,name){
//	return num+10;
//}
//function fun1(num){
//	return num+20;
//}
//alert(fun1(100,"张三"));

//最后定义的函数会覆盖前面的函数，进行执行
//function fun1(num,name){
//	return num+10;
//}
//alert(fun1(100,"张三"));
//function fun1(num){
//	return num+20;
//}


//使用变量来定义函数
//function add(num){
//	return num+10;
//}
//var add = new Function("num","num+10");
//alert(add(10));
//var doAdd = new Function("iNum","iNum + 10");
//alert(doAdd(10)); 