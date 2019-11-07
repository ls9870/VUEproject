<template>
  <div id="app">
<!--    <Home></Home>-->
<!--    <Classify></Classify>-->
<!--    //路由插槽只写这个-->
    <router-view></router-view>
  </div>
</template>
<script>
// import Home from './view/home.vue'
// import Classify from './view/classify.vue'

export default {
  name: 'app',
  components: {
    // Home,
    // Classify
  }
}
</script>
<style>
  @import './assets/common.css';
  /*body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr,div,em,strong{*/
  /*  margin:0;*/
  /*  padding:0;*/
  /*}*/
  /*html{*/
  /*  font-size: 26.67vw;*/
  /*}*/
  /*body{*/
  /*  font-size: 0.14rem;*/
  /*   width: 100%;*/
  /*}*/
  /*a{*/
  /*  text-decoration: none;*/
  /*}*/
  /*img{*/
  /*  border: none;*/
  /*}*/

</style>

