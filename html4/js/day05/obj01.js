//使用new关键字创建对象
/*
var obj = new Object();
document.write(obj+"<br/>"); //[object Object] 对象的字符串形式
document.write(obj.toString()+"<br/>");
document.write((typeof obj)+"<br/>");  //object 引用的数据类型
*/

//对象包含属性
/*
obj.name = "zhangsan";
obj.age = 20;
document.write(obj.name+"<br/>"); //调用对象的属性  对象的实例.属性名  arguments.length
*/

//使用字面量创建对象
/*
var stu = {
	name:"lisi",
	age:20
};
document.write(stu.name+"|"+stu.age+"<br/>");
*/


//使用混合的方式创建对象
/*
var teacher = {}; //空的对象
teacher.name ="baojiajia";
document.write(teacher.name+"<br/>");
document.write((typeof teacher)+"<br/>");
*/

//删除属性
/*
delete teacher.name;
document.write(teacher.name+"<br/>");
*/


//给对象添加方法
//使用new关键字创建对象
/*
var obj = new Object();
function add(a,b){
	return a+b;
}
obj.myAdd = add;//对象的属性是一个函数
document.write(obj.myAdd+"<br/>"); //打印是函数本身 
document.write(obj.myAdd(1,3)+"<br>");  //()代表执行
*/

//使用字面量创建对象
/*
var  stu = {
	show:function(e){
	  document.write(e+"<br/>")
	}
};
stu.show("111");
*/



//有一个白色猫，它在吃鱼，玩耍。
//使用new关键字创建对象，并给定属性和方法

/*
var cat = new Object();
cat.color = "white";
function eat(){
	return "吃鱼";
}
function play(){
	return "玩耍";
}
cat.myEat = eat;  //左边的部分：对象的实例.属性 = 函数名（函数的内容）    调用 对象的实例.函数名();
cat.myPlay = play;

document.write(cat.color+"<br/>");
document.write(cat.myEat()+"<br/>");
document.write(cat.myPlay()+"<br/>");
*/


//使用字面量的方式创建对象的属性和方法
/*
var cat ={
	color:"white",
	eat:function(){
		return "吃鱼";
	},
	play:function(){
		return "玩耍";
	}
};
document.write(cat.color+"<br/>");
document.write(cat.eat()+"<br/>");
document.write(cat.play()+"<br/>");
*/

//定义一个学生对象，这个学生有姓名，性别，年龄，它的英语成绩，数学成绩，语文成绩，求出这个学生的总成绩，平均成绩，打印学生的所有信息
/*
var stu = new Object();
stu.name="zhangsan";
stu.sex = "男";
stu.age = 20;
stu.english = 80;
stu.math = 90;
stu.chinese = 100;
function allScore(){
	return stu.english+stu.math+stu.chinese;
}
function avgScore(){
	return allScore()/3;  //函数里面调用另一个函数
}
function stuInfo(){
	return "姓名："+stu.name+";性别："+stu.sex+";年龄:"+stu.age+";英语成绩:"
	+stu.english+";数学成绩"+stu.math+";语文成绩"+stu.chinese+";总成绩："+stu.allScore()+";平均成绩："+stu.avgScore();
}
stu.allScore = allScore;
stu.avgScore = avgScore;
stu.stuInfo = stuInfo;

document.write(stu.name+"<br>");
document.write(stu.allScore()+"<br/>");
document.write(stu.avgScore()+"<br/>");
document.write(stu.stuInfo()+"<br/>");
*/

/*
var stu ={
	name:"zhangsan",
	sex:"男",
	age:20,
	english:80,
	math:90,
	chinese:100,
	allScore:function(){
		return stu.english+stu.math+stu.chinese;
	},
	avgScore:function(){
		return stu.allScore()/3; //注意
	},
	stuInfo:function(){
		return "姓名："+stu.name+";性别："+stu.sex+";年龄:"+stu.age+";英语成绩:"
	+stu.english+";数学成绩"+stu.math+";语文成绩"+stu.chinese+";总成绩："+stu.allScore()+";平均成绩："+stu.avgScore();
	}
};
document.write(stu.name+"<br>");
document.write(stu.allScore()+"<br/>");
document.write(stu.avgScore()+"<br/>");
document.write(stu.stuInfo()+"<br/>");
*/

//参数是基本数据类型，参数有10个呢？
/*
function show(name,age){
	return name+"---"+age;
}

document.write(show("zhangsan",20));
*/

//使用对象做参数进行传递
var person = {
	 name:"zhangsan",
	 age:20	
};
function show(person1){
	return person1.name+"--"+person1.age;
}
document.write(show(person));


//使用匿名对象进行传递 TODO匿名对象还没讲
//alert(show({
//	name:"zhangsan",
//	age:20,
//	sex:"man"
//}));