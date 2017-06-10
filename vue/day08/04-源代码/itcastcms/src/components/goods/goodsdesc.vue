<template>
	<div class="tmpl">
		<h4>{{desc.title}}</h4>
		<div v-html="desc.content"></div>

	</div>

</template>

<script>
import common from '../../kits/common.js'
	export default{
		data(){
			return {
				desc:{}
			}
		},
		created(){
			// 根据商品id获取到图文信息
			var url = common.apiDomain+'/api/goods/getdesc/'+this.$route.params.goodsid;

			this.$http.get(url).then(res=>{
				this.desc = res.body.message[0];
			});
		}
	}
</script>

<style scoped>
	
</style>