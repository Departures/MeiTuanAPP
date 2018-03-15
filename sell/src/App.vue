<template>
  <div id="app">
    <myheader :poiInfo="poiInfo"></myheader>

    <mynav></mynav>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <!--<div class="content">
      content
    </div>-->
  </div>
</template>

<script>
//1、导入
import Myheader from './components/header/Header.vue';
import Mynav from './components/Nav/Nav.vue';
export default {
  name: 'App',
  components: {
//2、注册
    Myheader,
    Mynav,
  },
  data(){
    return{
      //header组件需要的商家信息
      poiInfo:{}
    }
  },
  created(){
    var that=this;
    // Make a request for a user with a given ID
    this.$axios.get('/api/goods')
      .then(function (response) {
        //console.log(response);
        var dataSource = response.data;
        //console.log(dataSource)
        if(dataSource.code==0){
          that.poiInfo=dataSource.data.poi_info;
          //console.log(dataSource.data.poi_info);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}
</script>

<style>

</style>
