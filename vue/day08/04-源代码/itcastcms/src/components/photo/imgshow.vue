<template>	
	<div class="tmpl">
		<!-- 1.0 实现标题 -->
		<div class="twarp">
			<h2 v-text="imgInfo.title"></h2>
			<span class="desc">
				{{imgInfo.add_time  | datefmt}}  
				{{imgInfo.click}}次浏览
				 分类:民生
			</span>
		</div>

		<!-- 2.0 9宫格缩略图 -->
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li v-for="(thumimg,index) in thums" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <a>
	               	<img class="preview-img" :src="thumimg.src" height="100" @click="$preview.open(index, thums)">
	               </a>
               </li>
	            
	        </ul> 
		</div>

		<!-- 3.0 图片详情 -->
		<div class="content" v-html="imgInfo.content"></div>

		<!-- 4.0 评论组件 -->
		<comment :artid="imgid"></comment>
	</div>
</template>
<script>
import common from '../../kits/common.js'
import comment from '../subcom/comment.vue'
	export default{
		components:{comment},
		data(){
			return {
				imgInfo:{},
				imgid:0,
				thums:[]
			}
		},
		methods:{
			getimgInfo(){
				var url = common.apiDomain+'/api/getimageInfo/'+this.imgid;

				this.$http.get(url).then(res=>{
					this.imgInfo = res.body.message[0];
				});
			},
			getthums(){
				var url = common.apiDomain+'/api/getthumimages/'+this.imgid;
				// http://ofv795nmp.bkt.clouddn.com//upload/201504/18/thumb_201504181230437111.jpg
				
				this.$http.get(url).then(res=>{
					// 注意点：由于服务器返回的src属性中的值是一个图片的路径，所以要添加上图片的域名
					 res.body.message.forEach(item=>{
					 	item.src = common.imgDomain + item.src;
					 	item.w=300;
					 	item.h=300;
					 });

					this.thums = res.body.message;
				});
			}
		},
		created(){
			this.imgid = this.$route.params.imgid;

			this.getimgInfo();
			this.getthums();
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
	.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
	content: ''
}

.mui-content ul{
		background-color: #fff;
	}

	.preview-img{
		height: 100px;
		width: 100px;
	}
</style>