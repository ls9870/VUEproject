<template>
    <div class="con2">
      <div class="box">
        <div class="topnav" >
          <img src="../../assets/details/size_icon.jpg" class="choose">
          选择 颜色/尺码
        </div>
        <img src="../../assets/details/swordr_icon.jpg" class="star">
      </div>
    </div>
</template>

<script>
export default {
    name: "details-con2"
}
</script>

<style scoped>
  .box{
    line-height: 0.38rem;
    display: flex;
    justify-content: space-between;
    background-color: #F5F5F5;
  }
  .choose{
    width: 0.1519rem;
    height: 0.1519rem;
    margin: 0 0.1rem 0 0.1rem;
  }
  .star{
    width: 0.0788rem;
    height: 0.13rem;
    margin: auto 0.2rem;
  }
</style>
