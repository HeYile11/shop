<template>
  <child-goodsdetail-list :goodrouteid=goodid>
  </child-goodsdetail-list>
</template>

<script>
// 引入child_goodsdetail_list子组件
import childGoodsdetailList from '@/components/child_goodsdetail_list'
// 父组件
export default {
  name: 'goodsDetail',
  data () {
    return {
      goodid: Number(this.$route.query.ID)
    }
  },
  components: {
    childGoodsdetailList
  },
  watch: { // 对路由进行监听如果变化就执行getpath
    '$route': 'reflashrouter'
  },
  methods: {
    reflashrouter () {
      this.goodid = Number(this.$route.query.ID)
    }
  }
}
</script>

<style scoped>

</style>
