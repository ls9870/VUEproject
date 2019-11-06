<template>
    <div class="dibu">
        <div class="d1">
          <a href="">
            <img src="../../assets/home/dibu/see-all.jpg">
          </a>
          <a href="#">
            <img src="../../assets/home/dibu/ret-top.jpg">
          </a>
        </div>
        <div class="d2">
          <a href="">
            <div class="d2a">登录</div>
          </a>
          <a href="#">
            <div class="d2b">注册</div>
          </a>
        </div>
        <div class="d3">
          <a href="">
            <img src="../../assets/home/dibu/help.jpg">
          </a>
          <a href="">
            <img src="../../assets/home/dibu/d2.jpg">
          </a>
          <a href="">
            <img src="../../assets/home/dibu/weixin.jpg">
          </a>
          <a href="">
            <img src="../../assets/home/dibu/pcsite.jpg">
          </a>
        </div>
        <div class="txt">京ICP证 100557号</div>
        <div class="cebian">
          <img src="../../assets/home/cebian.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: "dibu"
}
</script>

<style scoped>
  .dibu{
    background-color: #FAFAFA;
    font-size: 0.1125rem;
  }
  .d1{
    display: flex;
    justify-content: space-between;
  }
  .d1 img{
    height: 0.4rem;
    width: 1.8rem;
    margin: 0.43rem 0;
  }
  .d2{
    display: flex;
    justify-content: center;
    margin: 0 0 0.3rem 0;
  }
  .d2a{
    padding: 0.068rem 0.338rem;
    background-color: #FFFFFF;
    margin-right: 0.06rem;
  }
  .d2b{
    padding: 0.068rem 0.338rem;
    background-color: #FFFFFF;
    margin-left: 0.06rem;
  }
  .d3{
    display: flex;
    justify-content: space-between;
    width: 2.52rem;
    padding: 0.135rem;
    border-top: 1px solid #727272;
    border-bottom: 1px solid #727272;
    margin: 0 auto;
  }
  .d3 img{
    width: 0.394rem;
    height: 0.585rem;
  }
  .txt{
    color: #727272;
    padding: 0.1125rem;
    text-align: center;
    padding-bottom: 0.6rem;
  }
  .cebian img{
    width: 0.4rem;
    height: 0.4rem;
    position: fixed;
    bottom: 0.7rem;
    right: 0.1rem;
  }
</style>
