import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'

try{
	if(localStorage.city)	defaultCity = localStorage.city
}catch(e){
	console.log(e.name,e.message);
}

export default new Vuex.Store({
	state: {
		city: defaultCity
	},
	mutations:{
		changePublicCity: function(state,city){
			state.city = city
			try{
				//	改变城市以后储存在本地,刷新页面以后显示的也是本城市
				localStorage.city = city
			}catch(e){
				console.log(e.name,e.message);
			}
		}
	}
})