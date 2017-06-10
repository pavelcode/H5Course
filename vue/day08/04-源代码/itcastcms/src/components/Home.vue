<template>
	<div class="tmpl">
		<!-- 1.0 轮播使用的mint-ui中的swipe组件 -->
		<silder :swipeList="swipeList"></silder>
		<!-- <mt-swipe :auto="2000">
		  <mt-swipe-item v-for="item in swipeList">
		  <a :href="item.url">
		  	<img :src="item.img" alt="">
		  </a>
		  </mt-swipe-item>	 
		</mt-swipe> -->
		<!-- 2.0 9宫格导航区域 使用的mui中的9宫格样式 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home">
		                    	
		                    </span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link to="/photo/imagelist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		             <router-link to="/goods/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
		</div>
	</div>
</template>

<script>
// 导入轮播组件
import silder from './subcom/silder.vue'
import common from '../kits/common.js'

export default{
	data(){
		return {
			swipeList:[]
		}
	},
	components:{silder},
	methods:{
		// 1.0 获取轮播图数据
		getimglist(){
			this.$http.get(common.apiDomain+ '/api/getlunbo')
			.then(res=>{
				// 将数据赋值给swipeList属性，自动导致v-for重新执行
				this.swipeList = res.body.message;
			});
		}
	},
	created(){
		//当进入Home.vue组件的时候请求数据
		this.getimglist();
	}
}
	
</script>

<style scoped>
	

	.mui-content ul{
		background-color: #fff;
	}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border-right:0;
	border-bottom:0;
}
.mui-icon-home,
.mui-icon-email,
.mui-icon-chatbubble,
.mui-icon-location,
.mui-icon-search,
.mui-icon-phone{
	
	width: 50px;
	height: 50px;
	background-repeat: round;

}

.mui-icon-home{
	background-image: url(../../statics/imgs/menu3.png);
}
.mui-icon-email{
background-image: url(../../statics/imgs/menu4.png);
}
.mui-icon-chatbubble{
background-image: url(../../statics/imgs/menu5.png);
}

.mui-icon-location{
background-image: url(../../statics/imgs/menu6.png);
}
.mui-icon-search{
background-image: url(../../statics/imgs/menu9.png);
}
.mui-icon-phone{
background-image: url(../../statics/imgs/menu10.png);
}

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
	content: ''
}
</style>