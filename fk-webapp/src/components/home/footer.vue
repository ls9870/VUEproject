<template>
    <div class="footer">
      <a href="">
        <div class="in1"></div>
      </a>

    </div>
</template>
<script>
export default {
    name: "footer"
}
</script>

<style scoped>
    .footer{
      width: 100%;
      height: 0.47rem;
      position: fixed;
      bottom: 0;
      border-top: 1px solid #AAAAAA;

    }
    .footer a{
      width: 0.75rem;
      height: 0.47rem;
    }
    .in1{
      width: 0.337rem;
      height: 0.45rem;
      background-image: url("../../assets/home/footer/in.png");
      /*background-position: 0 0rem;*/
      background-size: 100%;
      background-repeat: no-repeat;
    }
</style>

<!--width: 0.75rem;-->

