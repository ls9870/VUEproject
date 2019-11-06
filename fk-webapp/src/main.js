import Vue from 'vue'
import App from './App.vue'
import VueSwiper from 'vue-awesome-swiper'
Vue.use(VueSwiper)
//安装路由模、继承，并注册路由模块到vue实例上
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

