<template>
    <div class="pin-top">
      <div class="nav">
        <img src='../../assets/classify/go.jpg' @click="goh" class="go">
        <p style=" margin-left: 1.2rem;">频道</p>
      </div>
    </div>
</template>

<script>
export default {
    name: "pin-top",
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
