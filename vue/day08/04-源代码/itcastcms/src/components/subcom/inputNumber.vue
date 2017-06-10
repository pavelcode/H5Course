<template>
	<div class="tmpl">		
		<div class="left" @click="substrict">-</div>
		<div class="center">{{count}}</div>
		<div class="right"  @click="add">+</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				count:1
			}
		},
		methods:{
			// 1.0 自减1
			substrict(){
				if(this.count>1){
					this.count--;
				}else{
					this.count = 1;
				}

				this.emit();
			},
			// 2.0 自增1
			add(){
				this.count ++;
				this.emit();
			},
			emit(){
				this.$emit('sendcount',this.count);
			}
		}
	}
</script>

<style scoped>
	.left,.center,.right{
		width: 30px;
		height: 30px;
		border:1px solid rgba(0,0,0,0.2);
		text-align: center;
		line-height: 30px;
	}

	.tmpl{
		width: 100px;
		display: flex;
	}

	.left{
		flex:0 30px;
	}
	.center{
		flex:0 40px;
	}
	.right{
		flex:1;
	}



</style>