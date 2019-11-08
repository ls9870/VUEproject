<template>
    <div class="me-footer">
        <div class="goo">
            <div class="zhuce">免费注册<span>></span> </div>
            <div class="wangji">手机账号取回密码<span> ></span></div>
        </div>
        <div class="other">
            <div>使用其他账号登录</div>
            <img src="../../assets/me/log.png">
        </div>
    </div>
</template>

<script>
export default {
    name: "me-footer"
}
</script>

<style scoped>
  .goo{
    display: flex;
    justify-content: space-between;
    font-size: 0.1125rem;
    color: #4C4C4C;
    padding-top: 0.15rem;
  }
  .goo span{
    padding-left: 0.05rem;
  }
  img{
    height: 0.2rem;
  }
  .other>div{
    color: #000;
    font-size: 0.1125rem;
    margin: 0.45rem 0 0.14rem 0;
  }
</style>
