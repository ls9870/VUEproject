<template>
    <div class="xinping">
      <div class="xp-tu1">
        <img src="../../assets/home/xinping/6.jpg"/>
        <p v-for="n in mas" >{{n}}</p>
      </div>
<!--      <a href="" >-->
        <swiper class='swiper-box' :options="swiperOption" ref="mySwiper" >
          <!--          <div class="box">-->
          <swiper-slide ><img src="../../assets/home/xinping/1.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/2.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/3.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/4.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/5.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/7.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/8.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/9.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/10.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/11.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
          <swiper-slide><img src="../../assets/home/xinping/12.jpg" style=" width: 1.6rem;height: 1rem;"></swiper-slide>
        </swiper>
             <!-- 分页器 -->
<!--        <div class="swiper-pagination"></div>-->
<!--      </a>-->
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'xinping',
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      mas:['新品上新'],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        slidesPerView : 3, // 设置slider容器能够同时显示的3个slides。
        slidesPerGroup : 1, // 设置slides的数量ji个为一组。
        spaceBetween : 127, // 设置slide间的间距
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
}
</script>

<style scoped>
  .xp-tu1{
    display: flex;
    justify-content: flex-start;
    padding-left: 0.112rem;
    background-color: #FAFAFA;
    align-items: center;
  }
  p{
    margin-left:  0.1rem;
    color: black;
    font-size: 0.146rem;
  }
  .xp-tu1 img{
    width: 0.14rem;
    height: 0.15rem;
  }
  a{
    height: 0.8rem;
  }
</style>
