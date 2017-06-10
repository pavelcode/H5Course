<template>
	<div class="tmpl">
		<!-- 1.0 标题 -->
		<div class="twarp">
			<h2 v-text="info.title"></h2>
			<span class="desc">
				{{info.add_time  | datefmt}}  
				{{info.click}}次浏览
				 分类:民生
			</span>
		</div>

		<!-- 2.0 新闻详细展示区域 -->
		<div class="content" v-html="info.content"></div>

		<!-- 3.0 评论组件 -->
		<comment :artid="newsid"></comment>
	</div>
</template>

<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';

// 1.0 导入评论组件对象
import comment from '../subcom/comment.vue';
	export default{
		data(){
			return {
				info:{},
				newsid:0
			}
		},
		methods:{
			getinfo(){
				// 1.0 获取url传入的newsid
				var newsid  = this.$route.params.newsid;

				this.$http.get(common.apiDomain+'/api/getnew/'+newsid)
				.then(res=>{
					if(res.body.status !==0){
						Toast(res.body.message);
						return;
					}

					this.info = res.body.message[0];
				});
			}
		},
		created(){
			// 初始化newsid
			this.newsid = this.$route.params.newsid;
			this.getinfo();
		},
		components:{
			comment // comment:comment
		}
	}
</script>

<style scoped>
	.twarp h2{
		color:#0094ff;
		font-size:16px;
	}

	.twarp .desc{
		color:rgba(0,0,0,0.4);
		
	}

	.twarp{
		padding:10px;
		border-bottom: 1px solid rgba(0,0,0,0.4); 
	}
	.content{
		padding:5px;
	}
</style>