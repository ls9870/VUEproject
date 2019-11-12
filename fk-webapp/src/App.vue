<template>
  <div id="app">
<!--    <Home></Home>-->
<!--    //路由插槽只写这个-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
// import Home from './view/home.vue'
export default {
  name: 'app',
  components: {
    // Home,
  }
}
</script>
<style>
  @import './assets/common.css';
</style>

