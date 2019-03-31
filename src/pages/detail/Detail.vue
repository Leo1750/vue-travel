<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import detailBanner from './components/banner.vue'
	import detailHeader from './components/header.vue'
	import detailList from './components/list.vue'
	export default{
		name: "Detail",
		components: {
			detailBanner,
			detailHeader,
			detailList
		},
		data: function(){
			return {
				sightName: '',
      			bannerImg: '',
      			gallaryImgs: [],
      			list: []
			}
		},
		methods: {
			getDetailInfo () {
      			axios.get( '/api/detail.json?id=' + this.$route.params.id ).then(this.handleGetDataSucc)
    		},
    		handleGetDataSucc(res){
      			const resJson = res.data
      			if(resJson.ret && resJson.data){
        			const data = resJson.data
        			this.sightName = data.sightName
        			this.bannerImg = data.bannerImg
        			this.gallaryImgs = data.gallaryImgs
        			this.list = data.categoryList
      			}
    		}
		},
		//	发送ajax请求
		mounted: function(){
			this.getDetailInfo()
		}
	}
</script>

<style scoped="scoped">
	.content{
		height:50rem;
		background:#fff;
	}
</style>