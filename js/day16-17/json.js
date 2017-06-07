/**
 * JSON表示对象
 */
//js的对象
//var stu = {
//	name:"zhangsan",
//	age:20
//};
//JSON格式表示对象
//'{"name":"zhangsan","age",20}'
//总结：JSON格式的对象比js的对象,属性名加上双引号

/**
 * JSON表示数组
 */
//js的数组定义
//var arr = ["zhang",20];
//JOSN格式表示数组
//'["zhang",20]'
//总结：JSON格式的数组比js的数组少了变量定义，少了分号


//复杂的JSON格式
//var stus = '[{"name":"zhang","age":20},{"name":"lisi","age":30}]';


/**
 * 解析JSON，转化成js对象
 * 
 */
//方式1
//var json = eval("("+'{"name":"zhangsan","age",20}'+")"); //这种方式是错误的


//var stus = '[{"name":"zhang","age":20},{"name":"lisi","age":30}]';
//var json = eval(stus);
//document.write(json+"<br/>");//[object Object],[object Object]
//document.write(json[1].name+"<br/>");//lisi
//总结：这种方式使用的比较早，我们都是eval能执行字符串的js代码，不安全

//方式2 全局的JSON对象，parse()把JSON字符串转化为js对象，stringify()把js对象转化为JSON字符串
//IE8以下不支持JSON对象，我们使用加载json2.js文件来显示JSON对象
//var stus = '[{"name":"zhang","age":20},{"name":"lisi","age":30}]';
//var jsonObj = JSON.parse(stus);
//document.write(jsonObj[1].name+"<br/>");

//设置一个操作方法
//var stu = '{"name":"zhang","age":20}';
//var jsonObj2 = JSON.parse(stu,function(key,val){
//	if((typeof val)=="number"){
//		return val+10;
//	}
//	return val;  //最后一定要值返回出来
//});
//document.write(jsonObj2.age+"<br/>");

//把js对象转化为json字符串
//var stus = [
//{
//	name:"zhangsan",
//	age:20
//},
//{
//	name:"lisi",
//	age:30
//}
//];

//var jsonStr = JSON.stringify(stus);
//document.write(jsonStr+"<br/>");
//document.write(typeof jsonStr);//string

//第二个参数，只获得部分的值
//var jsonStr1 = JSON.stringify(stus,["name"]);
//document.write(jsonStr1+"<br/>");









