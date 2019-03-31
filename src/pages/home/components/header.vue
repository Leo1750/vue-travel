<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont icon-ico-left-arrow back-icon"></div>	
  		</div>
		<div class="header-input">
			<span class="iconfont icon-search"></span> 输入城市/景点/游玩儿/主题		
  		</div>
		<router-link to='/city'>
	  		<div class="header-right">
		  		{{this.$store.state.city}}
		  		<span class="iconfont icon-arrow-sortdown-smal arrow-icon"></span>
	  		</div>	
  		</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.header{
		display: flex;
		line-height : .86rem;
		background : #00bcd4;
		color : #fff;
	}
	.header-left{
		width : .64rem;
		float : left;
	}
	.header-input{
		flex : 1;
		line-height : .64rem;
		height : .64rem;
		margin-top : 0.12rem;
		padding-left : .2rem;
		background : #fff;
		border-radius : .1rem;
		color : #ccc;
	}
	.header-right{
		min-width: 1.04rem;
		padding:0 .1rem;
		float: right;	
		text-align: center;
		color:white;
	}
</style>