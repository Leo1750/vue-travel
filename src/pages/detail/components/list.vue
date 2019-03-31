<template>
	<div>
		<div class="item" v-for="(item,index) of list" :key="index">
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>{{item.title}}
			</div>
			<!--当有子数据的时候,用递归组件,通过名字来调用自己-->
			<div v-if="item.children">
				<detail-list :list="item.children" class="item-chilren"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'DetailList',
		props:{
			list: Array
		}
	}
</script>

<style scoped="scoped">
	.item-title-icon{
		position: relative;
		left: .06rem;
		top: .06rem;
		display: inline-block;
		width: .36rem;
		height: .36rem;
		/*http://s.qunarzz.com/piao/image/touch/sight/detail.png是一张雪碧图*/
		background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
		margin-right: .1rem;
		background-size: .4rem 3rem;
	}
	.item-title{
		line-height: .8rem;
		font-size: .32rem;
		padding: 0 .2rem;
	}
	.item-chilren{
		padding: 0 .2rem;
	}
</style>