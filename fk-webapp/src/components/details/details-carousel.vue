<template>
    <div class="details-carousel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(n,i) in delist" :key="i">
                  <img :src="n.pic" >
                </div>
            </div>
          <!-- 分页器 -->
            <div class="swiper-pagination swiper-pagination-banner"></div>
          <div class="dot-back">
            <div class="p1">充值后相当于￥<span>69</span></div>
            <div class="p2">原价￥:198元</div>
          </div>
        </div>
    </div>
</template>

<script>

import Swiper from 'swiper'
export default {
    name: "details-carousel",
    data() {
      return {
        delist:[
          { pic:"http://47.94.86.251/凡客Vancl/assets/details/1.jpg"},
          { pic:'http://47.94.86.251/凡客Vancl/assets/details/2.jpg' },
          { pic:'http://47.94.86.251/凡客Vancl/assets/details/3.jpg' },
          { pic:'http://47.94.86.251/凡客Vancl/assets/details/4.jpg' },
          { pic:'http://47.94.86.251/凡客Vancl/assets/details/5.jpg' },
          { pic:'http://47.94.86.251/凡客Vancl/assets/details/6.jpg' },
          { pic:'http://47.94.86.251/凡客Vancl/assets/details/8.jpg' }
        ],
      }
    },
    mounted(){
      new Swiper ('.swiper-container', {
        // 轮播图的方向，也可以是vertical方向
        direction:'horizontal',
        // //播放速度
        // loop: true,
        // // 自动播放时间
        // autoplay:true,
        // // 播放的速度
        // speed:2000,
        // 如果需要分页器，即下面的小圆点
        pagination: {
          el: '.swiper-pagination-banner',
          clickable: true,
        },
        // 即使滑动之后 定时器也不会被清除
        autoplayDisableOnInteraction : false,
      });
    }
}
</script>

<style scoped>
  /*.swiper-container{*/
      /*position: relative;*/
  /*}*/
  .swiper-container img{
      height: 100%;
      width: 100%;
  }
  .dot-back{
      background-color: #B81C22;
      height: 0.45rem;
      width: 100%;
      position: absolute;
      top: 331px;
      z-index: 9;
      display: flex;
      justify-content: space-between;
  }
  .p1{
      color: #ffffff;
      line-height: 0.45rem;
      padding-left: 0.15rem;
  }
  .p1 span{
      font-size: 0.3rem;
  }
  .p2{
      color: #ffffff;
      line-height: 0.45rem;
      padding-right: 0.15rem;
  }
</style>
