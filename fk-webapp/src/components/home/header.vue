<template>
  <div class="box-search">
    <div class="search">
      <a href="">
        <img src="../../assets/home/search2.jpg">
      </a>
      <input type="text" name="search" id="search" value="熊本熊"/>
      <div class="mas">
        <span>...</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "box-search"
}
</script>

<style scoped>
  .box-search{
    width: 100%;
    height: 0.45rem;
    background: linear-gradient(rgba(209, 207, 207, 1), rgba(209, 207, 207,0.2));
    position: fixed;
    top: 0;
    z-index: 9;
  }
  #search{
    height: 0.24rem;
    border-radius: 1rem;
    outline: none;
    border: #BDBBBC 1px solid;
    width: 76%;
    padding-left: 0.35rem;
    margin: 0.1rem 0 0.09rem 0.1rem;
    position: relative;
    color: #858585;
  }
  img{
    width: 0.16rem;
    height: 0.16rem;
    position: absolute;
    top: 0.15rem;
    left: 0.2rem;
  }
  .mas{
    width: 0.22rem;
    height: 0.17rem;
    border: 1px #BDBBBC solid;
    border-radius: 0.12rem;
    display: inline-block;
    margin-left: 0.1rem;
    position: relative;
    top: 0.03rem;
  }
  span{
    position: absolute;
    top: -0.06rem;
    left: 0.06rem;
    color: #BDBBBC;
  }
</style>
