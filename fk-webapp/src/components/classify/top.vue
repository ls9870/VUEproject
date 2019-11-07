<template>
    <div class="top">
      <div class="nav">
        <img src='../../assets/classify/go.jpg' @click="go" class="go">
        <p >分类</p>
      </div>
      <div class="box">
        <div  class="cebian-nav">
          <span :key="i" v-for= "(n,i) in list" @click="chg(i)" :class="{active:i === isActive}" >{{n}}{{i}}</span>
        </div>
<!--        //youbain右边-->
<!--        <Tui @sendMessage="getMess"></Tui>-->
          <Tui v-show="i=1"></Tui>


      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../common/footer'
import Tui from './tuijian'

export default {
    name: "top",
    components:{
      Footer,
      Tui
    },
   data(){
      return{
        isActive : 0,
        list:['推荐', '男装','女装','男鞋','女鞋','袜品','家居','童装','内衣']
      }
    },
    methods:{
      go(){
        this.$router.push({path:'/'})
      },
      chg(i){
        // this.color = 'color:#CC0000; background-color:#ffffff;'
        this.isActive=i;
      },
      // getMess(){
      //   if (i=0) {
      //     this.style='display:none'
      //   }
      // }
    }
}
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
<style scoped>
  @import '../../assets/base.css';
  .box{
    /*background-color: #E5E5E5;*/
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .cebian-nav{
    display: flex;
    flex-direction: column;
    width: 0.938rem;
    background-color: #E5E5E5;
    height: 9.5rem;
  }
  span{
    display: inline-block;
    width: 0.938rem;
    height: 0.348rem;
    text-align: center;
    line-height: 0.348rem;
    font-size: 0.12rem;
    border-bottom: 1px solid #ffffff;
  }
  .active{
    color:#CC0000;
    background-color:#ffffff;
  }
</style>
