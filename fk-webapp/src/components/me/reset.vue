<template>
    <div class="reset">
       <Rtop></Rtop>
          <div class="in7">
              <div class="ma2">
                <input type="text" name="ma2" value="请输入验证码"/>
                <span></span>
              </div>
              <div class="phone2">
                <input type="text" name="phone2" value="请输入您的手机号"/>
                <span>获取短信验证码</span>
              </div>
              <input type="text" name="duanma" value="请输入短信验证码验证码" class="duanma"/>
              <input type="password" name="pwd" value="新密码：6-16位字母，数字，特殊字符" class="pwd"/>
              <input type="password" name="opwd" value="请再次输入密码" class="opwd"/>
              <button type="button" class="btn1"><span>提</span>&nbsp;交</button>
          </div>
    </div>
</template>

<script>
import Rtop from './reset/re-top'
export default {
    name: "reset",
    components:{
      Rtop
    }
}
</script>

<style scoped>
  .in7{
    padding: 0 0.225rem;
  }
  input{
    margin-top: 0.4rem;
    border-bottom: 0.01rem solid #C6C6C6;
    outline: none;
    border-right: none;
    border-left: none;
    border-top: none;
    padding-left: 0.08rem;
    padding-bottom: 0.08rem;
  }
  .phone2 span{
    text-align: center;
    font-size: 0.12rem;
    width: 1.066rem;
    height: 0.35rem;
    line-height: 0.35rem;
    color: #B81C22;
    border: 2px solid #B81C22;
    background-color: #ffffff;
    outline: none;
    border-radius: 0.04rem;
  }
  .duanma,.pwd{
    width: 100%;
  }
  .opwd{
    width: 100%;
    margin-bottom: 0.4rem;
  }
  .ma2,.phone2{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .ma2 span{
    width: 0.8775rem;
    height: 0.36rem;
    border: 1px solid #EDEDED;
    margin-top: 0.2rem;
  }
  .phone2 span{
    margin-top: 0.2rem;
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
</style>
