<template>
	<div class="tmpl">		
		<div class="left" @click="substrict">-</div>
		<div class="center">{{countObj.count}}</div>
		<div class="right"  @click="add">+</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				countObj:{count:0,type:'add',goodsid:0}
			}
		},
		props:['initcount','goodsid'],
		created(){
			this.countObj.count = this.initcount;
			this.countObj.goodsid = this.goodsid;
		},
		methods:{
			// 1.0 自减1
			substrict(){
				if(this.countObj.count>1){
					this.countObj.count--;
				}else{
					this.countObj.count = 1;
				}

				// 修改type类型
				this.countObj.type='substrict';

				this.emit();
			},
			// 2.0 自增1
			add(){
				this.countObj.count ++;
				this.countObj.type='add';

				this.emit();
			},
			emit(){
				this.$emit('sendcount',this.countObj);
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