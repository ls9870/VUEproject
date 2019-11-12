<template>
    <div class="details-footer" v-cloak>
      <div class="l" @click="ca1"><img src="../../assets/details/foot.jpg">
        <div >{{num}}</div>
      </div>
      <div class="r" @click="ca2">加入购物车</div>
    </div>
</template>

<script>
export default {
    name: "details-footer",
    data(){
        return{
          num:0
        }
    },
    num:0,
    methods:{
      ca2(){
        this.num ++;
        this.$emit("change",this.num)
      },
      ca1(){
        this.$router.push({path:'/catrs'});
      }
    }
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
    position: relative;
  }
  .l img{
    display: block;
    margin: 0 auto;
    width: 0.3rem;
    height: 0.3rem;
  }
  .r{
    width: 50%;
    background-color: #B81C22;
    text-align: center;
    line-height: 0.34rem;
    color: #ffffff;
  }
  .l div{
    display: inline-block;
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    text-align: center;
    line-height: 0.15rem;
    color: #ffffff;
    background-color: #B81C22;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0.98rem;
    font-size: 0.12rem;
  }
</style>
