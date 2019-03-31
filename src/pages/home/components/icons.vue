<template>
	<div class="icons">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="(page,index) in pages" :key="index"> <!-- 有几次轮播-->
		    	<div class="icon" v-for="item in page" :key="item.id"> <!--每个轮播的icon个数-->
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl"/>
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
		    </swiper-slide>
  		</swiper>
	</div>
</template>

<script>
	export default{
		//	取消icons区域的默认滚动
		data (){
			return {
				swiperOption: {
					autoplay: false
				}
			}
		},
		props:{
			list: Array
		},
		//	算法名: 将一个1维数组,根据指定n项拆分成二维数组
		//	最终结果类似于pages[0]里面8个对象,pages[1]里面8个对象,pages[2]里面4个对象
		computed: {
			pages: function(){
				const pages = []
				this.list.forEach(function(item,index){
					const page = Math.floor(index / 8)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style scoped="scoped">
	/*一个图标时点击下面也可以滑动*/
	.icons >>> .swiper-container{
		height: 0;
		padding-bottom: 50%;
	}
	.icons{
		margin-top: .1rem   ;
	}
	.icon{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		overflow: hidden;
		float: left;
		position: relative;
		/*background-color: red;*/
	}
	.icon-img{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: .44rem;
		box-sizing: border-box;
		padding: .1rem;
		/*background-color: blue;*/
	}
	.icon-img-content{
		height: 100%;	/*让图片继承父级的高度*/
		margin: 0 auto;
		display: block;
	}
	.icon-desc{
		position:absolute;
		left:0;
		bottom:0;
		right:0;
		height:.44rem;
		line-height:.44rem;
		text-align:center;
		color:#333;
		/*这里是每个icon下的文字,当后端给的数据较多时以...显示*/
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>