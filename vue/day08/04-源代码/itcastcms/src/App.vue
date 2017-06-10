<template>
	<div class="tmpl">		
		<!-- 1.0 头部 -->
		<mt-header fixed title="传智播客.黑马程序员-前端"></mt-header>
		<!-- 1.0.1 在头部增加一个返回按钮 -->
		<div v-show="isshow" class="goback">
			<a @click="goback">返回</a>
		</div>
		<!-- 2.0 路由占位 -->
		<router-view></router-view>

		<!-- 3.0 底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email">
				
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
					<span ref="badge" id="badge" class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	var count = 0;
	import {vm,KEY} from './kits/sendparams.js';
	import {getTotalCount} from './kits/shopcar.js';

	vm.$on(KEY,function(input){
		// 将input数据叠加到count 
		count+=input;

		// 将count设置到span中
		document.getElementById('badge').innerText=count;
	});

	// 利用es6语法定义并且导出一个vm对象
	export default{		
		data(){
			return {
				isshow:false
			}
		},
		watch:{
			'$route':function(newRouter,oldRouter){
				// console.log(newRouter,oldRouter);
				// 判断 newRouter.path =='/Home' 就要将isshow设置为false
				// 否则将isshow设置为true
				if(newRouter.path.toLowerCase() =='/home'){
					this.isshow = false;
				}
				else{
					this.isshow = true;
				}
			}
		},
		methods:{
			// 实现上一页导航功能
			goback(){
				this.$router.go(-1);
			}
		},
		mounted(){
			// 当Ap.vue加载完毕以后从localStorage中获取数据
			var count = getTotalCount();
			this.$refs.badge.innerText=count;
		}
	}

</script>

<style scoped>
	.goback{
		position: absolute;
		top:10px;
		left:5px;
		z-index: 101;
	}

	.goback a{
		color:#fff;
		font-size: 16px;
		font-weight: bold;
	}
</style>