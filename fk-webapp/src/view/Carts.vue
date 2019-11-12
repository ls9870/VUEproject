<template>
    <div class="Carts" ref="key">
        <top > </top>
        <div> </div>
        <con-box></con-box>
        <foot></foot>
    </div>
</template>

<script>
import top from '../components/shoppingCart/carts-top'
import conBox from '../components/shoppingCart/con-box'
import foot from '../components/shoppingCart/carts-footer'

export default {
    name: "Carts",
    components:{
      top,
      conBox,
      foot
    },
}
</script>

<style scoped>

</style>
