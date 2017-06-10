// 解析.vue组件页面的代码

// 1.0 导入vue这个包
import Vue from 'vue';

// 2.0 导入 App.vue文件
import App from './App.vue';

// 3.0 将App中的内容编译解析出来替换index.html中的<div id="app"></div>
new Vue({
	el:'#app',
	// render:function(create){create(App);}  es5语法
	render:create=>create(App) //es6语法
});