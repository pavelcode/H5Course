/*
 匿名函数
 */

//普通函数
//function show(){
//document.write("aaa");
//}
//show();

//匿名函数 会报错
//function(){
// document.write("aaa");
//}

/*
 *运行匿名函数的方式1
 */
//匿名函数赋值给变量，来运行匿名函数
//var show = function(){
//  document.write("bbb"+"<br/>");
//};
//document.write(show);
//show();

//把匿名函数的返回值，赋值给变量
//var show1 = function(){
//	return "ddd"+"<br/>";
//}();
//document.write(show1);

/*
 *运行匿名函数的方式2
 */
//通过自我执行，运行匿名函数
//(function(){
//document.write("ccc"+"<br/>");
//})();

//表达式运行匿名函数传参
//(function(age){
// document.write("age="+age);
//})(20);