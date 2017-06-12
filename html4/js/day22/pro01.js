//使用构造函数创建的每一个对象都有一个property的属性，这个属性也是一个对象。而这个property属性的作用是实现所有的对象共享相同的属性和方法
/*
 * 定义原型对象
 */
//使用原型创建对象，定义原型属性和方法
//function Student(){}; //定义原型构造函数
//Student.prototype.name ="lilei";  //定义原型属性
//Student.prototype.age = 10;
//Student.prototype.study = function(){ //定义原型方法
//	return this.name+"，今年"+this.age+"岁了";
//}
//总结：使用前面方式创建的是实例对象，使用property创建的是原型对象


//调用原型的属性和方法与之前的一致
//var s = new Student();
//document.write(s.name+"<br/>");
//document.write(s.study()+"<br/>");


//原型的方法比较
//var s1 = new Student();
//var s2 = new Student();
//document.write((s1.study==s2.study)+"<br/>");//true
//说明原型的方法指向同一个地址，原型的方法是共享的。

//ppt理解：原型方法的地址一致
//

/*
 * 获得原型对象
 */

//原型对象和实例对象的区别是：实例对象每个都是新创建，单独用指针执行
//原型对象：所有原型对象的__proto__指向一个公共的区域
//document.write(s.__proto__+"<br/>"); //[object Object] 通过对象实例的指针，获得原型对象，但是IE不支持
//document.write(s.__proto__.constructor+"<br/>");//function Student(){} 得到构造函数
//document.write(s.__proto__.name+"<br/>"); //lilei
//document.write(s.__proto__.study+"<br/>"); //function (){ //定义原型方法 return this.name+"，今年"+this.age+"岁了"; }
//document.write(s.__proto__.study()+"<br/>"); //lilei，今年10岁了
//document.write(Object.getPrototypeOf(s).study()); //ES5获得原型对象

//判断对象实例是否是原型对象
//document.write(Student.prototype.isPrototypeOf(s)+"<br/>");//true

//原型对象获得属性的执行流程：原型有实例属性，得到实例属性，否则去原型中找原型属性
//function Student(){}; //定义原型构造函数
//Student.prototype.name ="lilei";  //定义原型属性
//Student.prototype.age = 10;
//Student.prototype.study = function(){ //定义原型方法
//	return this.name+"，今年"+this.age+"岁了";
//}

//var s = new Student();
//s.name ="王强";         //定义实例属性
//document.write(s.name+"<br/>");//按照就近原则取值

//如果实例中有该属性，就从实例中获得
//function Student(){
//	this.name="zhang";
//};
//document.write(s.name);//zhang

//如果实例中没有属性，就从原型属性
//var s1 = new Student();
//document.write(s1.name+"<br/>") 

//判断属性是否在实例属性，还是原型属性
//document.write(s1.hasOwnProperty("name")+"<br/>");//true 代表实例属性

/*
 *使用自面量的方式定义原型对象 
 */
//function Student(){}
//Student.prototype = {
//	name:"丽水",
//	age:100,
//	study:function(){
//		return this.name+",今年"+this.age+"岁了";
//	}
//};
//var s = new Student();
//document.write(s.study());

//原型的应用：给系统添加新方法
//我们都知道String有subString（），但是如果要新定义方法，需要使用原型
//String.prototype.aaa = function(){
//	return this+"aaa"; //this就是调用的字符串
//}
//document.write("111".aaa()+"<br/>");//111aaa



//原型的缺点
//推出构造函数+原型模式
//优化构造函数+原型模式


/*
 *继承 
 */
//使用原型链实现
//function Father(){
//	this.name = "王健林";
//	this.age = 60;
//}
//Father.prototype = {
//	wanda:function(){
//		return "我的钱:"+1000000;
//	}
//}
//function Son(){
//	this.name = "王思聪";
//}
////实现继承
//var son = new Son();
////document.write(son.wanda()); //根本就没有这个方法，说明没有继承
//document.write(son instanceof Father); //false 不从属于父类，说明继承不管没有达成


///如果需要Son从Father中继承钱，需要Son与Father产生继承关系，就是父类的实例赋值给子类的原型
//function Father(){
//	this.name = "王健林";
//	this.age = 60;
//}
//Father.prototype = {
//	wanda:function(){
//		return "我的钱:"+1000000;
//	}
//}
//function Son(){
//	this.name = "王思聪";
//}
////实现继承
//Son.prototype = new Father();
//var son = new Son();
//document.write(son.wanda()+"<br/>");//继承了这个方法
//document.write(son instanceof Father); //从属于父类

//使用对象冒充实现
//function Father(){
//	this.name = "王健林";
//	this.age = 60;
//	this.wanda=function(){  //必须是内部的方法
//		return "我的钱:"+1000000;
//	}
//}
//function Son(){
//	this.name = "王思聪";
//	Father.call(this);
//}
//var son = new Son();
//document.write(son.money+"<br/>");//继承了这个方法
//document.write(son instanceof Father); //false 不从属于父类


/*
 * ES5实现继承的新方式
 */
//function Father(){
//	this.name = "王健林";
//	this.age = 60;
//}
//Father.prototype = {
//	wanda:function(){
//		return "我的钱:"+1000000;
//	}
//}
//function Son(){
//	this.name = "王思聪";
//}
////实现继承
////之前使用 Son.prototype = new Father(); 这样写的问题是，name和age属性也继承过来
//Son.prototype = Object.create(Father.prototype);
//var son = new Son();
//document.write(son.wanda()+"<br/>");
//document.write(son instanceof Father);//true


//使用apply方法实现
//function Animal(){
//	this.name = "animal";
//	this.getName= function(){
//		return this.name;
//	}
//}
//function Cat(){
//	this.name = "cat";
//}
//
//var animal = new Animal();
//var cat = new Cat();
//document.write(animal.getName.call(cat)+"<br/>");//通过call或apply方法，将原本属于Animal对象的getName()方法交给对象cat来使用了
//document.write(animal.getName.apply(cat)+"<br/>");


//对象冒充解决传参
//复合继承