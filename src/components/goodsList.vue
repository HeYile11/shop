<template>
<div>
    <index-goods :productList=productList>
    </index-goods>
</div>
</template>

<script>
// 父组件的商品信息传给子组件进行排版
import indexGoods from '@/components/indexGoods'
import api from './../axios/api'

export default {
  name: 'goodsList',
  components: {
    indexGoods
  },
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.setNewsApi()
  },
  methods: {
    setNewsApi: function () {
      api.JH_news('/index', 'type=top&key=12345')
        .then(res => {
          this.productList = res.productList
        })
    }
  }
}
</script>

<style scoped>

</style>
