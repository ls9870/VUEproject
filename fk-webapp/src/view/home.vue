<template>
    <div id="home" >
      <Header></Header>
      <Lunbo></Lunbo>
      <Tnav></Tnav>
      <Xpin></Xpin>
      <MiaoS></MiaoS>
      <you-xuan></you-xuan>
      <Yp2></Yp2>
      <Yp3></Yp3>
      <Db></Db>
      <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/home/header.vue'
import Lunbo from '../components/home/lunbo.vue'
import Tnav from '../components/home/top-nav.vue'
import Xpin from '../components/home/xinping.vue'
import MiaoS from '../components/home/miaosha.vue'
import Footer from '../components/common/footer.vue'
import YouXuan from '../components/home/youxuan1.vue'
import Db from '../components/home/dibu.vue'
import Yp2 from '../components/home/youping2'
import Yp3 from '../components/home/youxuan3'

export default {
  name: "home",
  components:{
    Header,
    Lunbo,
    Tnav,
    Xpin,
    MiaoS,
    YouXuan,
    Yp2,
    Yp3,
    Db,
    Footer
  }
}
</script>

<style scoped>

</style>
