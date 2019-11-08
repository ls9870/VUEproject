<template>
  <div class="me-top">
    <div class="nav">
      <img src='../../assets/classify/go.jpg' @click="goh" class="go">
      <p style=" margin-left: 1.2rem;">登录</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "me-top",
    methods:{
      goh(){
        this.$router.push({path:'/'})
      }
    }
}
</script>

<style scoped>
  @import '../../assets/base.css';

</style>
