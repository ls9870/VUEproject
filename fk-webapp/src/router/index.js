import Home from '../view/home'
import Classify from '../view/classify'
import Pindao from '../view/pindao'
import Me from '../view/me'

import VueRouter  from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path:'/classify',
      name: 'Classify ',
      component: Classify ,
      meta: { keepAlive: true }
    },
    {
      path:'/hbo',
      name: 'Pindao ',
      component: Pindao  ,
      meta: { keepAlive: true }
    },
    {
      path:'/me',
      name: 'Me ',
      component: Me ,
      meta: { keepAlive: true }
    }
  ]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


