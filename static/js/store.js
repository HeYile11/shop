import Vue from 'vue'
import Vuex from 'vuex'
// 将此处的store 所使用的vuex导入main.js中
Vue.use(Vuex)
var store = new Vuex.Store({
  // 存储状态
  state: {
    lists: [ // 加入购物车的商品
      {
        type: '手机:',
        content: []
      },
      {
        type: '耳机',
        content: []
      },
      {
        type: '生活',
        content: []
      }
    ],
    success: [], // 已经购买的商品
    search: '', // 查询信息
    moblie: 0
  }
})

export default store
