<template>
    <div class="details-footer">
      <div class="l"><img src="../../assets/details/foot.jpg"></div>
      <div class="r">加入购物车</div>
    </div>
</template>

<script>
export default {
    name: "details-footer"
}
</script>

<style scoped>
  .details-footer{
    width: 100%;
    height: 0.34rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    border-top: 1.5px solid #aaaaaa;
  }
  .l{
    width: 50%;
    background-color: #FFFFFF;
  }
  .l img{
    display: block;
    margin: 0 auto;
  }
  .r{
    width: 50%;
    background-color: #B81C22;
    text-align: center;
    line-height: 0.34rem;
    color: #ffffff;
  }
</style>
