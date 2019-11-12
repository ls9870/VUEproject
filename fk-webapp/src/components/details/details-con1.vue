<template>
    <div class="details-con1">
        <div class="con1" v-for="n in goods">
            <div class="c1">{{n.p1}}</div>
            <div class="c2">{{n.p2}}<s>{{n.p3}}</s></div>
            <div class="c3">{{n.p4}}</div>
            <div class="c4"><span>{{n.p5}}</span>{{n.p6}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "details-con1",
    data(){
      return{
        goods:[
          {
            p1:"凡客衬衫 牛津纺 领尖扣 男款 天蓝色",
            p2:"198元",p3:"138元",
            p4:"充100返100，点击充值",
            p5:"免邮",
            p6:"全场购物满199元免运费"
          }
        ]
      }
    }
}
</script>

<style scoped>
  .c1{
    font-size: 0.135rem;
    color: #4C4C4C;
    margin-bottom: 0.04rem;
  }
  .c2{
    font-size: 0.135rem;
    color: #C8161E;
    line-height: 0.25rem;
  }
  s{
    font-size: 0.1687rem;
    color: #C8161E;
    margin-left: 0.1rem;
  }
  .c3{
    font-size: 0.135rem;
    color: #C8161E;
    line-height: 0.25rem;
    border-bottom: 1px solid #D2D2D2;
    padding-bottom: 0.06rem;
  }
  .c4{
    font-size: 0.135rem;
    color: #717070;
    padding: 0.1rem 0 0.1rem 0;
    border-bottom: 1px solid #D2D2D2;
  }
  .c4 span{
    font-size: 0.1125rem;
    color: #ffffff;
    background-color: #B81C22;
    padding: 0.0125rem;
    margin: 0 0.05rem 0 0;
  }
</style>
