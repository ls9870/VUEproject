<template>
    <div class="login">
        <Top></Top>
      <div class="in6 ">
          <div class="q1 name1">
              <input type="text" name="name2" class="ma" value="请输入图片验证码"/>
              <span ></span>
          </div>
          <div class="q2 ">
              <input type="text" name="name3" class="phone" value="请输入您的手机号"/>
              <button type="button" class="btn2">获取动态密码</button>
          </div>
          <input type="text" name="name4" class="name2" value="请输入手机验证码"/>
          <input type="password" name="name4" class="name3" value="密码：6-16位字母，数字，特殊字符" /><span class="ico" @click="update" :style="image"></span>
          <div class="con">注册账号即表示同意遵守<a >《VANCL凡客服务条款》</a></div>
          <button type="button" class="btn1">点击注册</button>
      </div>
    </div>
</template>

<script>
import Top from './login/zhuce-header'
export default {
    name: "login",
    components:{
      Top
    },
    data(){
      return{
        pic1:'http://47.94.86.251/凡客Vancl/assets/zhuce/1.jpg',
        pic2:'http://47.94.86.251/凡客Vancl/assets/zhuce/2.jpg',
        image:'background-image: url("http://47.94.86.251/凡客Vancl/assets/zhuce/1.jpg")'
      }
    },
    methods:{
      update(){
        this.image='background-image: url("http://47.94.86.251/凡客Vancl/assets/zhuce/2.jpg")'
      }
    }
}
</script>

<style scoped>
  .in6{
    padding: 0.28rem 0.225rem;
    position: relative;
  }
  .in6>input{
    width: 100%;
    padding: 0.09rem 0.1rem 0.09rem  0.1rem;
    box-sizing: border-box;  /**********改变box计算互不影响*******/
    background-color: #F5F5F5;
    outline: none;
    border: none;
    color: #757575;
    height: 0.4rem;
    line-height: 0.2rem;
  }
  .q1{
    display: flex;
    justify-content: space-between;
  }
  .q2{
    display: flex;
    justify-content: space-between;
    margin: 0.2rem 0 0.2rem 0;
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
  .name3{
    margin: 0.15rem 0 0.35rem 0;
  }
  .con{
    font-size: 0.1125rem;
    color: #B3B3B3B3;
    text-align: center;
  }
  a{
    color: black;
    cursor: pointer;
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
    margin-top: 0.2rem;
  }
  .ico{
    width: 0.51rem;
    height: 0.35rem;
    position: absolute;
    /*background-image: url("../../assets/zhuce/1.jpg");*/
    background-size: cover;
    top: 2.04rem;
    right: 0.38rem;
  }
</style>
