/*
 闭包
 */

//函数中包含匿名函数，形成闭包。然后运行闭包
//function show(){
//	return function(){  //闭包
//		return "aaa";
//	};
//};
//document.writfe(show()+"<br/>");
//document.write(show()()+"<br/>");

//或 下面这种方法更加灵活
//var s  = show();
//document.write(s()+"<br/>");

//访问函数中的局部变量
//function show(){
//	var name="zhangsan";
//}
//里面的局部变量我们无法直接访问到，除去return出来能得到，这时候，只能使用闭包访问局部变量

//通过闭包返回局部变量   
//function show(){
//	var name="zhangsan";
//	return function(){
//		return name;
//	}
//}
//document.write(show()());

/**
 * 使用闭包的原因：全局变量会造成变量的污染，所以使用局部变量。但是，局部变量的作用域过短，会造成数据运算过程不能保存。
 *                使用闭包可以让数据常驻内存，保存数据的运算过程。
 */
//使用全局变量累加
//var age = 100;
//function add(){
//	age++;
//}
//add();
//document.write(age+"<br/>");
//add();
//document.write(age+"<br/>");

/**
   在大的项目中，是分模块的，在模块中一般不用全局变量，这很容易造成全局变量污染，造成程序的不可预测。
   比如，我在a.js中定义一个全局变量x，然后在b.js中定义了一个全局变量x，当我们使用x的时候，就不知道使用的是哪个x。
   就可能造成x不是预想的值。
   所以，我们一般会使用私有的局部变量
   闭包可以让局部变量常驻内存,避免使用全局变量
 */

//局部变量实现累加（失败）
//function add(){
//	var age =100;
//	age++;
//	return age;
//}
//document.write(add()+"<br/>");
//document.write(add()+"<br/>");
//document.write(add()+"<br/>");

//使用闭包，把局部变量常驻内存中实现累加
//function add(){
//	var age =100;
//	return function(){
	  //让数据长存在内存中
//		age++;
//		return age;
//	}
//}
//var a = add();
//document.write(a()+"<br/>");
//document.write(a()+"<br/>");
//由于闭包实现的局部变量不会立即销毁，这样会占用更多资源。当我们使用完之后，取消应用，垃圾回收
//a = null;
//a(); //a()就不能调用了

//如果直接使用，值并没有变化
document.write(add()()+"<br/>");
document.write(add()()+"<br/>");
//这是因为a



//循环中匿名函数的取值问题
//function add(){
//	//创建数组
//	var arr = [];
//	//循环赋值
//	for(var i=0;i<5;i++){
//		//模拟里面是一个复杂运算的结果，赋值给数组,希望数组的结果是arr[0] = 0,arr[1] =1....
//		arr[i] = function(){  
//			return i;         
//		}
//	}
//	return arr;
//}
//var a = add();
//document.write(a+"<br/>");//5个 function () { return i; }
//document.write(a[0]+"<br/>"); //function () { return i; }
//document.write(a[1]()+"<br/>");  //5

//for(var i=0;i<5;i++){
//  document.write(a[i]()+"<br/>");  //循环的每个结果都是5
//}
//这里主要原因是：var a = add();的时候，把arr的值赋值给a，这时候函数中的循环已经执行完毕，i值变成了4++; 
//这时候的每个i值都是5，所以每个函数返回的i值为5；


//使用匿名函数即时执行修正这个问题, 这个不是我们讲的重点，使用闭包实现，才是要讲的
//function add(){
//	//创建数组
//	var arr = [];
//	//循环赋值
//	for(var i=0;i<5;i++){
//		//通过即时执行赋值给数组
//		arr[i] = (function(num){  
//			return num;         
//		})(i);
//	}
//	return arr;
//}
//var a = add();
//for(var i=0;i<5;i++){
//document.write(a[i]+"<br/>");  
//}
//总结：通过匿名函数的即时执行把变量的保存到数组中

//使用闭包修正这个问题
//function add(){
//	//创建数组
//	var arr = [];
//	//循环赋值
//	for(var i=0;i<5;i++){
//		//通过及时执行赋值给数组
//		arr[i] = (function(num){  
//			//使用闭包，让变量num常驻内存中，和上面的累计道理一样
//			return function(){
//				return num;
//			};
//		})(i);
//	}
//	return arr;
//}
//var a = add();
//for(var i=0;i<5;i++){
////document.write(a[i]+"<br/>");  //function (){ return num; } 
//document.write(a[i]()+"<br/>") //0,1,2,3,4
//}

/**
 * 闭包中的this对象
 */
//全局变量this对象，指向window
//document.write(this+"<br/>"); //[object Window]
//当我们定义一个对象的时候，里面的this，就指向对象本身
//var a = {
// getThis:function(){
// 	return this;
// }
//};
//document.write(a.getThis()+"<br/>");//[object Object] 这个是a对象

//而闭包中的this，永远指向window对象
//var a = {
//	getThis:function(){
//	   return function(){
//	   	  return this;
//	   }
//	}
//}

//打印this
//document.write(a.getThis()+"<br/>");  //function (){ return this; }
//document.write(a.getThis()()+"<br/>");//[object Window]
//总结：全局的this，是Window对象，而对象内部的this，是该对象本身。闭包中的this，指向Window对象，因为闭包不是该对象的属性和方法。

//再次验证
//var user ="window"; //定义全局属性
//var u = {
//	user:"user",  //定义局部属性
//  getUser:function(){
//  	  return this.user;
//  }
//};
//document.write(u.getUser()+"<br/>"); //user

