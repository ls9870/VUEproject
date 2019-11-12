<template>
    <div class="carts-footer">
      <div class="cbox">
        <div class="pri">
            <div class="pri1">需支付 <span>￥ 1104.00</span></div>
            <div class="pric2">总金额：￥138.00 已优惠：￥0.00</div>
        </div>
        <div class="takem">结算 (<span>1</span>)</div>
      </div>
    </div>
</template>

<script>
export default {
    name: "carts-footer"
}
</script>

<style scoped>
  .cbox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #F5F5F5;
    height: 0.5rem;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #C6C6C6;
  }
  .pri{
     padding-top: 0.03rem;
     padding-left: 0.18rem;
   }
  .takem{
    line-height: 0.5rem;
    padding-right: 0.18rem;
    padding-left: 0.2rem;
    background-color: #B81C22;
    color: #ffffff;
  }
  .pri1 span{
    color: #B81C22;
  }
  .pric2{
    font-size: 0.1125rem;
    padding-top: 0.05rem;
  }
</style>
