<template>
    <div class="youxuan3">
      <div class="xp-tu1">
        <img src="../../assets/home/youxuan/tu1.jpg"/>
        <p>优选推荐</p>
      </div>
      <a href="" class="datu">
        <img src="../../assets/home/youxuan3/1-20.jpg" class="yx1"/>
        <img src="../../assets/home/s.jpg" class="jiao2"/>
      </a>
      <!--      fenye-->
      <div class="fen">
        <a href="" >
          <img src="../../assets/home/youxuan3/1-1.jpg" class="f">
        </a>
      </div>
    </div>
</template>

<script>
export default {
    name: "youxuan3"
}
</script>

<style scoped>
  .xp-tu1{
    display: flex;
    justify-content: flex-start;
    padding: 0.112rem;
    background-color: #FAFAFA;
  }
  p{
    margin-left:  0.1rem;
  }
  .xp-tu1 img{
    width: 0.14rem;
    height: 0.15rem;
  }
  .yx1{
    width: 100%;
    height: 1.98rem;
  }
  .datu{
    position: relative;
  }
  .jiao2{
    width: 0.28rem;
    height: 0.226rem;
    position: absolute;
    left: 0.1rem;
    top: -0.076rem;
  }
  .fen{
    padding: 0.113rem;
  }
  .f{
    width: 1.32rem;
    height: 1.75rem;
  }
</style>
