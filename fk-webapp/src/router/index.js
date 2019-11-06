import Home from '../view/home'
import Classify from '../view/classify'
import VueRouter  from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        { path:'/',component: Home },
        { path:'/fenlei',component: Classify }
    ]
})

export default router