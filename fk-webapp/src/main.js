import Vue from 'vue'
import App from './App.vue'
import VueSwiper from 'vue-awesome-swiper'
Vue.use(VueSwiper)
//安装路由模、继承，并注册路由模块到vue实例上
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

Vue.config.productionTip = false

//安装vuex
// Vue.use(Vuex)
// var store = new Vuex.store({
//   state: {//this.$store.state
//
//   },
//   mutations:{//this.$store.commit('方法名称'，‘按需传递唯一的参数)
//
//   },
//   getters:{
//
//   }
// })

new Vue({
  router,
  // store, //挂载
  render: h => h(App),
}).$mount('#app')

import Vuex from 'vuex'

