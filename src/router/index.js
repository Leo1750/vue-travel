import Vue from 'vue'
import Router from 'vue-router'

//	引入路由相关组件
import Home from "../pages/home/Home.vue"
import City from "../pages/city/City.vue"
import Detail from "../pages/detail/Detail.vue"

//	Router-->routes-->route   管理者-->集合-->单个
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: '/city',
    	component: City
    },
    //	参数将储存在id里面
    {
    	path: '/detail/:id',
    	component: Detail
    }
  ],
  //	防止不同页面同步滚动,页面切换始终回到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
