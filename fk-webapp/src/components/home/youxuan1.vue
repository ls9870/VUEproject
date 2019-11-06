<template>
    <div class="youxuan">
       <div class="xp-tu1">
          <img src="../../assets/home/youxuan/tu1.jpg"/>
          <p>优选推荐</p>
        </div>
        <a href="" class="datu">
          <img src="../../assets/home/youxuan/1-20.jpg" class="yx1"/>
          <img src="../../assets/home/s.jpg" class="jiao2"/>
        </a>
<!--      fenye-->
        <div class="fen">
          <swiper class='swiper-box' :options="swiperOption" ref="mySwiper" >
            <swiper-slide ><img src="../../assets/home/youxuan/1-1.jpg" style=" width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/1-2.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/1-3.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/1-5.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/1-6.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/1-7.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/1-8.jpg" style="  width: 1.32rem;height: 1.75rem;"></swiper-slide>
            <swiper-slide><img src="../../assets/home/youxuan/g.jpg" style="  width: 1rem;height: 1.75rem;"></swiper-slide>
          </swiper>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "youxuan",
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
    .xp-tu1{
      display: flex;
      justify-content: flex-start;
      padding: 0.112rem;
      background-color: #FAFAFA;
    }
    p{
      margin-left:  0.1rem;
    }
    .xp-tu1 img{
      width: 0.14rem;
      height: 0.15rem;
    }
    .youxuan{
       width: 100%;
     }
    .yx1{
      width: 100%;
      height: 1.98rem;
    }
    .datu{
      position: relative;
    }
    .jiao2{
      width: 0.28rem;
      height: 0.226rem;
      position: absolute;
      left: 0.1rem;
      top: -0.076rem;
    }
    .fen{
      padding: 0.113rem;
    }
    /*.f{*/
    /*  width: 1.32rem;*/
    /*  height: 1.75rem;*/
    /*}*/
</style>
