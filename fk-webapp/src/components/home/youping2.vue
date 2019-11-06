<template>
    <div class="youping2">
      <a href="" class="datu">
        <img src="../../assets/home/youxuan2/1-20.jpg" class="yx1"/>
        <img src="../../assets/home/youxuan2/s.jpg" class="jiao2"/>
      </a>
      <!--      fenye-->
      <div class="fen">
<!--        <a href="" >-->
          <swiper class='swiper-box' :options="swiperOption" ref="mySwiper" >
            <swiper-slide ><img src="../../assets/home/youxuan2/1-1.jpg" style=" width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan2/1-2.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan2/1-3.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan2/1-5.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan2/1-6.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan2/1-7.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan2/1-8.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/g.jpg" style="  width: 1rem;height: 1.75rem;"></swiper-slide>
          </swiper>
<!--        </a>-->
      </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: "youping2",
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        slidesPerView : 3,
        slidesPerGroup : 1,
        spaceBetween : 60,
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
  .yx1{
    width: 100%;
    height: 1.98rem;
  }
  .datu{
    position: relative;
  }
  .jiao2{
    width: 0.28rem;
    height: 0.34rem;
    position: absolute;
    left: 0.1rem;
    top: -0.18rem;
  }
  .fen{
    padding: 0.113rem;
  }
  /*.f{*/
  /*  width: 1.32rem;*/
  /*  height: 1.75rem;*/
  /*}*/
</style>
