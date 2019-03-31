<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
	</div>
</template>

<script>
	import axios from 'axios'
	import cityHeader from './components/header'
	import citySearch from './components/search'
	import cityList from './components/list'
	import cityAlphabet from './components/alphabet'
	export default{
		components:{
			cityHeader,
			citySearch,
			cityList,
			cityAlphabet
		},
		data: function(){
			return {
				cities:{},
				hotCities:[],
				letter:""
			}
		},
		methods: {
			getCityInfo: function(){
				axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
			},
			//	把数据储存在本地
			handleGetCityInfoSucc: function(res){
				const resJson = res.data
				if(resJson.ret && resJson.data){
					const data = resJson.data
					this.cities = data.cities
					this.hotCities = data.hotCities
				}
			},
			//	接收字母表组件传递过来的字母,并且储存在本地       无论你是点击还是用手滑动,只要你传递对应字母过来就ok了
			handleLetterChange: function(letter){
				this.letter = letter
			}
		},
		//	组件一挂载就请求数据
		mounted: function(){
			this.getCityInfo()
		}
	}
</script>

<style scoped="scoped">
	
</style>