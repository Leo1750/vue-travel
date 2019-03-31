<template>
  <div id="app">
  	<!--把每次切换页面/路由的数据都缓存在本地,下次再切换页面的时候就不用发出ajax请求了-->
    <keep-alive exclude="Detail">
    	<router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
	export default {
	  name: 'App'
	}
</script>

<style>
	
</style>
