/*
一元运算符
*
/
/*
赋值运算符
*/
//var iNum = 1+3; //把1+3的结果赋值给变量iNum


/*
   如果只是单行的运算符，都会加
   如果包含赋值运算符，放在前面就是先加，放在后面就是后加
 */
//前增运算符
//var iNum =10;
//++iNum;
//document.write(iNum+"<br/>"); //11

//前减运算符
//var iNum = 10;
//--iNum;
//document.write(iNum+"<br/>");//9
//总结：放在前，先加减，后赋值

//后增运算符
//var iNum = 10;
//var iNum2 = iNum++;
//document.write(iNum2+"<br/>");  //10
//document.write(iNum+"<br/>"); //11

//后减运算符
/*
var iNum =10;
document.write(iNum--); //11
document.write(iNum);//10*/
//总结：放在后，先赋值，后加减


//练习
/*
var a = 10，b =10，c=10；  
a = b++；  //  a = 10 b =11   c=10
c = --a;   //  a = 9  b =11   c=9
b=++a;    //   a = 10 b=10 c = 9
a = c--;  //   a = 9  b = 10 c = 8
打印  abc
*/

//一元加法
/*
var iNum = 100;
iNum += iNum; //iNum = iNum+iNum;
document.write(iNum+"<br/>");*/

//一元乘法
/*
var iNum = 100;
iNum *= iNum;  //iNum = iNum*iNum;
document.write(iNum+"<br/>");*/


/*
算术运算符
*/
//加，减，乘，除，取余
/*
var iNum1 = 8;
var iNum2 = 2;
document.write((iNum1+iNum2)+"<br/>");
document.write((iNum1-iNum2)+"<br/>");
document.write((iNum1*iNum2)+"<br/>");
document.write((iNum1/iNum2)+"<br/>");
document.write((iNum1%iNum2)+"<br/>");*/


//+代表正数，如果是单独字符串，并且是数字字符串，+号会把字符串转化为数字
/*
var sNum = "10";
document.write((typeof sNum)+"<br/>");
var iNum = +sNum;
document.write((typeof iNum)+"<br/>" );*/

//+是连接符，如果是任意类型和字符串相加，会转化为字符串
/*
var sNum = "abc";
var iNum = 10;
var sResult = iNum+sNum;
document.write(sResult+"<br/>");
document.write((typeof sResult)+"<br/>");*/

/*
逻辑运算符
*/
/*
var b1 = true;
var b2 = false;
document.write((b1&&b2)+"<br/>");
document.write((b1||b2)+"<br/>");
document.write((!b1)+"<br/>");*/

//未定义变量的与或运算
/*
var bTrue = true;
var bResult = (bTrue&&bUnKnown);  //发生错误(变量bUnknown未定义,不能用于逻辑与运算。)
document.write(bResult);   //不会执行
*/

/*
var bTrue = true;
var bResult = (bTrue||bUnKnown);  //如果一个运算数是为true，那第二个运算数就不需要运算了
document.write(bResult);  //true 
*/

/*
var bTrue = true;
var bResult = bUnKnow||bTrue;  //发生错误(变量bUnknown未定义,，不能用于逻辑或运算。)
document.write(bResult);*/

//不同数据类型的非运算
/*
var sRed ="red";
var iZero = 0;
var iNum = 123;
var obj = new Object();
document.write(!sRed+"<br/>"); //false 
document.write(!iZero+"<br/>"); //true 运算数是数字0，代表false
document.write(!iNum+"<br/>"); //false  运算数是0以外的任何数字，代表true
document.write(!obj+"<br/>"); //false  任意对象都是true
*/

/*
关系运算符
*/
/*
document.write((5>3)+"<br/>");  //true
document.write((5<3)+"<br/>");   //false
document.write((5==3)+"<br/>");   //false 相等
document.write((5!=3)+"<br/>");   //true  不等
document.write(("a">"A")+"<br/>"); //true  A (65) a(97) 比较ASCII的值 true
document.write(("a">"Aa")+"111<br/>");//true 第一个字符串中每个字符的ASCII码都与会第二个字符串中对应位置的ASCII码进行数值比较
document.write(("a">"aA")+"<br/>");//false 
document.write("aA">"aB")+"<br/>");//false 
document.write(("20"==20)+"<br/>");//true  比较数字和字符串,比较数值
document.write(("20"===20)+"<br/>"); //false 比较值和数据类型
*/

/*
条件运算符（三目运算符）
*/
/*
var iNum = 10;
document.write(iNum>5?"iNum大于5":"iNum不大于5");
*/



/**
 * 位运算
 */
//位的概念
//var iNum = 18;
//document.write(iNum.toString(2)+"<br/>"); //10010
//在32位电脑中保存 00000000 00000000 00000000 00010010, 第一位位表示符号位，0 表示正数，1 表示负数。
//转化为十进制数： 系数*权^（位置-1次）之和   1*2^4+1*2= 18 

//位否
//var iNum1 = 25;		//25 等于 00000000000000000000000000011001
//var iNum2 = ~iNum1;	//转换为 11111111111111111111111111100110
//document.write(iNum2+"<br/>");		//输出 "-26"

//位与
//var iNum1 = 25 & 3;   
//document.write(iNum1+"<br/>");//输出 "1"
/*
0001 1001
0000 0011
0000 0001
*/
//位或
//var iResult = 25 | 3;
//document.write(iResult+"<br/>");	//输出 "27"
/*
0001 1001
0000 0011
0001 1011
 */
//位异或
//var iResult = 25 ^ 3;
//document.write(iResult+"<br/>");	//输出 "26"
/*
0001 1001
0000 0011
0001 1010
 */
//左移
//var iOld = 2;		    //等于二进制 10
//var iNew = iOld << 5;	//等于二进制 1000000 十进制 64
//document.write(iNew+"<br/>")  

//快速运算方式
//document.write((3<<5)+"<br/>");   //值*2^左移次方   3*2^5
//document.write(3*2*2*2*2*2+"<br/>");



//有符号右移
//var iOld = 64;		//等于二进制 1000000
//var iNew = iOld >> 5;	//等于二进制 10 十进制 2
//document.write(iNew+"<br/>"); //所有数位整体右移，同时保留该数的符号（正号或负号）

//var iOld = -64;		//等于二进制 1000000
//var iNew = iOld >> 5;	//等于二进制 10 十进制 2
//document.write(iNew+"<br/>"); //所有数位整体右移，同时保留该数的符号（正号或负号）

//无符号右移
//var iOld = 64;		//等于二进制 1000000
//var iNew = iOld >>> 5;	//等于二进制 10 十进制 2
//document.write(iNew+"<br/>");		
			
/*
0001 1001
0000 0011
0001 1011
			
12345
1X10^4 + 2X10^3 + 3X10^2 + 4X10^1 + 5X10^0
*/