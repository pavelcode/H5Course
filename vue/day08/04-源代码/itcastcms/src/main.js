// 解析.vue组件页面的代码

// 1.0 导入vue这个包
import Vue from 'vue';

// 2.0 导入 App.vue文件
import App from './App.vue';

// 3.0 vue-router相关的代码
// 3.0.1 导入vue-router这个包
import VueRouter from 'vue-router';  //相当于 <script src="vue-router.js">

// 3.0.2 在Vue对象中通过use()方法来使用vue-router对象
Vue.use(VueRouter);

// 3.0.3 定义路由对象并且初始化路由规则
// 3.0.3.1 导入需要注册的组件
import home from './components/Home.vue';
import newslist from './components/news/newslist.vue'
import newsshow from './components/news/newsshow.vue'
import imagelist from './components/photo/imagelist.vue'
import imgshow from './components/photo/imgshow.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsshow from './components/goods/goodsshow.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'
import shopcar from './components/shopcar/shopcar.vue'

var vueRouterObj = new VueRouter({
	linkActiveClass :'mui-active', //将激活的路由添加一个mui-active类名称
	routes:[
		{path:'/',redirect:'/Home'},
		{path:'/Home',component:home},
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsshow/:newsid',component:newsshow},
		{path:'/photo/imagelist',component:imagelist},
		{path:'/photo/imageshow/:imgid',component:imgshow},
		{path:'/goods/goodslist',component:goodslist},
		{path:'/goods/goodsshow/:goodsid',component:goodsshow},
		{name:'goodsdesc',path:'/goods/goodsdesc/:goodsid',component:goodsdesc},
		{name:'goodscomment',path:'/goods/goodscomment/:goodsid',component:goodscomment},
		{path:'/shopcar',component:shopcar}						
	]
});


// 4.0 mint-ui的使用
// 4.0.1 导入mint-ui的样式
import 'mint-ui/lib/style.min.css'
// 4.0.2 导入mint-ui的组件包
import mintUI  from 'mint-ui'
// 4.0.3 将mintUI对象在Vue中通过use()进行绑定
Vue.use(mintUI);

// 5.0 导入mui的css
import '../statics/mui/css/mui.css'
import '../statics/mui/css/icons-extra.css'


// 6.0 使用vue-resource
// 6.0.1 导入vue-resource
import vueResource  from 'vue-resource'
// 6.0.2 使用
Vue.use(vueResource);

// 7.0 注册一个日期格式化的全局过滤器
// 日期格式化是借助于 moment.js 来实现的
import moment from 'moment';

Vue.filter('datefmt',function(input,fmtStr){
	fmtStr = fmtStr?fmtStr:'YYYY-MM-DD';
	// YYYY-MM-DD 
	return moment(input).format(fmtStr);
});

// 8.0 注册vue-preview组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

import '../statics/css/site.css'
// 最后： 将App中的内容编译解析出来替换index.html中的<div id="app"></div>
new Vue({
	el:'#app',
	router:vueRouterObj,  //使用路由规则对象
	// render:function(create){create(App);}  es5语法
	render:create=>create(App) //es6语法
});