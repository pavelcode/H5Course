<template>
	<div class="tmpl">
		<ul class="mui-table-view">
			<!-- 静态结构 <li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../../statics/imgs/menu4.png">
					<div class="mui-media-body">
						幸福
						<p class='mui-ellipsis'>
							发布时间：2017-1-1
							<span>点击:1</span>
						</p>
					</div>
				</a>
			</li> -->
			<li v-for="item in newslist" class="mui-table-view-cell mui-media">
				<router-link v-bind="{to:'/news/newsshow/'+item.id}">
				<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>
							发表时间：{{item.add_time | datefmt}}
							<span>点击:{{item.click}}</span>
						</p>
					</div>
				</router-link>
			</li>
			
			</ul>

	</div>
</template>

<script>
// 导入common.js这个模块
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';

	export default{
		methods:{
			// 1.0 获取新闻数据列表
			getnewslist(){
				var url = common.apiDomain+'/api/getnewslist'
				this.$http.get(url).then(res=>{
					if(res.body.status !==0){
						Toast(res.body.message);
						return ;
					}

					// 正常逻辑处理
					this.newslist = res.body.message;
				});
			}
		},
		created(){
			this.getnewslist();
		},
		data(){
			return {
				newslist:[
					{
						id: 13,
						title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
						add_time: "2015-04-16T03:50:28.000Z",
						zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
						click: 1,
						img_url: "http://ofv795nmp.bkt.clouddn.com//upload/201504/16/201504161149414479.jpg"
						},
						{
						id: 14,
						title: "买房还是炒股，2015年买房无法拒绝的5大理由",
						add_time: "2015-04-16T04:05:34.000Z",
						zhaiyao: "转眼间2015年已经过去了4个月，在这短短的四个月",
						click: 2,
						img_url: "http://ofv795nmp.bkt.clouddn.com//upload/201504/16/201504161205596364.jpg"
						}
				]
			}
		}
	}
</script>

<style class="scoped">
	/*在这里面可以写css和less,sass都可以接
	但是注意的是：
	如果编写less,sass一定要确认webpack框架是否支持编译
	*/

.mui-ellipsis{
	color:#0094ff;
	margin-top: 5px;
}

.mui-ellipsis span{
	position: absolute;
	right:10px;
}

</style>