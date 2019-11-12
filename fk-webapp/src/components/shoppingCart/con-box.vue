<template>
   <div class="con-box">
      <div class="carts-top">
          <div class="p1">在售商品：</div>
          <div class="p2">
              <div class="che">全不选</div>
              <span>删除</span>
          </div>
      </div>
      <goods1></goods1>

   </div>
</template>

<script>
import goods1 from './carts-goods/good1'

export default {
    name: "con-box",
    components:{
      goods1
    }
}
</script>

<style scoped>
  .con-box{
    padding: 0 0.2rem;
  }
  .carts-top{
    border-bottom: 1px solid #EAEAEA;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
  }
  .p1{
    font-size: 0.1125rem;
    padding-top: 0.05rem;
  }
  .p2{
    font-size: 0.11rem;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    line-height: 0.2rem;
    margin: auto 0;
  }
  .che{
    width: 0.42rem;
    text-align: center;
    background-color: #B81C22;
    margin-right: 0.1rem;
  }
  .p2 span{
    width: 0.42rem;
    text-align: center;
    background-color: #B81C22;
  }
</style>
