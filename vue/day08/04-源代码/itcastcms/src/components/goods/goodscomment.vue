<template>
  <div class="tmpl">
  	<comment :artid="goodsid"></comment>
  </div>	
</template>

<script>
	import comment from '../subcom/comment.vue'
	export default{
		data(){
			return {
				goodsid:0
			}
		},
		created(){
			this.goodsid = this.$route.params.goodsid;
		},
		components:{
			comment
		}
	}
</script>

<style>
	
</style>