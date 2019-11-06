<template>
    <div class="miaosha">
      <div class="xp-tu1">
        <span></span>
        <p>每日秒杀</p>
        <p style="font-size: 0.096rem;line-height: 0.2rem;color: #ADADAD;">| 15点场</p>
      </div>
      <a href="" >
        <img src="../../assets/home/miaosha/6385374-1j201903271435312940.jpg"/>
        <p class="text1">充值后￥69 <span><s>￥198</s></span></p>
      </a>
    </div>
</template>

<script>
export default {
    name: "miaosha"
}
</script>

<style scoped>
  .miaosha{
    background-color: #FAFAFA;
  }
  .xp-tu1{
    display: flex;
    justify-content: flex-start;
    padding: 0.112rem;
  }
  p{
    margin-left:  0.1rem;
  }
  .xp-tu1 span{
    width: 0.14rem;
    height: 0.15rem;
    background-image: url("../../assets/home/miaosha/wallet-clock-hot.png");
    background-position: 0  -0.14rem;
    background-size: cover;
    background-repeat: no-repeat;
  }
  a>img{
    width: 0.97rem;
    height: 1.25rem;
  }
</style>
