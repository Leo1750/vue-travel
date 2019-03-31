<template>
	<div class="header">
		<router-link to="/">
			<div class="iconfont icon-ico-left-arrow back-icon"></div>
		</router-link>
		城市选择
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.header{
		position:relative;
		overflow:hidden;
		height: .86rem;
		line-height: .86rem;
		text-align:center;
		color:#fff;
		background:#00bcd4;
		font-size:.32rem;
	}
	.back-icon{
		position:absolute;
		top:0;
		left:0;
		width:.64rem;
		text-align:center;
		color:#fff;
	}
</style>