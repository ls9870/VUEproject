<template>
    <div class="details-top">
        <div class="nav">
            <img src='../../assets/classify/go.jpg' @click="god" class="go">
            <p>详情</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "details-top",
    methods:{
      god(){
        this.$router.push({path:'/'})
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
