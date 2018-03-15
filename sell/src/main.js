// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.config.productionTip = false;

//1、导入组件
import Goods from './components/goods/Goods'
import Ratings from './components/ratings/Ratings'
import Seller from './components/seller/Seller'

//安装 vue-router
Vue.use(VueRouter);
//如果在其他组件中使用axios命令，需要改写为Vue原型属性
Vue.prototype.$axios=axios;


//2、定义路由
const routes=[
  {
    path:'/',
    //重定向
    redirect:'/goods'
  },
  {
    path:'/goods',
    component:Goods
  },
  {
    path:'/ratings',
    component:Ratings
  },
  {
    path:'/seller',
    component:Seller
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置

const router = new VueRouter({
  routes:routes,  // （缩写）相当于 routes: routes
  linkActiveClass:'active',  //选中后的类名（默认值是router-link-active）
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 4. 创建和挂载根实例。
  router
});
