<template>
    <div class="good1">
      <div class="conbox">
        <input type="checkbox" >
        <img src="../../../assets/details/1.jpg" />
        <div class="text">
            <div class="text1">凡客衬衫 牛津纺 领尖扣 男款</div>
            <div class="text2">颜色 天蓝色 尺码：L</div>
            <div class="text3">￥ 138.00</div>
        </div>
        <div class="text4">
          <img src="../../../assets/goshopping/del-car.png">
          <div class="mum">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "good1"
}
</script>

<style scoped>
  .conbox{
    display: flex;
    justify-content:space-between;
    margin: 0.12rem 0 0 0;
    padding-bottom: 0.12rem;
    border-bottom: 0.02rem solid #f5f5f5;
  }
  .conbox img{
    height: 0.787rem;
    width: 0.787rem;
  }
  .text4 img{
    height: 0.2025rem;
    width: 0.2025rem;
  }
  .text{
    margin: auto;
    font-size: 0.1125rem;
    line-height: 0.22rem;
  }
  .conbox input{
    height: 0.2rem;
    width: 0.2rem;
    margin: auto 0.05rem;
  }
  .text3{
    color: #B81C22;
  }
  .text4 img{
    display: block;
    margin: 0.1rem auto;
  }
  .mum button{
    height: 0.2588rem;
    width: 0.2588rem;
    background-color: #F5F5F5;
    outline: none;
    border: none;
    font-size: 0.17rem;
  }
  .mum span{
    display: inline-block;
    height: 0.2rem;
    width: 0.2rem;
    text-align: center;
    border: 0.01rem solid #D1D1D1;
    margin: 0 0.02rem;
  }
</style>
