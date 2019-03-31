<template>
	<div>
		<div class="search">
			<input type="text" class="search-input" placeholder="请输入城市名或者拼音" v-model="keyword"/>
		</div>
		<div class="search-content" v-show="keyword" ref="search">
			<ul>
				<li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import Bscroll from 'better-scroll'
	export default{
		props: {
			cities: Object
		},
		data: function(){
			return {
				keyword: '',  // input的关键词
				list: [],	//	储存搜索出来的所有对象
				timer: null
			}
		},
		computed: {
			hasNoData: function(){
				return !this.list.length
			}
		},
		//	搜索功能的逻辑
		watch: {
			keyword () {
				// 节流函数,每次keyword发生改变,100ms后函数会执行,100ms后才显示列表
				if(this.timer){
					clearTimeout(this.timer)
				}
				//	如果清空了input框,则清空列表
				if (!this.keyword){
					this.list = []
					return
				}
				this.timer = setTimeout(() => {
					// 必须用箭头函数否则this要出bug
					const result = []
					// 循环cities对象
					for (let i in this.cities){
						// 二次遍历,遍历每个数组里面的内容,item是一个对象
						this.cities[i].forEach((item) => {
							// 如果spell和name能找到输入的子字符串
							if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1){
								// 取出对应城市对象并且储存到result中
								result.push(item)
							}
						})
					}
					// 储存到本地数据,list的每一项都为数组了
					// console.log(result)
					this.list = result
				},100)
			}
		},
		methods: {
			handleCityClick(city){
				this.$store.commit('changePublicCity',city)
				this.$router.push('/')
			}
		},
		//	借助生命周期钩子,实现搜索成功后的滚动
		mounted: function(){
			this.scroll = new Bscroll(this.$refs.search)
		}
	}
</script>

<style scoped="scoped">
	.search{
		height:.72rem;
		background:#00bcd4;
		padding: 0 .1rem;
	}
	.search-input{
		box-sizing:border-box;
		width:100%;
		height:.62rem;
		text-align:center;
		padding: 0 .1rem;
		border-radius:.06rem;
		color: #666;
	}
	.search-content{
		z-index:1;
		overflow:hidden;
		position:absolute;
		left:0;
		top:1.58rem;
		bottom:0;
		right:0;
		background:#eee;
	}
	.search-item{
		line-height: .62rem;
		padding-left: .2rem;
		background:#fff;
		color: #666;
	}
</style>