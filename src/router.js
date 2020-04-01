import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import home from '@/components/home/home'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: home }
  ]
})