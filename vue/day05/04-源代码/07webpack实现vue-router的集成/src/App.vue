<template>
	<div class="tmpl">		
		{{ msg }}

		<router-link to="/login">登录</router-link>
		<router-link to="/register">注册</router-link>

		<!-- 组件占位 -->
		<router-view></router-view>

		<hr />
		1.0 mint-ui中的button组件使用<br />
		<mt-button type="danger" size="large" plain @click="tip">点击</mt-button>

		<mt-button type="primary" size="large" @click="tip1">点击</mt-button>

		<hr>
		2.0 轮播组件<br />
		<mt-swipe :auto="1000">
		  <mt-swipe-item>
		  	<img src="../statics/imgs/home.png" alt="">
		  </mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>

		<hr>
	3.0 实现mui中的9宫格样式<br />
	<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>

	</div>
</template>

<script>
	// 将MessageBox导入
	import { MessageBox,Toast } from 'mint-ui';

	// 利用es6语法定义并且导出一个vm对象
	export default{
		// es5语法的方法定义的写法
		// data:function(){
		// 	return {
		// 		msg:'hello vue组件'
		// 	}
		// }
		// es6的方法定义的写法
		data(){
			return {
				msg:'hello vue组件'
			}
		},
		methods:{
			tip(){
				// alert('提示语');
				// 使用mint-ui中的MessageBox组件
				MessageBox('提示', '操作成功');
			},
			tip1(){
				Toast({
				  message: '提示',
				  position: 'bottom',
				  duration: 1000
				});
			}
		}
	}

</script>

<style scoped>
	.tmpl{
		color: red;
	}

	.mint-swipe{
		height: 300px;
		width: 350px;
	}

	.mint-swipe-item{
		background-color: red;
		color:white;
	}
</style>