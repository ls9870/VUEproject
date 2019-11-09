<template>
    <div class="zhuce-header">
      <div class="nav">
        <img src='../../../assets/classify/go.jpg' @click="goh" class="go">
        <p style=" margin-left: 1.2rem;">注册</p>
      </div>
    </div>
</template>

<script>
export default {
    name: "zhuce-header",
    methods:{
      goh(){
        this.$router.push({path:'/me'})
      }
    }
}
</script>

<style scoped>
  @import '../../../assets/base.css';
</style>
