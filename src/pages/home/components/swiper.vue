<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="list.length">
		    <!-- slides -->
		    <swiper-slide v-for="item in list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl"/>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
  		</swiper>
	</div>
</template>

<script>
	export default{
		props:{
			list: Array
		},
		data (){
			return {
				//	给组件内部传递数据,就是你需要的前后按钮,小圆点等等,这里是小圆点
				swiperOption:{
					pagination: '.swiper-pagination',
					loop:true	// 循环轮播
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.swiper-img{
		width: 100%;
	}
	/*解决轮播图闪动的问题*/
	.wrapper{
		width: 100%;
		height: 0;
		padding-bottom: 32.5%;
		overflow: hidden;
		background: #eee;
		/*height: 31.25vw;*/
	}
	/*穿透scoped的限制*/
	.wrapper >>> .swiper-pagination-bullet-active{
		background: white !important;
	}
</style>