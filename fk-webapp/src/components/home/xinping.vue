<template>
    <div class="xinping">
      <div class="xp-tu1">
        <img src="../../assets/home/xinping/6.jpg"/>
        <p>新品上新</p>
      </div>
      <a href="" >
        <img src="../../assets/home/xinping/1.jpg" class="lb"/>
      </a>
    </div>
</template>
<script>
export default {
    name: "xinping",
    // data( ){
    //   return{
    //     list:[{
    //       'img':'../../assets/home/xinping/1.jpg'
    //     },
    //     {
    //       'img':'../../assets/home/xinping/2.jpg'
    //     }
    //
    //     ]
    //   }
    // }
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
  a{
    height: 0.8rem;
  }
  .lb{
    width: 1.6rem;
    height: 1rem;
  }
</style>
