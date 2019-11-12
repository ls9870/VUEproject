<template>
    <div class="Details">
        <details-top></details-top>
        <details-carousel></details-carousel>
     <div class="box">
        <details-con1></details-con1>
        <details-con2></details-con2>
     </div>

        <details-footer> </details-footer>
    </div>
</template>

<script>
import DetailsTop from '../components/details/details-top'
import DetailsCarousel from '../components/details/details-carousel'
import DetailsCon1 from '../components/details/details-con1'
import DetailsCon2 from '../components/details/details-con2'
import DetailsFooter from '../components/details/details-footer'

export default {
    name: "detail",
    components:{
      DetailsTop,
      DetailsCarousel,
      DetailsCon1,
      DetailsCon2,
      DetailsFooter
    }
}
</script>

<style scoped>
  .box{
    padding: 0.056rem 0.2rem;
  }
</style>
