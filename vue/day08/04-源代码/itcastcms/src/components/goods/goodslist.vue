<template>
	<div class="tmpl">
		<!-- 1.0 商品列表图片布局 -->
		<ul class="mui-table-view mui-grid-view">
	       <!--  <li class="mui-table-view-cell mui-media mui-col-xs-6">
	            <a class="a" href="#">
                <img class="mui-media-object" src="../../../statics/imgs/thumb_201504200154277661.jpg">
                 <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div>
                </a>

			<div class="desc">
				<h5><span class="sellprice">￥2099</span>
				   <s>￥1099 </s>
				  </h5>
				<div class="left">热卖中</div>
				<div class="right">剩60件</div>
			</div>
	        </li> -->

	        <li v-for="item in list" class="mui-table-view-cell mui-media mui-col-xs-6">
	            <router-link v-bind="{to:'/goods/goodsshow/'+item.id}">
	                <img class="mui-media-object" :src="item.img_url">
	                <div class="mui-media-body" v-text="item.title"></div>
	            </router-link>
			<div class="desc">
				<h5><span class="sellprice">￥{{item.sell_price}}</span>
				   <s>￥{{item.market_price}} </s>
				  </h5>
				<div class="left">热卖中</div>
				<div class="right">剩{{item.stock_quantity}}件</div>
			</div>
	        </li>
	    </ul> 
	</div>


</template>

<script>
import common from '../../kits/common.js'
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getlist(){
				this.$http.get(common.apiDomain+'/api/getgoods?pageindex=1').then(res=>{
					this.list = res.body.message;

					console.log(res.body.message[0].img_url);
				});
			}
		},
		created(){
			this.getlist();
		}
	}
</script>

<style scoped>
	.mui-table-view.mui-grid-view .mui-table-view-cell{
		border:1px solid rgba(0,0,0,0.3);
		padding:0 0 0 0;
		box-shadow:0 0 3px #666;
	}
	.mui-table-view.mui-grid-view{
		padding:5px;
	}
	
	.a{
		padding: 5px;
	}
	.desc{
		background-color: rgba(0,0,0,0.1);
		height: 60px;
		width: 100%;
		margin: 0px;
		padding: 0px;
	}

	.desc h5{
		text-align: left;
		padding: 5px;
	}
	.desc s{
		padding-left: 15px;
	}
	.sellprice{
		color: red;
		font-size: 14px;
		font-weight: bold;
	}

	.left {
		width: 50%;
		float: left;
		text-align: left;
		padding-left: 10px;
	}
	.right {
		width:50%;
		float: right;
		text-align: right;
		padding-right: 10px;
	}

	.left,.right{
		margin-top: 15px;
		font-size: 12px;
	}

	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
		font-size:12px;
	}
	.mui-table-view.mui-grid-view .mui-table-view-cell{
		margin-right: 5px;
	}

	.mui-col-xs-6{
		width: 48%;
	}



	
</style>