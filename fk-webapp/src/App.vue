<template>
  <div id="app">
    <ho></ho>
  </div>
</template>
<script>
import ho from './view/home.vue'
export default {
  name: 'app',
  components: {
    ho
  }
}
</script>
<style>
  body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr,div,em,strong{
    margin:0;
    padding:0;
  }
  html{
    font-size: 26.67vw;
  }
  body{
    font-size: 0.14rem;
     width: 100%;
  }
  a{
    text-decoration: none;
  }
  img{
    border: none;
  }
</style>
