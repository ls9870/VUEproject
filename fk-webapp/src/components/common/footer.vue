<template>
    <div class="foot">
      <div class="foot-a" @click="go1">
        <div class="in1"></div>
      </div>
      <div class="foot-a" @click="go2">
        <div class="in2"></div>
      </div>
      <div  class="foot-a" @click="go3">
        <div class="in3"></div>
      </div>
      <div class="foot-a" @click="go4">
        <div class="in4"></div>
      </div>
      <div class="foot-a" @click="go5">
        <div class="in5"></div>
      </div>
    </div>
</template>
<script>
export default {
    name: "foot",
    methods:{
      go1(){
        this.$router.push({path:'/'})
      },
      go2(){
        this.$router.push({path:'/classify'})
      },
      go3(){
        this.$router.push({path:'/hbo'})
      },
      go4(){
        this.$router.push({path:'/'})
      },
      go5(){
        this.$router.push({path:'/me'})
      }
    }
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

