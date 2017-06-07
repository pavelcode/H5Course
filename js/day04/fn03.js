/**
 * 递归函数
 */
//递归函数：当一个函数调用该函数自身的时候，这个函数称为递归函数
//递归函数都是死循环
/*
	100! == 100 * 99 * 98 *97
	100! == 100 * 99!
	99! == 99 * 98!
	f(x) == x * f(x-1);
*/
function f(x) {
	if(x==1) {
		return 1; 
	}
	return x * f(x-1);
	//return x * arguments.callee(x-1); //调用本身函数
}
			
var res = f(5);  // 5 *f(4)   5*4*f(3)
document.write(res+"<br/>");
			
//斐波那契数列
// 1  1  2  3   5   8   13   21   34   55  89  144   ......... N
//f(x) = f(x-1) + f(x-2);
			
//function f(x) {
// if(x<=2) {
//	 return 1;
//	}
//   return f(x-1) + f(x-2);
//}
//document.write(f(10));