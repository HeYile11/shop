import Vue from 'vue'
import Router from 'vue-router'
import goodsDetail from '@/components/goodsDetail'
import backround from '../components/backround'
import navbar from '../components/navbar'
import goodsList from '../components/goodsList'
import cart from '../components/cart'
import navbarcart from '../components/navbarcart'

Vue.use(Router)
export default new Router({
  mode: 'history', // 去掉#
  routes: [
    {
      path: '/cart',
      name: 'cart',
      components: {
        navbarcart,
        cart
      }
    },
    {
      path: '/',
      name: 'backround',
      components: { // 多个组件加s
        navbar,
        backround,
        goodsList
      }
    },
    {
      path: '/goodDetail',
      name: 'detail',
      components: {
        navbar,
        goodsDetail
      }
    }
  ]
})
