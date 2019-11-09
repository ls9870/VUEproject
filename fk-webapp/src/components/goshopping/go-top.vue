<template>
    <div class="go-shop">
      <div class="nav">
        <img src='../../assets/classify/go.jpg' @click="go" class="go">
        <p style=" margin-left: 1.2rem;">购物车</p>
      </div>
    </div>
</template>

<script>
export default {
    name: "go-top",
    methods: {
      go() {
        this.$router.push({path: '/'})
      }
    }
}
</script>

<style scoped>
  @import '../../assets/base.css';

</style>
