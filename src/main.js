//	vue-cli自动引入的模块
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//	1.阻止浏览器的开发模式提醒
Vue.config.productionTip = false
//	2.引入css重置文件
import './assets/styles/reset.css'
//  3.解决移动端1px边框的问题
import './assets/styles/border.css'
//	4.引入字体库的css文件
import './assets/styles/iconfont/iconfont.css'
//	5.引入swiper轮播图插件并且使用
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//	6.解决移动端延迟的问题
import fastClick from "fastclick"
fastClick.attach(document.body)
//	7.引入vuex公共仓库
import store from './store/index.js'
//  8.防止有些手机不支持es6,出现白屏现象
import "babel-polyfill"

//	挂载到index.html上,模板是App.vue这个组件
new Vue({
  el: '#app',
  router:router,
  store: store,
  components: { App: App },	//	此选项定义局部组件
  template: '<App/>'
})
