<template>
    <div class="lunbo">
        <swiper class='swiper-box'>
            <swiper-slide >
               <img src="../../assets/home/lunbo/1.jpg" class="swiper-img">
            </swiper-slide>
            <swiper-slide >
               <img src="../../assets/home/lunbo/2.jpg" >
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "lunbo",
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  .swiper-box{
    display: flex;
  }
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
