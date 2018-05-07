import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/test'

import GoodsList from '@/views/GoodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
