<template>
  <div class="pindao" >
      <Pdt></Pdt>
      <Pdc></Pdc>
      <Pdf></Pdf>
  </div>
</template>

<script>
import Pdt from '../components/hbos/pin-top'
import Pdc from '../components/hbos/pin-conter'
import Pdf from '../components/hbos/pin-foooter'

export default {
    name: "pindao",
    components:{
      Pdt,
      Pdc,
      Pdf
    }
}
</script>

<style scoped>

</style>
