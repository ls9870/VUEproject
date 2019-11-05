<template>
    <div class="top-nav">
      <a href="">
        <img src="../../assets/home/top-nav/2018_7_9_14_59_50_8699_678x60.jpg" class="chong"/>
      </a>
      <div class="nav1">
        <a href="">
          <img src="../../assets/home/top-nav/1.jpg"/>
          <div class="nav-text">新品</div>
        </a>
        <a href="">
          <img src="../../assets/home/top-nav/2.jpg"/>
          <div class="nav-text">特惠</div>
        </a>
        <a href="">
          <img src="../../assets/home/top-nav/3.jpg"/>
          <div class="nav-text">衬衫</div>
        </a>
        <a href="">
          <img src="../../assets/home/top-nav/4.jpg"/>
          <div class="nav-text">外套</div>
        </a>
        <a href="">
          <img src="../../assets/home/top-nav/5.jpg"/>
          <div class="nav-text">获奖名单</div>
        </a>
      </div>
    </div>
</template>
<script>
export default {
    name: "top-nav"
}
</script>
<style scoped>
  .top-nav{
    width: 100%;
    font-size: 0.112rem;
    text-align: center;
    margin-top: 0.12rem;
    padding-bottom: 0.1rem;
  }
  .chong{
    width: 3.5rem;
    height: 0.3rem;
  }
  .nav1{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 0.12rem;
  }
  .nav1 img{
    idth: 0.31rem;
    height: 0.31rem;
    margin-bottom: 0.04rem;
  }
  .nav1 a{
    color: #666666;
  }
</style>
