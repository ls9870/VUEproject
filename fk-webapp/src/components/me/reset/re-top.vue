<template>
    <div class="re-top">
      <div class="nav">
        <img src='../../../assets/classify/go.jpg' @click="god" class="go">
        <p style=" margin-left: 0.9rem;">找回登录密码</p>
      </div>
    </div>
</template>

<script>
export default {
    name: "re-top",
    methods:{
      god(){
        this.$router.push({path:'/me'})
      }
    }
}
</script>

<style scoped>
  @import '../../../assets/base.css';
</style>
