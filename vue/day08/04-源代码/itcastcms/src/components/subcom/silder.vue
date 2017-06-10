<template>
	<div class="tmpl">
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="item in swipeList">
		  <a :href="item.url">
		  	<img class="img" :src="item.img" alt="">
		  </a>
		  </mt-swipe-item>	 
		</mt-swipe>
	</div>
</template>

<script>
import common from '../../kits/common.js'

	export default{
		data(){
			return {
				
			}
		},
		props:['swipeList']
	}
</script>

<style scoped>
	.mint-swipe{
		height: 300px;
	}

	.mint-swipe img{
		width: 100%;
		height: 300px;
	}

	.mint-swipe-item{
		
		color:white;
	}

</style>