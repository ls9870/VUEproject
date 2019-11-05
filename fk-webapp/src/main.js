import Vue from 'vue'
import App from './App.vue'
import VueSwiper from 'vue-awesome-swiper'
Vue.use(VueSwiper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
