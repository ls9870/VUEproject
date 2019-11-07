<template>
    <div class="miaosha">
      <div class="xp-tu1">
        <span></span>
        <p>每日秒杀</p>
        <p style="font-size: 0.096rem;line-height: 0.2rem;color: #ADADAD;">| 15点场</p>
      </div>
      <swiper class='swiper-box' :options="swiperOption" ref="mySwiper" >
        <swiper-slide ><img src="../../assets/home/miaosha/6375351-1j201611011617463143.jpg" style=" width: 0.97rem;height: 1.25rem;"></swiper-slide>
        <swiper-slide><img src="../../assets/home/miaosha/6378401-1j201801111409218163.jpg" style=" width: 0.97rem;height: 1.25rem;"></swiper-slide>
        <swiper-slide><img src="../../assets/home/miaosha/6385374-1j201903271435312940.jpg" style=" width: 0.97rem;height: 1.25rem;"></swiper-slide>
        <swiper-slide><img src="../../assets/home/miaosha/6385381-1j201903271435214188.jpg" style=" width: 0.97rem;height: 1.25rem;"></swiper-slide>
        <swiper-slide><img src="../../assets/home/miaosha/6385391-1j201903271435462944.jpg" style=" width: 0.97rem;height: 1.25rem;"></swiper-slide>
        <swiper-slide><img src="../../assets/home/miaosha/6385459-1j201904241040200382.jpg" style=" width: 0.97rem;height: 1.25rem;"></swiper-slide>
        <swiper-slide><img src="../../assets/home/miaosha/6386636-1j201910091715436776.jpg" style=" width: 0.97rem;height: 1.25rem;"></swiper-slide>
        <swiper-slide><img src="../../assets/home/miaosha/gen.jpg" style=" ;height: 1.25rem;"></swiper-slide>
      </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: "miaosha",
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return{
        swiperOption: {
          slidesPerView : 3, // 设置slider容器能够同时显示的3个slides。
          slidesPerGroup : 1, // 设置slides的数量ji个为一组。
          // spaceBetween : , // 设置slide间的间距
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
  .miaosha{
    background-color: #FAFAFA;
  }
  .xp-tu1{
    display: flex;
    justify-content: flex-start;
    padding-left: 0.112rem;
    align-items: center;
  }
  p{
    margin-left:  0.1rem;
    color: black;
    font-size: 0.146rem;
  }
  .xp-tu1 span{
    width: 0.14rem;
    height: 0.15rem;
    background-image: url("../../assets/home/miaosha/wallet-clock-hot.png");
    background-position: 0  -0.14rem;
    background-size: cover;
    background-repeat: no-repeat;
  }
  /*a>img{*/
  /*  width: 0.97rem;*/
  /*  height: 1.25rem;*/
  /*}*/
</style>
