<template>
    <div class="enter">
<!--      内容-->
      <div class="con" >
          <div @click='flage=true' class="pu" v-on:click="sty" :style="color">普通登录</div>
          <div @click='flage=false' class="kuai" v-on:click="stye" :style="colore">快速登录</div>
      </div>
<!--      普通-->
      <div class="in6" v-if="flage">
          <input type="text" name="name1" class="name1" value="点击输入手机号"/>
          <input type="password" name="pwd1" class="name2" value="请输入密码"/>
          <button type="button" class="btn1"><span>登</span>&nbsp;录</button>
          <Mefo></Mefo>
      </div>
<!--快速-->
      <div class="in6 " v-else>
          <div class="q1 name1">
              <input type="text" name="name2" class="ma" value="请输入图片验证码"/>
              <span ></span>
          </div>
          <div class="q2 ">
              <input type="text" name="name3" class="phone" value="请输入您的手机号"/>
              <button type="button" class="btn2">获取动态密码</button>
          </div>
            <input type="password" name="name4" class="name2" value="请输入手机登录密码"/>
            <button type="button" class="btn1"><span>登</span>&nbsp;录</button>
          <Mefo></Mefo>
      </div>

    </div>
</template>

<script>
import Mefo from './me-footer'
export default {
    name: "enter",
    data(){
      return{
        flage:true,
        color:'border-bottom: 0.03rem solid #B81B22',
        colore:'border:none'
      }
    },
    components:{
      Mefo
    },
    methods:{
      goh(){
        this.$router.push({path:'/'})
      },
      sty(){
        this.color=' border-bottom: 0.03rem solid #B81B22'
        this.colore=' border-bottom: none'
      },
      stye(){
        this.colore=' border-bottom: 0.03rem solid #B81B22'
        this.color=' border-bottom: none'
      },
    }
}
</script>

<style scoped>
  .con{
    display: flex;
    justify-content: space-around;
    font-size: 0.162rem;
  }
  .con>div{
    width: 1.56rem;
    text-align: center;
    line-height: 0.4rem;
  }
  /*//input*/
  .in6{
    padding: 0.28rem 0.17rem;
  }
  .in6>input{
    width: 100%;
    padding: 0.1rem 0.1rem 0.1rem  0.1rem;
    box-sizing: border-box;  /**********改变box计算互不影响*******/
    background-color: #F5F5F5;
    outline: none;
    border: none;
    color: #757575;
    line-height: 0.2rem;
  }
  .name1{
    margin: 0.1rem 0;
  }
  .name2{
    margin: 0.2rem 0 0.4rem 0;
  }
  .btn1{
    font-size: 0.18rem;
    color: #ffffff;
    text-align: center;
    background-color: #B81B22;
    width: 100%;
    outline: none;
    border: none;
    padding: 0.092rem 0;
    border-radius: 0.05rem;
  }
  .btn1 span{
    padding:0.08rem;
  }
  /*//快速*/
  .q1{
    display: flex;
    justify-content: space-between;
  }
  .q2{
    display: flex;
    justify-content: space-between;
    margin: 0.2rem 0 0.2rem 0;
  }
  .q1 span{
    width: 0.8775rem;
    height: 0.36rem;
    border: 1px solid #EDEDED;
  }
  .q2 button{
    font-size: 0.135rem;
    width: 1.066rem;
    height: 0.391rem;
    color: #B81C22;
    border: 2px solid #B2B2B2;
    background-color: #ffffff;
    outline: none;
    border-radius: 0.04rem;
  }
  .ma,.phone{
    width: 53%;
    padding: 0.09rem 0.1rem 0.09rem  0.1rem;
    box-sizing: border-box;
    background-color: #F5F5F5;
    outline: none;
    border: none;
    color: #757575;
    line-height: 0.22rem;
  }
</style>
