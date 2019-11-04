<template>
  <div class="box-search">
    <div class="search">
      <input type="text" name="search" id="search" value="熊本熊"/>
    </div>
  </div>
</template>
<script>
export default {
    name: "header"
}
</script>

<style scoped>
  .box-search{
    width: 100%;
    height: 0.45rem;
    background:gradient(rgba(209,207,207,1),rgba(209,207,207,0.2));
  }

  /*.box-search{*/
  /*  background-color:gradient(rgba(209,207,207,1),rgba(209,207,207,0.2));*/
  /*}*/
</style>
