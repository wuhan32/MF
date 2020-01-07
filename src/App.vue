<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }

  },

  
};

</script>

<style lang="less" scoped>
@import "assets/css/base.css";
@import "assets/css/timeline.min.css";
@media screen and (max-width: 1100px ) {
  #app {
   width: 1600px; 
  }
}
</style>