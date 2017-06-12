/**
 * 引用类型
 */

//创建Object对象
//var obj  = new Object();

//创建Boolean对象
//var booleanObj = new Boolean(true);  //Boolean 对象是 Boolean 原始类型的引用类型
//document.write(booleanObj.valueOf()+"<br/>");  //获得Boolean对象的值
//document.write(typeof booleanObj.valueOf()+"<br/>"); //boolean 对象是Boolean类型的


//创建Number对象 整数
//var numberObj = new Number(10);
//document.write(numberObj.valueOf()+"<br/>"); //获得Number对象的值
//document.write(typeof numberObj.valueOf()+"<br/>"); //number  对象是Number类型的

//小数
//var numberObj1 = new Number(3.1415);
//document.write(numberObj1.valueOf()+"<br/>"); 
//document.write(numberObj1.toFixed(1)+"<br/>");  ////设置小数点后的精确度1位

//创建字符串对象
//var stringObj = new String("Hello");
//document.write(stringObj.valueOf()+"<br/>");
//document.write(stringObj.toString()+"<br/>");
//document.write((stringObj.valueOf()==stringObj.toString())+"<br/>"); //true 必须加括号
//document.write(stringObj.length+"<br/>");//5  得到字符串的长度
//document.write(stringObj.charAt(1)+"<br/>");//e  得到位置为1的字符
//document.write(stringObj.indexOf("l")+"<br/>");//2 得到字符的位置
//document.write(stringObj.lastIndexOf("l")+"<br/>");//3 得到最后出现的位置
//document.write(stringObj.substring(2)+"<br/>");//llo 截取字符串
//document.write(stringObj.substring(2,4)+"<br/>");//ll
//document.write(stringObj.toUpperCase()+"<br/>");//字符全部转化为大写
//document.write(stringObj.toLowerCase()+"<br/>");//字符全部转化为小写

//定义一个基本数据类型
//var s1 = "world"; 
//document.write(stringObj.concat(s1)+"<br/>"); //concat连接
//document.write((stringObj instanceof String)+"<br/>"); //true 判断对象的实例 
//document.write((s1 instanceof String)+"<br/>");//false 说明s1是基本数据类型String