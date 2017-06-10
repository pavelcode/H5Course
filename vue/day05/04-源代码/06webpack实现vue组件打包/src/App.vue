<template>
	<div class="tmpl">		
		{{ msg }}
	</div>
</template>

<script>
	
	// 利用es6语法定义并且导出一个vm对象
	export default{
		// es5语法的方法定义的写法
		// data:function(){
		// 	return {
		// 		msg:'hello vue组件'
		// 	}
		// }
		// es6的方法定义的写法
		data(){
			return {
				msg:'hello vue组件'
			}
		}
	}

</script>

<style scoped>
	.tmpl{
		color: red;
	}
</style>