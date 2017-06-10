<template>
	<div class="tmpl">
		<!-- 1.0 轮播 -->	
		<silder class="silder" :swipeList="swipeList"></silder>

		<!-- 2.0 购买操作区域 -->
		<div class="opt">
			<h4>{{info.title}}</h4>
			<p>市场价：<s>￥{{info.market_price}} </s> 
			销售价：<span class="sellprice">￥{{info.sell_price}}</span></p>
			
			<div class="num">
				<div class="numleft">购买数量:</div>
				<inputnumber class="inputnumber" v-on:sendcount="getcount"></inputnumber>

				<!-- 定义动画的小球 -->
				<transition
				 	@before-enter="beforeEnter"
				 	@enter="enter"
				 	@after-enter="afterEnter"
				>
					<div v-show="isshow" class="ball"></div>
				</transition>
			</div>
			<div>
				<mt-button type="danger" >立即购买</mt-button>
				<mt-button type="danger" @click="addShopCar">加入购物车</mt-button>
			</div>
		</div>

		<!-- 3.0 商品参数区域 -->
		<div class="params">
			<h6>商品参数</h6>
			<ul>
				<li>商品货号:{{info.goods_no}}</li>
				<li>库存情况：{{info.stock_quantity}}</li>
				<li>上架时间：{{info.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</li>
			</ul>
		</div>

		<!-- 4.0 图文介绍和商品评论 -->
		<mt-button @click="todesc" type="danger" size="large" plain>图文介绍</mt-button>

		<mt-button @click="tocomment" type="danger" size="large" plain>商品评论</mt-button>

	</div>
</template>

<script>
// 1.0 导入轮播组件
import silder from '../subcom/silder.vue';
import common from '../../kits/common.js';
import inputnumber from '../subcom/inputnumber.vue';
// 导入vm对象
import {vm,KEY} from '../../kits/sendparams.js'

// 2.0 导入localStorage的帮助js文件
import {setItem} from '../../kits/shopcar.js';

	export default{
		data(){
			return {
				isshow:false, //小球默认是隐藏的
				goodsid:0,
				count:1, //接收inputNumber.vue组件传入的值
				swipeList:[],
				info:{}
			}
		},
		methods:{
			// 导航到评论组件
			tocomment(){
				this.$router.push({name:'goodscomment',params:{goodsid:this.goodsid}});
			},
			// 导航到图文介绍组件
			todesc(){
				// 如何利用js代码进行路由跳转
				this.$router.push({ name: 'goodsdesc', params: { goodsid: this.goodsid }});
			},
			// 实现根据商品id获取商品的详细参数数据
			getinfo(){
				var url = common.apiDomain +'/api/goods/getinfo/'+this.goodsid;

				this.$http.get(url).then(res=>{
					this.info = res.body.message[0];
				});
			},
			// 0.0 定义动画的三个钩子函数
			beforeEnter(el){
				// 定义小球的初始位置
				el.style.transform = "translate(0,0)"; 
			},
			enter(el,done){
				// 定义小球的结束位置
				el.offsetHeight;

				this.$nextTick(function(){
					el.style.transform = "translate(190px,300px)";
				});

				done();		

			},
			afterEnter(el){
				this.isshow = !this.isshow;
			},
			// 1.0 获取轮播组件需要的图片
			getswipelist(){
				var url = common.apiDomain+'/api/getthumimages/'+this.goodsid;

				this.$http.get(url).then(res=>{
					res.body.message.forEach(item=>{
						item.img =common.imgDomain +item.src;
						item.url=""
					});

					this.swipeList = res.body.message;
				});
			},
			// 2.0 获取inputNumber组件发送过来的count值
			getcount(count){
				this.count = count;
			},
			// 3.0 加入购物车方法
			addShopCar(){
				// 1.0 获取商品id和选择的数量
				var  goodsid = this.goodsid;
				var selectedCount = this.count;

				// 2.0 将数据包装成要求的格式{goodsid:goodsid,count:selectedCount} 存储到localStorage中
				setItem({goodsid:goodsid,count:selectedCount});

				// 3.0 讲当前数据的数量发送给所有的注册者
				vm.$emit(KEY,selectedCount);

				// 4.0 显示小球
				this.isshow =!this.isshow;
			}
		},
		created(){
			this.goodsid = this.$route.params.goodsid;
			
			// 调用数据获取工作
			this.getswipelist();

			this.getinfo();
		},
		components:{silder,inputnumber}
	}
</script>

<style scoped>

.ball{
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: red;
	position: absolute;
	left:130px;
	z-index: 100;
	transition:all 0.4s ease;
}

	.silder{
		border:1px solid rgba(0,0,0,0.4);
		margin-bottom: 10px;
	}

	.opt{
		border:1px solid rgba(0,0,0,0.4);
		margin-top: 20px;
		border-radius: 15px;
		padding: 5px;
	}

.opt h4{
	color: #0094ff;
	padding:15px 0 10px 10px;
	border-bottom: 1px solid rgba(0,0,0,0.4);
}

.opt .sellprice{
	color: red;
	font-size: 22px;
	font-weight:bold;
}

.num{
	display: flex;
	margin-bottom: 10px;
}

 .numleft{
 	flex:0 80px;
}

.inputnumber{
	flex:0 100px;
}

.tmpl{
	margin-top:0px;
	margin-bottom: 0px; 
}
</style>