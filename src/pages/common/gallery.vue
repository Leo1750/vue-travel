<template>
	<div class="container" @click="handleGalleryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide v-for="(item,index) in imgs" :key="index">
			    	<img class="gallery-img" :src="item"/>
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
    		</swiper>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			imgs: {
				type: Array,
				default: function(){
					return []
				}
			}
		},
		data (){
			return {
				swiperOptions: {
					pagination: '.swiper-pagination',
					//	把小圆点改成分数形式
					paginationType : 'fraction',
					//	一开始swiper隐藏,当再次显示出来后swiper宽度计算会出现问题
					//	监听自己和父元素的dom发生改变后,自我刷新一次,解决swiper宽度计算的问题
					observeParents: true,
        			observer: true
				}
			}
		},
		//	点击后让父组件关闭画廊
		methods: {
			handleGalleryClick: function(){
				// 点击画廊区域触发事件
				this.$emit('close')
			}
		}
	}
</script>

<style scoped="scoped">
	/*阻止分页 1/24被隐藏*/
	.container >>> .swiper-container{
		overflow: inherit;
	}
	.container{
		position:fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index:997;
		left:0;
		right:0;
		top:0;
		bottom:0;
		background:black;
	}
	.wrapper{
		height:0;
		width:100%;
		padding-bottom:100%;
	}
	.gallery-img{
		width:100%;
	}
	.swiper-pagination{
		color:white;
		bottom: -1rem;
	}
</style>