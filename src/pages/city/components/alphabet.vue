<template>
	<ul class="list">
		<!--点击事件和触摸事件绑定-->
		<li class="item" v-for="item in letters" :key="item" :ref="item"
			@click="handleLetterCilck" 
			@touchstart.prevent="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd">{{item}}</li>
	</ul>
</template>

<script>
	export default{
		props: {
			cities: Object
		},
		data: function(){
			return {
				touchStatus: false
			}
		},
		computed: {
			//	计算属性,通过父组件传递进来的cities数据单独提取出letters数组
			//	letters = ['A','B','C',...,'X','Y','Z'];
			letters: function(){
				const letters = []
				for(let i in this.cities){
					letters.push(i)
				}
				return letters
			}
		},
		methods:{
			//	点击字母跳转位置		触发父组件的事件并且附带数据
			handleLetterCilck: function(e){
				this.$emit('change',e.target.innerText);
			},
			//	触摸开始
			handleTouchStart: function(){
				this.touchStatus = true
			},
			//	触摸拖动中     移动字母的算法   难点
			handleTouchMove: function(e){
				if (this.touchStatus) {
					//	A字母距离绿色底部的距离
					const startY = this.$refs['A'][0].offsetTop
					//	滚动具体位置距离绿色底部的距离  = 当前距离页面顶部的位置 - 上面头部的高度
		        	const touchY = e.touches[0].clientY - 79
		        	//	第几个字母(0,1,2,..,24) = 两个字母之间的距离 / 每个字母的行高
            		const index = Math.floor((touchY - startY) / 25)
            		//	将字母序号对应的字母发送给父组件
            		if (index >= 0 && index < this.letters.length) {
            			this.$emit('change', this.letters[index])
          			}
		      	}
			},
			//	触摸结束
			handleTouchEnd: function(){
				this.touchStatus = false
			}
		}
	}
</script>

<style scoped="scoped">
	.list{
		/*让字母垂直居中*/
		display:flex;
		flex-direction:column;
		justify-content:center;
		position:absolute;
		top:1.58rem;
		right:0;
		bottom:0;
		width:.4rem;
	}
	.item{
		text-align:center;
		line-height:.5rem;
		color:#00bcd4;
	}
</style>