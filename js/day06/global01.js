/*
 我们说属性和方法都应该属于一个对象。那我们定义的全局变量和属性是不是也应该有一个对象？
 Golbal对象:所有全局作用域内定义的属性和方法，都属于Golbal对象。
 但是Golbal对象不能直接使用，也不能用new来创建，当我们运行js的时候，会自动创建Golbal对象，并设置方法和属性。
 也就是说我们定义的全局的属性和方法也是属于一个对象Golbal。
 我们下面来讲下Golbal的常用方法：
 */

//var str = "//?张";
//var enStr = encodeURI(str); 
//document.write(enStr+"<br/>");//特殊字符不会编码
//document.write(decodeURI(enStr)+"<br/>")；


//var enComStr = encodeURIComponent(str);
//document.write(enComStr+"<br/>")//特殊字符也能编码
//document.write(decodeURIComponent(enComStr)+"<br/>");

//eval执行javascript字符串
//eval("var str = 'aaa'");  //执行语句
//document.write(str);
//eval("alert('bbb')");

//eval("function test(){return 'ccc'};"); //运行函数
//document.write(test());
