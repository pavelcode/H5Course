<template>
	<div class="tmpl">
		<!-- 1.0 图片的分类 -->
		<div class="cate">
			<ul ref="cateul">
				<li><a href="#">全部</a></li>				
				<li v-for="item in cates"><a @click="getimagelist(item.id)">{{item.title}}</a></li>
			</ul>
		</div>

		<!-- 2.0 图片的列表 使用mint-ui中的延迟加载组件 -->
		<ul class="imgul">
		    <li v-for="item in imagelist">
		        <router-link v-bind="{to:'/photo/imageshow/'+item.id}">
		            <img class="lazyimg" v-lazy ="item.img_url">
		            <div class="desc">
		            	<h5>{{item.title}}</h5>
		            	<p>
		            		{{item.zhaiyao}}
		            	</p>
		            </div>
		        </router-link>
		    </li>
		</ul>
	</div>
</template>

<script>
	import common from '../../kits/common.js'
	export default{
		data(){
			return {
				cates:[], // 存储分类数据
				imagelist:[] 
			}
		},
		methods:{
			// 1.0 获取分类数据
			getcates(){
				this.$http.get(common.apiDomain+'/api/getimgcategory')
				.then(res=>{
					// 状态判断
					this.cates = res.body.message;

					// 获取分类数据的个数计算出ul的总宽度
					var count = res.body.message.length + 1;
					var width = 78 * count;
					
					// 在ul上设置宽度
					this.$refs.cateul.style.width=width+"px";
				});
			},
			// 2.0 获取图片数据
			getimagelist(cateid){
				// 为了解决第一章图片永远不会改变的bug
				this.imagelist = [];
				// 1.0 利用ajax请求图片数据
				var url = common.apiDomain+'/api/getimages/'+cateid;
				this.$http.get(url).then(res=>{
					// 2.0 将res.body.message中的 img_url属性的值添加上图片域名的前缀
					res.body.message.forEach(item=>{
						item.img_url  = common.imgDomain+item.img_url;
					});

					this.imagelist = res.body.message;
				});
			}
		},
		created(){
			this.getcates();
			this.getimagelist(0);
		}
	}
</script>

<style scoped>
	.cate{
		max-width: 400px;
		overflow-x:auto; 
		overflow-y:hidden; 
	}
	.cate li{
		list-style: none;
		display: inline-block;
		padding-left: 10px;
	}
	.cate ul{
		width: 800px;
		padding-left: 5px;
	}
	.imgul{
		padding: 0 2px;
	}

	.imgul li{
		list-style: none;
		position: relative;
	}

	.lazyimg{
		width: 100%;
	}

	image[lazy=loading] {
	  width: 100%;
	  height: 300px;
	  margin: auto;
	}

	.desc{
		position: absolute;
		left: 0px;
		bottom:0px;
		background-color: rgba(0,0,0,0.4);
	}

	.desc h5,.desc p{
		color:#fff;
	}
</style>