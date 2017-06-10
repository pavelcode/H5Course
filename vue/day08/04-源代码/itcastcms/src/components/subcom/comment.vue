<!-- 评论组件 -->
<template>
	<div class="tmpl">
		<div class="title">
			<h2>提交评论</h2>
		</div>

		<div class="postcomment">
			<textarea ref="commentContent" placeholder="请输入要评论的内容.."></textarea>
			<mt-button type="danger" size="large" @click="sendMessage">发表</mt-button>
		</div>

		<div class="list">
			<h2>评论列表</h2>
			<ul>
				<li v-for="item in comments" >
					{{item.content}}
				</li>
			</ul>
			<mt-button type="danger" size="large" @click="getMore">加载更多....</mt-button>
		</div>

	</div>
</template>

<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';

export default{
	data(){
		return {
			comments:[],
			pageindex :1 //分页的页码控制变量
		}
	},
	props:['artid'],
	methods:{
		// 1.0 提交评论
		sendMessage(){
			// 1.0 获取提交内容
			var txt = this.$refs.commentContent.value;

			// 2.0 发出ajax的post请求
			var url = common.apiDomain+'/api/postcomment/'+this.artid;
			this.$http.post(url,{content:txt},{emulateJSON:true})
			.then(res=>{
				Toast(res.body.message);

				// 清楚文本框内容
				this.$refs.commentContent.value = '';
			});

			this.comments =[];
			// 3.0 刷新当前artid对应的评论列表数据
			this.getMessage(1);
		},
		// 2.0 获取评论
		getMessage(pageindex){
			var url = common.apiDomain+'/api/getcomments/'+this.artid+'?pageindex='+pageindex;

			this.$http.get(url).then(res=>{
				if(res.body.status !==0){
					Toast(res.body.message);
					return;
				}

				this.comments = this.comments.concat(res.body.message);
			});
		},
		// 3.0 加载更多
		getMore(){
			// 1.0 每点击一个加载跟多按钮就将this.pageindex 自增1
			this.pageindex ++;
			// 2.0 获取新的页码中的数据
			this.getMessage(this.pageindex);
		}
	},
	created(){
		this.getMessage(this.pageindex);
	}
}
	
</script>

<style scoped>
	.title{
		border-bottom: 1px solid rgba(0,0,0,0.4);
	}

	.postcomment{
		margin-top: 5px;
		padding: 5px;
	}

</style>