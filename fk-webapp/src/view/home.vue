<template>
    <div id="home">
      <Header></Header>
      <Lunbo></Lunbo>
      <Tnav></Tnav>
      <Xpin></Xpin>
      <MiaoS></MiaoS>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/home/header.vue'
import Lunbo from '../components/home/lunbo.vue'
import Tnav from '../components/home/top-nav.vue'
import Xpin from '../components/home/xinping.vue'
import MiaoS from '../components/home/miaosha.vue'
import Footer from '../components/home/footer.vue'

export default {
  name: "home",
  components:{
    Header,
    Lunbo,
    Tnav,
    Xpin,
    MiaoS,


    Footer
  }
}
</script>

<style scoped>

</style>
