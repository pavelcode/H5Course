// // es5语法实现加法功能
function add(x,y){
	return x + y;
}

// // 将add方法暴露出去
// module.exports = add;
// exports.add = add;

// es6语法
export default{
	add   //等价于 add:add 
}

// export function add(x,y){
// 	return x + y;
// }