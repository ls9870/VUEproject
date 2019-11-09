<template>
    <div class="pin-content">
      <div v-for="n in list3">
<!--        <a href="">-->
          <img :src="n.pic">
<!--        </a>-->
      </div>
    </div>
</template>

<script>

export default {
    name: "pin-content" ,
    data(){
      return{
        list3:[
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/1.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/2.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/3.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/4.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/5.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/6.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/7.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/8.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/9.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/10.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/11.jpg'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/hbo/12.jpg'}
        ]
      }
    }
}
</script>

<style scoped>
  .pin-content{
    width: 100%;
  }
  img{
    height: 2.345rem;
    margin: 0.03rem 0 -0.002rem 0;
  }
  .pin-content{
    margin-bottom: 0.5rem;
  }
</style>
