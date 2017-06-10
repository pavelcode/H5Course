// webpack的入口文件
// 在此处main.js实现的是获取到dom对象，实现一个加法功能
// es5语法
// var add = require('./calc.js');
// es6语法
  import addObj from './calc.js'

// 导入site.css 以后webpack才能将site.css打包
require('../statics/css/site.css');

require('../statics/css/site1.scss');

require('../statics/css/site2.less');

require('../statics/mui/css/icons-extra.css');

// console.log(add(2,3));
// 获取到页面上面所有dom对象
var v1obj = document.getElementById('v1');
var v2obj = document.getElementById('v2');
var btobj = document.getElementById('bt');
var resobj = document.getElementById('res');

btobj.onclick = function(){
	// 实现一个加法功能
	var v1Val = (v1obj.value - 0);
	var v2Val = (v2obj.value - 0);

	resobj.value = addObj.add(v1Val,v2Val);
}