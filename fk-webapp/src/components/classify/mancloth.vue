<template>
  <div class="mancloth" >
    <div v-for='n in list2' class="bos-img" >
      <img :src="n.pic"  />
      <div>{{n.txt}}</div>
    </div>
  </div>
</template>

<script>
import apisone from '../../../../fk-webapp-api/apis/list2'
export default {
    name: "mancloth",
  data(){
    return{
      list2:[ ] //要从这里获取数据
    }
  },
  methods:{
      _initData(){
        apisone.getCartInfoByUserId(data=>{
          console.log(data)
          this.list2 = data
        })
      }
  },
  created(){
      this._initData()
  }
}
</script>

<style scoped>
  .mancloth{
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
