<template>
    <div class="tuijian" >
      <div  v-for='n in list2' class="bos-img" >
        <img :src="n.pic" />
        <div>{{n.txt}}</div>
      </div>
    </div>
</template>

<script>
export default {
    name: "tuijian",
    data(){
      return{
        list2:[
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/1.jpg', txt:'免烫衬衫'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/2.jpg', txt:'牛津纺衬衫'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/3.jpg', txt:'灯芯绒衬衫'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/4.jpg', txt:'休闲衬衫'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/5.jpg', txt:'法兰绒衬衫'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/6.jpg', txt:'卫衣'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/7.jpg', txt:'针织衫'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/8.jpg', txt:'水柔棉'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/9.jpg', txt:'素色T恤'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/10.jpg', txt:'帆布鞋'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/11.jpg', txt:'休闲鞋'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/12.jpg', txt:'夹克'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/13.jpg', txt:'外套'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/14.jpg', txt:'T恤'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/15.jpg', txt:'童装'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/16.jpg', txt:'大衣'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/17.jpg', txt:'棉衣'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/18.jpg', txt:'羽绒服'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/19.jpg', txt:'休闲裤'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/20.jpg', txt:'牛仔裤'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/0qteph7s15646.jpg', txt:'复古跑'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/21.jpg', txt:'拖鞋'},
          { pic:'http://47.94.86.251/凡客Vancl/assets/classify/tujian/22.jpg', txt:'手机壳'},
        ]
      }
    },
    methods:{

    }
}
</script>

<style scoped>
  .tuijian{
    display: flex;
    flex-wrap: wrap;
  }
  .bos-img{
    font-size: 0.1125rem;
    color: #999999;
    text-align: center;
  }
  .bos-img img{
    width: 0.6964rem;
    height: 0.6964rem;
    margin: 0.056rem 0.116rem 0.05rem 0.116rem;
  }
  .bos-img{
    margin-bottom: 0.05rem;
  }
</style>
