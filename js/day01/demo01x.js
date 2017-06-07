/**
 * JS的引入方式
 */
//document.write("aaa");
//alert("bbb");
//console.log("ccc");//控制台打印

/**
 *注释 
 */
/*
document.write("开始学习JavaScript");
document.write("大家要努力哦");
document.write("加油");
*/

/**
 * 变量声明
 */
//声明并初始化变量：名字和年龄
//var name="张三";
//var age =20;
//alert(name);
//alert(age);

//一行声明多个变量
//var name="zhangsan",age=25;
//alert(name);
//alert(age);

//只声明不初始化,直接alert出现undefined。在使用之前初始化就可以
//var color;
//color="red";
//alert(color);

//不声明，直接使用,报错
//alert(num);

//因为是弱类型，可以设置是字符，也可以设定数字，但是不推荐这么做
//var a ="李四";
//a = 100;
//alert(a);


/**
 * JS的数据类型
 */
//String类型(字符串类型)
//var str ="hello";

//Numer类型(数字类型)
//var x =6;
//var pi=3.1415;  
//var z=123e5;      // 12300000  科学（指数）计数法
//document.write(z);

//八进制，十进制数
//var iNum4 = 070;
//document.write(iNum4+"<br/>"); //070 等于十进制的 56
//var iNum5 = 0x1F;
//document.write(iNum5+"<br/>"); //0x1f 等于十进制的 31

//数字的最大值、最小值、无穷大和无穷小
//var max = Number.MAX_VALUE;
//var min = Number.MIN_VALUE;
//alert(max);
//alert(min);

//Booelean类型(布尔类型)
//var b1 = true;
//var b2 = false;

//Undefined类型
//var u1;
//document.write(u1+"<br/>");

//引用类型
//var person1 = {name:"zhangsan",age:20};
//var person2 = {}; //空的对象
//var person3 = null; //空对象
//document.write(person1+"<br/>"); //[object Object]
//document.write(person2+"<br/>"); //[object Object]
//document.write(person3+"<br/>"); //null

//变量的命名规则

/**
 * 检验变量的数据类型
 */
//检验字符串类型
//var sName="wangwu";
//document.write(typeof sName+"<br/>"); //string  说明是String类型的数据
//document.write(typeof iAge+"<br/>");   //number 说明是Number类型的数据

//检验数字类型类型
//var x=10;
//document.write(typeof x+"<br/>"); //number
//var pi =3.1415;
//document.write(typeof pi+"<br/>"); //number 
//var z = 10e3;
//document.write(z+"<br/>");   //10000
//document.write(typeof z+"<br/>");  //number

//布尔值的数据类型
//var fFound = true;
//document.write(typeof fFound+"<br/>");   //boolean 说明是Boolen类型的数据

//Undefined类型
//var iNum;  
//document.write(typeof iNum+"<br/>"); //返回为undefined
//document.write(typeof iNum2 +"<br/>");//未定义返回也为undefined

//引用类型---对象
//var person1 = {name:"zhangsan",age:20};
//document.write(typeof person1); //obj 说明是引用类型
//var person2 = {}; //空的对象
//document.write(typeof person2); //obj 说明是引用类型
//var person3 = null; //空对象
//document.write(typeof person3);  //obj 是null类型

//函数，不是函数类型，因为没有这个类型
//function myFunction(){
//	
//}
//document.write(myFunction+"<br/>");   //打印函数
//document.write(typeof myFunction);    //function

/**
 * 变量的储存方式
 */

/**
 * 基本数据类型的转换
 */
/**
 * 多种类型转换成为字符串类型
 */
//Boolean类型转化为String类型
//var bFlag = true;
//document.write(typeof d+"<br/>");  //boolean，说明是Boolean类型
//var sFlag = bFlag.toString();
//document.write(typeof sFlag+"<br/>");  //string,说明是String类型
//document.write(sFlag+"<br>");  //true  字符串

//Number类型转化为String类型
//var iNum1 =10;
//var iNum2 = 10.1;
//var sNum1 = iNum1.toString();
//document.write(typeof sNum1+"<br/>"); //string
//document.write(sNum1+"<br/>");
//var sNum2 = iNum2.toString();
//document.write(typeof sNum2+"<br/>");//string
//document.write(sNum2);

//Number类型转换进制
//var iNum3 = 10;
//document.write(iNum3.toString(2)+"<br/>");//1010
//document.write(iNum3.toString(8)+"<br/>");//12
//document.write(iNum3.toString(16)+"<br/>");//a


/**
 * 多种类型转换转化为Number类型
 *
 */
//使用parseInt转化整数
//var iNum1 = parseInt("123abc");
//document.write(iNum1+"<br>");  //123
//document.write(typeof iNum1+"<br/>"); //number
//document.write(parseInt("abc123")+"<br/>"); //NaN 字符串无法转化
//document.write(parseInt(10.1)+"<br/>"); //10 
//document.write(parseInt(true)+"<br/>");  //NaN Boolean无法转化

//使用parseFloat转化为小数
//document.write(parseFloat("123abc")+"<br/>"); //123
//document.write(parseFloat("abc123")+"<br/>"); //NaN
//document.write(parseFloat(true)+"<br/>");  //NaN

//其他进制转换为10进制
//document.write(parseInt("a",16)+"<br/>");//十六进制的a，转化为十进制的10
//document.write(parseInt("10",2)+"<br/>"); //二进制的10，转化为十进制的2
//document.write(parseInt("10",8)+"<br/>"); //八进制的10，转化为十进制的8

/**
 * 多种类型转化为Boolean类型
 */
//document.write(Boolean("abc")+"<br/>"); //true  非空字符串为true，空字符串为false
//document.write(Boolean("")+"<br/>");  //false 
//document.write(Boolean(11)+"<br/>"); //true  非0为true，0或NaN为false
//document.write(Boolean(0)+"<br/>");  //false
//document.write(Boolean(NaN)+"<br/>"); //false
//document.write(Boolean(Object())+"<br/>");//true  任何对象为true,null为false
//document.write(Boolean(null)+"<br/>"); //false


/**
 * 多种类型转化为Number类型
 */
//布尔类型
//document.write(Number(true)+"<br/>");  //1
//document.write(Number(false)+"<br/>");  //0
//undefined,null
//document.write(Number(undefined)+"<br/>");  //NaN
//document.write(Number(null)+"<br/>"); //0
//小数 整数
//document.write(Number("1.2")+"<br/>");
//document.write(Number("12")+"<br/>");
//全字符串  空对象 
//document.write(Number("asdf")+"<br/>");  //NaN
//document.write(Number(new Object())+"<br/>"); //NaN