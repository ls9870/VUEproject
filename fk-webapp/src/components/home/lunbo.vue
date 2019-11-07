<template>
    <div class="lunbo">
        <swiper class='swiper-box' :options="swiperOption" ref="mySwiper" >
<!--          <div class="box">-->
            <swiper-slide><img src="../../assets/home/lunbo/1.jpg" class="swiper-img"></swiper-slide>
            <swiper-slide><img src="../../assets/home/lunbo/6.jpg" ></swiper-slide>
            <swiper-slide><img src="../../assets/home/lunbo/7.jpg" ></swiper-slide>
            <swiper-slide><img src="../../assets/home/lunbo/4.jpg" ></swiper-slide>
            <swiper-slide><img src="../../assets/home/lunbo/5.jpg" ></swiper-slide>
            <swiper-slide><img src="../../assets/home/lunbo/2.jpg" ></swiper-slide>
        </swiper>
    </div>
</template>
<script >
// import '../../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'样式引入imdex.html也可以
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'lunbo',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style scoped>
  .swiper-box{
  }
  img{
    height: 2.36rem;
  }
  /*.swiper-button-next,.swiper-button-prev{*/
  /*  !*display: none;*!*/
  /*}*/
</style>
<!--mounted();{-->
<!--setTimeout(() => {-->
<!--this.asyncCount = 5-->
<!--}, 1000)-->
<!--}-->
<!--data ();{-->
<!--return {-->
<!--swiperOption: {-->
<!--autoplay: 3000,-->
<!--"pagination": '.swiper-pagination',-->
<!--autoplayDisableOnInteraction: false,-->
<!--loop: true-->
<!--},-->
<!--swipers:[]-->
<!--}-->
<!--}-->
