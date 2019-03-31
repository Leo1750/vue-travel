<template>
	<div class="list" ref="wrapper">
		<div>
			<!--1.当前城市-->
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<!--2.热门城市-->
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item in hot" @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<!--3.不同字母对应的城市-->
			<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		props: {
			hot: Array,
			cities: Object,
			letter: String
		},
		methods: {
			handleCityClick(city){
				this.$store.commit('changePublicCity',city)
				this.$router.push('/')
			}
		},
		//	当点击字母发生改变时
		watch: {
			letter: function(){
				if(this.letter){
					const element = this.$refs[this.letter][0]
					//	插件指定的API,跳转到指定的dom元素
					this.scroll.scrollToElement(element)
				}
			}
		},
		mounted (){
			//	使整个页面具有原生App的滚动效果
			//	console.log(this.$refs.wrapper)
			this.scroll = new BScroll(this.$refs.wrapper);
		}
	}
</script>

<style scoped="scoped">
	.list{
		position:absolute;
		overflow:hidden;
		top:1.58rem;
		left:0;
		right:0;
		bottom:0;
	}
	.title{
		line-height:.54rem;
		background:#eee;
		padding-left:.2rem;
		color:#666;
		font-size:.26rem;
	}
	/*引入了border.css,这里就是是解决移动端1px的问题*/
	.border-topbottom:before{
		border-color: #ccc;
	}
	.border-topbottom:after{
		border-color: #ccc;
	}
	.border-bottom:before{
		border-color: #ccc;
	}
	.button-list{
		overflow:hidden;
		padding:.1rem .6rem .1rem .1rem;
	}
	.button-wrapper{
		float:left;
		width:33.33%;
	}
	.button{
		text-align:center;
		margin:.1rem;
		padding:.1rem 0;
		border:.02rem solid #ccc;
		border-radius:.06rem;
	}
	.item{
		line-height:.76rem;
		padding-left:.2rem;
	}
</style>