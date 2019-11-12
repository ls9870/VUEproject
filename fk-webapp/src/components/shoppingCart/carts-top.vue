<template>
    <div class="carts-top">
      <div class="details-top">
        <div class="nav">
          <img src='../../assets/classify/go.jpg' @click="go" class="go">
          <p>购物车</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "carts-top",
    methods: {
      go() {
        this.$router.push({path: '/detail'})
      }
    }
}
</script>

<style scoped>
    @import '../../assets/base.css';
    .nav p{
      margin-left: 1.21rem;
    }
</style>
