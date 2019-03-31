<template>
	<div>
		<!--默认左上角返回按钮-->
		<router-link tag="div" to="/" class="header-abs" v-show="showAbs">
			<div class="iconfont icon-ico-left-arrow back-icon"></div>
		</router-link>
		<!--头部固定返回区,默认不显示-->
		<div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
			<router-link tag="div" to="/" class="iconfont icon-ico-left-arrow header-fixed-back"></router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {
				//	切换默认返回按钮和头部固定header的显示
      			showAbs: true,
      			//	控制透明度实现渐隐渐现
      			opacityStyle: {
        			opacity: 0
      			}
    		}
		},
		methods: {
			handleScroll: function(){
				const top = document.documentElement.scrollTop
      			if(top>60){
      				//	渐隐渐现
        			let opacity = top/140
        			opacity = opacity > 1 ? 1 : opacity
        			//	键值一样可以省略   {opacity}
        			this.opacityStyle = { opacity: opacity}
        			this.showAbs = false
     			}else{
        			this.showAbs = true
      			}
			}
		},
		// 监听全局事件,滚动一定高度后,header显示
		activated (){
    		window.addEventListener('scroll', this.handleScroll)
  		},
  		// 页面隐藏时,对全局事件解绑
		deactivated (){
    		window.removeEventListener('scroll', this.handleScroll)
  		}
	}
</script>

<style scoped="scoped">
	/*左上角返回按钮*/
	.header-abs{
		position:absolute;
		left:.2rem;
		top:.2rem;
		width:.8rem;
		height:.8rem;
		line-height: .8rem;
		text-align: center;
		border-radius:.4rem;
		background: rgba(0,0,0,.8);
	}
	.back-icon{
		color:#fff;
		font-size:.4rem;
	}
	/*头部固定返回区*/
	.header-fixed{
		position:fixed;
		left:0;
		right:0;
		top:0;
		height:.86rem;
		line-height:.86rem;
		text-align:center;
		color:#fff;
		background:#00bcd4;
		font-size:.32rem;
	}
	.header-fixed-back{
		position:absolute;
		top:0;
		left:0;
		width:.64rem;
		text-align:center;
		color:#fff;
	}
</style>