<template>
    <div class="goshopping">
        <Top></Top>
        <Con></Con>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from '../components/goshopping/go-top'
import Con from '../components/goshopping/go-con'
import Footer from '../components/goshopping/go-footer'
export default {
    name: "goshopping",
    components:{
      Top,
      Footer,
      Con
    }
}
</script>

<style scoped>

</style>
