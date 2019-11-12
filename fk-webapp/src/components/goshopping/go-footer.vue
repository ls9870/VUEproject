<template>
    <div class="go-footer">
      <div class="d1">
        <a href="#">
          <div>我的收藏</div>
        </a>
        <a @click="hm" >
          <div>去逛逛</div>
        </a>
      </div>
      <div class="d2">
          <div >184**** | <span @click="de"> 退出</span></div>
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
    </div>
</template>
<script>
import foot from '../home/dibu'
export default {
    name: "go-footer",
    components: {
        foot
    },
    data(){
      return{
        foot
      }
    },
    methods:{
      de(){
        this.$router.push('/me')
      },
      hm(){
        this.$router.push('/')
      }
    }
}
</script>

<style scoped>
.go-footer{
  background-color: #FAFAFA;
  font-size: 0.1125rem;
  padding: 0.2rem 0.2rem;
}
.d1{
  display: flex;
  justify-content: space-between;
}
.d1 div{
  height: 0.4rem;
  width: 1.6rem;
  margin:  0.1rem 0 0.7rem 0;
  float: left;
  text-align: center;
  line-height: 3em;
  font-weight: 700;
  background-color: #ffffff;
}
.d2{
  display: flex;
  justify-content: center;
  margin: 0 0 0.3rem 0;
  font-size: 0.135rem;
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
</style>
