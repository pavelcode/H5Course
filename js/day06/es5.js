/*
 * 所谓的严格模式，就是在这个模式下，游览器对js的语句的要求更严格。
 */
//function fn(){
//	max = 100;
//}
//fn();
//alert(max);
//定义max的时候，没有使用var，就会默认为全局变量。

//但是在严格模式下，这种语句就是错误的。
//function fn(){
//	"use strict";
//	max = 100;
//}
//fn();
//alert(max);
//报错：ReferenceError: max is not defined

//注意：不要轻易的在全局范围内，添加严格模式，尽量在局部作用域中使用



 

