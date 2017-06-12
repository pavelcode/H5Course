/**
 * 创建对象的三种方式
 * 使用字面量方式创建
 * 使用new Object创建对象，创建多个对象（一个一个创建，值传递创建，工厂模式创建，问题：对象无法识别） 
 * 使用构造函数创建，可以做到对象识别
 * 
 * 总结：三种创建方式的差别：字面量只能创建一次，new Object创建对象无法识别。所以，在开发中，我们经常使用构造函数创建。
 */

/*
 * 创建对象的三种方式
 */
/*
 * 创建对象方式1：使用字面量创建一个对象
 */
//var stu = {
//	name:"zhangsan",
//	age:20,
//	study:function(){
//		return this.name+"，现年"+this.age+"岁,还在上大学";  //this指当前作用域的对象
//	}
//}
//document.write(stu.study()+"<br/>");

/*
 * 创建对象方式2：使用Object创建一个对象
 */
//创建一个对象，并定义属性和方法
//var obj = new Object();
//obj.name = "zhangsan";
//obj.age =20;
//obj.study = function(){
//	return this.name+"，现年"+this.age+"岁,还在上大学";  //this指当前作用域的对象
//}
//document.write(obj.study()+"<br/>");

//this在方法作用域中指当前对象，但当在全局的作用域是window对象
//document.write(this+"<br/>");
//var name ="lisi";
//document.write(this.name); //这时候，这个this是全局的作用域


//定义多个对象实例
//var obj = new Object();
//obj.name = "lisi";
//obj.age =21;
//obj.study = function(){
//	return this.name+"，现年"+this.age+"岁,还在上大学";  //this指当前作用域的对象
//}
//document.write(obj.study()+"<br/>");
//
//var obj2 = new Object();
//obj2.name = "王五";
//obj2.age =22;
//obj2.study = function(){
//	return this.name+"，现年"+this.age+"岁,还在上大学";  //this指当前作用域的对象
//}
//document.write(obj2.study()+"<br/>");

//使用对象值传递
//var obj = new Object();
//obj.name = "lisi";
//obj.age =21;
//obj.study = function(){
//	return this.name+"，现年"+this.age+"岁,还在上大学";  //this指当前作用域的对象
//}

//var obj2 = obj;
//obj2.name = "王五";
//obj2.age =22;
//obj2.study = function(){
//	return this.name+"，现年"+this.age+"岁,还在上大学";  //this指当前作用域的对象
//}
//document.write(obj.study()+"<br/>"); //王五,现在22岁，还在上大学
//document.write(obj2.study()+"<br/>");//王五,现在22岁，还在上大学


//当创建多个类似对象的时候，可以使用一种方法来创建实例对象--工厂模式
//function createObj(name,age){
//	var obj = new Object();          //创建对象
//	obj.name = name;                 //添加属性
//	obj.age = age;
//	obj.study = function(){          //添加方法
//		return this.name+"，现年"+this.age+"岁,还在上大学<br/>"; 
//	}
//	return obj; //一定要返回对象      //返回对象的引用
//}
//document.write(createObj("赵六",23).study());
//document.write(createObj("田七",24).study());

//使用Object创建对象出现了一个问题，就是创建的都是Object对象的实例，无法做到对象识别。
//document.write(createObj("赵六",23) instanceof Object);//true
//document.write(createObj("田七",24) instanceof Object);//true
//所以，如果要做到对象识别，我们需要使用构造函数来创建对象。

/*
 * 创建对象方式3：使用构造函数创建一个对象
 */

//上面都是基于Object对象创建的，我们也可以通过构造函数创建
function Student(name,age){
	this.name = name;
	this.age = age;
	this.study = function(){
		return this.name+"，现年"+this.age+"岁,还在上大学<br/>";
	}
}
//var s = new Student("lili",20);
//document.write(s.study()+"</br>");

//对象识别
//document.write((s instanceof Object)+"<br/>");//true 所有构造函数创建的对象，都是Object的子类
//document.write((s instanceof Student)+"<br/>");//true

//function Teacher(name,age){
//	this.name = name;
//	this.age = age;
//	this.study = function(){
//		return this.name+"，现年"+this.age+"岁,还在上大学<br/>";
//	}
//}
//对象识别
//var t = new Teacher("高老师",20);
//document.write((t instanceof Teacher)+"<br/>");//true
//document.write((s instanceof Teacher)+"<br/>");//false
//总结：构造函数能够做到对象识别

//对象的不同实例比较
var s1 = new Student("lili",20);
var s2 = new Student("lili",20);
document.write((s1.name==s2.name)+"<br/>");//true 比较属性
document.write((s1.study()==s2.study())+"<br/>");//true 比较返回值
document.write((s1.study==s2.study)+"<br/>");//false 对象的方法进行比较，比较的是地址
//对象的不同实例，方法的地址是不同的


//对象冒充,调用对象方法
//var s = new Object();
//s.study();  //s是Object对象，没有study方法

//var s = new Object();
//Student.call(s,"zhang",20); //s冒充Student对象，并传递参数
//document.write(s.study());  