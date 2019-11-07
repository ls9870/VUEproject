<template>
    <div class="foot">
      <a href="" class="foot-a">
        <div class="in1"></div>
      </a>
      <a href="" class="foot-a">
        <div class="in2"></div>
      </a>
      <a href="" class="foot-a">
        <div class="in3"></div>
      </a>
      <a href="" class="foot-a">
        <div class="in4"></div>
      </a>
      <a href="" class="foot-a">
        <div class="in5"></div>
      </a>
    </div>
</template>
<script>
export default {
    name: "foot"
}
</script>

<style scoped>
    .foot{
      width: 100%;
      height: 0.47rem;
      position: fixed;
      bottom: 0;
      border-top: 1px solid #AAAAAA;
      display: flex;
      justify-content: space-around;
      background-color: #FFFFFF;
      z-index: 999;
    }
    .foot-a{
      display: inline-block;
      width: 0.75rem;
      height: 0.47rem;
    }
    .foot-a div{
      width: 0.337rem;
      height: 0.45rem;
      background-size: 100%;
      background-repeat: no-repeat;
      margin: 0 auto;
    }
    .in1{
      background-image: url("../../assets/footer/in.png");
    }
    .in2{
      background-image: url("../../assets/footer/in.png");
      background-position: 0 -43px;
    }
    .in3{
      background-image: url("../../assets/footer/in.png");
      background-position: 0 -91px;
    }
    .in4{
      background-image: url("../../assets/footer/in.png");
      background-position: 0 -136px;
    }
    .in5{
      background-image: url("../../assets/footer/in.png");
      background-position: 0 -180px;
    }
</style>

