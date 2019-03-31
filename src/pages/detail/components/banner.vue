<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg"/>
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont icon-search banner-icon"></span>
					{{this.bannerImgs.length}}
				</div>
			</div>
		</div>
		<!--使画廊出现和关闭时具有渐隐渐现效果-->
		<fade-animation>
			<common-gallery :imgs="bannerImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
		</fade-animation>
	</div>
</template>

<script>
	import commonGallery from "../../common/gallery.vue"
	import fadeAnimation from "../../common/fade.vue"
	export default{
		components: {
			commonGallery:commonGallery,
			fadeAnimation:fadeAnimation
		},
		props: {
    		sightName: String,
    		bannerImg: String,
    		bannerImgs: Array
  		},
		data: function(){
			return {
				showGallery:false
			}
		},
		methods: {
			//	点击banner显示图片区
			handleBannerClick: function(){
				this.showGallery = true
			},
			//	点击图片区    隐藏自己
			handleGalleryClose: function(){
				this.showGallery = false
			}
		}
	}
</script>

<style scoped="scoped">
	.banner{
		position:relative;
		overflow:hidden;
		height:0;
		padding-bottom:55%;
	}
	.banner-img{
		width:100%;
	}
	.banner-info{
		display:flex;
		position:absolute;
		left:0;
		right:0;
		bottom:0;
		line-height:.6rem;
		color:#fff;
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
	}
	.banner-title{
		flex:1;
		font-size: .32rem;
		padding: 0 .2rem;
	}
	.banner-number{
		padding:0 .4rem;
		height: .32rem;
		margin-top: .14rem;
		line-height: .32rem;
		border-radius: .2rem;
		background:rgba(0,0,0,.8);
		font-size:.24rem;
	}
	.banner-icon{
		font-size:.24rem;
	}
</style>