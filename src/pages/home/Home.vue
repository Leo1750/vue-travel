<template>
	<div>
		<home-header></home-header>
		<home-swiper :list='swiperList'></home-swiper>
	  	<home-icons :list="iconsList"></home-icons>
	  	<home-recommend :list="recommendList"></home-recommend>
	  	<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
	//	引入vuex中的数据,用于回到首页的get参数
	import { mapState } from 'vuex'
	//	引入组件
	import homeHeader from "./components/header.vue"
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcons from './components/Icons.vue'
	import HomeRecommend from './components/recommend.vue'
	import HomeWeekend from './components/weekend.vue'
	import axios from "axios"
	export default{
		components:{	//	注册组件
			homeHeader    : homeHeader,
			homeSwiper    : HomeSwiper,
		  	homeIcons     : HomeIcons,
		  	homeRecommend : HomeRecommend,
		  	homeWeekend   : HomeWeekend
		},
		data: function(){
			return {
				lastCity: '',
				swiperList: [],
				iconsList: [],
				recommendList: [],
				weekendList: []
			}
		},
		//	每个页面一加载就获取到本页面需要的json数据,再分发给各个组件
		methods: {
			getHomeInfo (){
				axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res){
				const resJson = res.data;
		  		if(resJson.ret && resJson.data){
		  			const data = resJson.data;
		  			//	把请求回来的数据储存在本页面的data里面
					this.swiperList = data.swiperList;
					this.iconsList = data.iconList;
		  			this.recommendList = data.recommendList;
		  			this.weekendList = data.weekendList;
		  		}
			}
		},
		computed: {
	  		...mapState(['city'])
	  	},
		mounted (){
			this.lastCity = this.city
			this.getHomeInfo();
		},
		//	切换城市以后重新发送ajax请求
		activated: function(){
		  	if(this.lastCity !== this.city){
		  		this.lastCity = this.city
		  		this.getHomeInfo()
		  	}
	  	}
	}
</script>

<style scoped="scoped">
	
</style>