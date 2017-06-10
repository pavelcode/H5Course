<template>
	<div class="tmpl">
		<ul>
			<!-- <li class="li1">			
				<mt-switch class="leftc" v-model="values[0]"></mt-switch>
				<img class="centerc" width="75" height="75" src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200046589514.jpg" alt="">
				<div class="rightc">
					<h5>标题</h5>
					<ul>
						<li class="red">￥2155</li>
						<li>
							数量选择组件
						</li>
						<li>
							<a href="#">删除</a>
						</li>
					</ul>
				</div>
			</li> -->

			<li v-for="(item,index) in list" class="li1">			
				<mt-switch class="leftc" v-model="values[index]"></mt-switch>
				<img class="centerc" width="75" height="75" :src="item.thumb_path" alt="">
				<div class="rightc">
					<h5>{{item.title}}</h5>
					<ul>
						<li class="red">￥{{item.sell_price}}</li>
						<li>
						<shopcarnumber class="carnum" :initcount="item.cou" :goodsid="item.id" v-on:sendcount="getnum"></shopcarnumber>
						</li>
						<li>
							<a @click="del(index,item.id)">删除</a>
						</li>
					</ul>

				</div>
			</li>			
		</ul>

		<div class="sett">
			<div>
				<p>总计(不含运费):</p>
				<span>已经选择商品 {{count}} 件，总价 ￥{{settement}} 元</span>
			</div>
			<mt-button class="bt" type="danger" size="normal">结算</mt-button>
		</div>
		{{values}}
	</div>
</template>
<script>
import {getIdString,getGoodsObj,removeGoods,setItem,substrictItem} from '../../kits/shopcar.js';
import common from '../../kits/common.js';

import shopcarnumber from '../subcom/shopcarnumber.vue';


	export default{
		data(){
			return {
				values:[],
				count:0, //存储的是选中商品的总数量
				/*
				{
			cou: 1,
			id: 88,
			title: "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
			sell_price: 5780,
			thumb_path: "/upload/201504/20/thumb_201504200059017695.jpg"
			},
				 */
				list:[]  
			}
		},
		computed:{
			// 负责统计选中商品的总数量和计算选中商品的总价格
			settement(){
				// 1.0 统计选中商品的总数量
				var truearr = this.values.filter(function(val){return val;});

				this.count = truearr.length;

				// 2.0 计算选中商品的总数量
				// 遍历values
				var totalAmount=0;
				this.values.forEach((item,index)=>{
					// 如果item值为true的话，就是需要统计的
					if(item){
						// 根据index索引去商品数据列表中获取商品对象
						var goodsobj = this.list[index];
						console.log(goodsobj);
						totalAmount+=(goodsobj.sell_price * goodsobj.cou);
					}
				});

				return totalAmount;
			}
		},
		methods:{
			del(index,goodsid){
				// 根据索引的值删除 this.list和this.values数组中的值即可
				this.list.splice(index,1);
				// 注意点：只要改变了values的值就会自动触发settement计算属性的执行，就会自动统计数量和总价格
				this.values.splice(index,1);

				// 删除loaclStorage中当前商品的所有对象
				removeGoods(goodsid);
			},
			// 获取shopcarnumber.vue中传入的数据
			getnum(countObj){
				if(countObj.type=="add"){
					setItem({goodsid:countObj.goodsid,count:1});
				}else{
					substrictItem(countObj.goodsid);
				}
				//countObj格式：{count:0,type:'add',goodsid:0}
				// 讲list数据中的这个商品的数量减一或者加一
				this.list.forEach(item=>{		
					if(item.id == countObj.goodsid){				
						item.cou = countObj.count;
					}
				});

				// 触发重新计算
				this.values.push(false);
				this.values.pop();
			},
			getlist(){
				// 1.0 从localStorage中获取 所有的goodsid
				var ids = getIdString();

				// 2.0 调用/api/goods/getshopcarlist/:ids获取数据
				this.$http.get(common.apiDomain +'/api/goods/getshopcarlist/'+ids ).then(res=>{
					// 获取到localStorage中的所有商品的数量对象
					var goods = getGoodsObj();//{88:1,90:29}

					res.body.message.forEach(item=>{
						item.thumb_path = common.imgDomain+item.thumb_path;

						// 将当前商品的cou属性设置为正常的购买数量
						item.cou = goods[item.id];

						// 初始化values的数据个数
						this.values.push(false);
					});

					this.list = res.body.message;
				})
			}
		},
		created(){
			this.getlist();
		},
		components:{
			shopcarnumber
		}
	}
</script>

<style scoped>

.sett{
	height: 130px;
	padding: 20px 5px;
	background-color: rgba(0,0,0,0.1);
	display: flex;
}
.sett p{
	flex:0 200px;
}
.sett span{
	flex:1;	
}
.sett .bt{
	position: absolute;;
	right: 5px;
}
.carnum.tmpl{
	margin: 0;
}
.tmpl ul{
	padding: 0px;
}
	.tmpl li{
		list-style: none;
	}

	.red{
		color:red;
		font-size:16px;
	}
	.li1{
		display: flex;
		border-bottom: 1px solid rgba(0,0,0,0.2)
	}
	.li1 .leftc{
		flex:0 52px;
	}
	.li1 .centerc{
		flex:0 75px;
	}
	.li1 .rightc{
		flex:1;
	}
	.li1 h5{
		color:#0094ff;
	}
	.rightc ul{
		margin-top: 20px;
	}
	.rightc li{
		display: inline-block;
	}
</style>