/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// webpack的入口文件
	// 在此处main.js实现的是获取到dom对象，实现一个加法功能

	var add = __webpack_require__(1);

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

		resobj.value = add(v1Val,v2Val);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// 实现加法功能
	function add(x,y){
		return x + y;
	}

	// 将add方法暴露出去
	module.exports = add;

/***/ }
/******/ ]);