// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../static/js/store' // 导入store ，全局使用vuex

Vue.config.productionTip = false
// 引入mock。js
require('../static/js/mock.js')

Vue.prototype.$goRoute = function (path, number) {
  this.$router.push({path: path, query: {ID: number}})
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 添加到此处，全局可以使用vuex
  components: { App },
  template: '<App/>'
})