//添加闭包
//var u = {
//	user:"user",
//	getUser:function(){
//		return function(){
//			return this.user;
//		}
//	}
//}
//document.write(u.getUser()+"<br/>"); //function (){ return this.user; }
//document.write(u.getUser()()+"<br/>") //window
//总结：全局变量的this指向windows，闭包中的this也指向windows。
//所以，闭包的变量可以模拟全局变量，从而闭包的变量就可以代替全局变量。
//所以，当我们不能全局变量的时候，就可以使用闭包来代替


//那如果我们想让闭包中的this指向对象可以做到吗？
//使用对象冒充让闭包中的this也指向对象内部call(冒充对象) 
//document.write(u.getUser().call(u)+"<br/>"); //call(要冒充的对象)

//或 修改对象
//var u = {
//	user:"user",
//	getUser:function(){
//		var that = this; //这里的this执行对象本身
//		return function(){
//			return that.user; //访问局部变量对象
//		}
//	}
//}
//document.write(u.getUser()()+"<br/>");


/**
 * IE内存泄漏问题
 * 所谓的内存泄漏就是一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。
 */
//window.onload = function (){
//	var div1 = document.getElementById("aaa");
//	//alert(div1);   
//	div1.onclick = function(){
//		alert(div1.innerHTML)
//	}
//	alert(div1);  //div对象一直驻留在内存中
//}

//正确的写法
// window.onload = function(){
//	var div1 = document.getElementById("aaa");
//	var value = div1.innerHTML;
//	  //还是可以点击
//	div1.onclick = function(){
//		alert(value)
//	}
//	div1 = null;  //解除引用，等待垃圾回收
//	alert(div1);  //div对象一直驻留在内存中
//}


//块级作用域：在一些代码块中，比如for循环，if的代码块中定义的变量，我们定义的变量应该只是在这个代码块中起作用，
//当超出这个代码块，变量就可以销毁。
//但是js没有这块的设计，所以做不到。

//function test(){
//	for(var i=0;i<5;i++){
//		
//	}
//	document.write(i+"<br/>");//在代码块之外，依然能够访问到块中变量
//}
//test();

//使用自运行匿名函数实现 
//function test(){
//	(function(){
//		for(var i=0;i<5;i++){
//			
//		}
//	})();
//	document.write("i="+i+"<br/>");
//}
//test();
//优点：匿名函数中的任何变量，都会在执行结束后销毁

//如果是全局变量的话，是需要手动释放的
//var age=100;
//alert(age);
//age = null;
//这样写比较麻烦，所以，在实际开发中，你会看到很多人会用自我执行的匿名函数。来定义代替全局变量。
//(function(){
//	var name="zhang";
//	document.write(name);
//})();
//总结：使用匿名函数实现的私有作用域，可以保证匿名函数中定义的变量在函数执行之后就销毁了。
//在大型项目中，多人开发的时候，就不会产生变量名和方法冲突，导致不可预测的问题。
//比如两个人同时开发，都定义个了一个全局的变量name，那第二个人会覆盖第一个人的内容。
//如果我们使用匿名函数实现块级作用域，就不会相互影响。

/**
 * 对象的私有化：所谓的对象私有化，就是让变量和函数只能有本身去访问
 * 下面有4种实现方式
 */
//先讲定义自定义对象，就是function中包含function。
//通过构造函数和特权方法设置和得到私有属性
//function Student(value){
//	var age = value;
//	this.getAge= function(){
//		return age;
//	}
//	this.setAge= function(value){
//	   if(age>0&&age<100){
//	   	age = value;
//	   }	
//	}
//}
//var stu = new Student(20);
//document.write(stu.getAge()+"<br/>");
//stu.setAge("30");
//document.write(stu.getAge()+"<br/>");

//对象包含私有变量和函数，外部是不能访问的，通过提供特权方法访问
//function Test(){
//	var age=100;  //私有变量，外部不能访问
//	function myTest(){  //私有函数
//		return "mytest";
//	}
//	//提供特权方法进行访问
//	this.getAge = function(){
//		return age;
//	}
//	this.getMyTest= function(){
//		return myTest();
//	}
//}
//
//var test = new Test();
//document.write(test.age+"<br/>");  //直接根据属性，访问不到
//document.write(test.getAge()+"<br/>"); //可以得到属性和方法
//document.write(test.getMyTest()+"<br/>");


//通过闭包实现对外接口的特权方式调用私有属性和方法
//var test = function(){
//	var age=100;
//	function myTest(){
//		return "mytest";
//	}
//	return {
//		get:function(){
//			return age+myTest();
//		}
//	}
//}();
//
//document.write(test.get());


//或字面量的方式调用私有属性和方法
//var test = function(){
//	var age=100;
//	function myTest(){
//		return "mytest";
//	}
//	//修改1
//	var obj = { get:function(){
//			return age+myTest();
//		}
//	}
//	return obj; //修改2
//}();
//
//document.write(test.get());


//增强的模块模式（不讲 没成功）
//function Desk() {}
//var box = function(){
//	var age =100;
//	function run(){
//		return "yunxing...";
//	}
//	var desk = new Desk();
//	desk.get1 = function(){
//		return age+run();
//	};
//	return desk;
//}
//document.write(box.get1());



//静态私有变量:所谓的静态就是共享的所有属性，也就是不管任意对象修改这个变量值，都能够成功
//(function(){
//	var age = ""; //私有变量
//	//全局的构造函数
//	Test=function(value){
//		age= value;
//	}
//	Test.prototype.getAge =function(){
//		return age;
//	}
//	Test.prototype.setAge = function(value){
//		age = value;
//	}
//})();
//
//var test = new Test(200);
//document.write(test.getAge()+"<br/>");
//var test2 = new Test(50);
//document.write(test.getAge()+"<br/>");
//总结：静态变量，就是变量只有一个内存保存，不管谁保存，都会修改内容。而不像上面，每一个对象都有一个保存地址。