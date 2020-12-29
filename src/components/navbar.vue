<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand"  href="#">
          <svg  xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#00b4ff" viewBox="17.318 0 402.048 303.556"  width="102.048px" height="73.556px">
          <path d="M 321.513 5.824 H 256.91 v 12.878 h 51.478 l -49.294 44.581 c -8.227 7.023 -2.872 16.096 3.958 16.096 h 65.337 V 66.472 h -52.117 l 48.964 -44.554 C 333.52 14.473 328.535 5.824 321.513 5.824"/>
          <rect x="226.517" y="5.824" width="14.426" height="73.556"/>
          <path d="M 104.296 5.824 h -71.36 c -8.576 0 -15.618 7.012 -15.618 15.588 v 57.967 H 31.14 V 23.743 c 0 -2.711 2.208 -5.041 4.92 -5.041 h 25.31 v 60.677 h 14.428 V 18.702 h 25.312 c 2.712 0 4.919 2.329 4.919 5.041 v 55.636 h 13.86 V 21.416 C 119.888 12.841 112.872 5.824 104.296 5.824"/>
          <path d="M 148.765 23.614 c 0 -2.712 2.199 -4.912 4.911 -4.912 h 55.909 V 5.824 h -58.236 c -8.576 0 -15.592 7.016 -15.592 15.592 v 42.37 c 0 8.576 7.017 15.592 15.592 15.592 h 58.236 V 66.5 h -55.909 c -2.711 0 -4.911 -2.199 -4.911 -4.912 V 49.042 h 58.43 V 36.117 h -58.43 V 23.614 Z"/>
          <path d="M 405.506 5.824 v 55.637 c 0 2.71 -2.22 5.039 -4.931 5.039 h -39.77 c -2.711 0 -4.892 -2.328 -4.892 -5.039 V 5.824 h -13.86 v 57.963 c 0 8.576 7.018 15.592 15.592 15.592 h 46.127 c 8.575 0 15.592 -7.017 15.592 -15.592 V 5.824 H 405.506 Z"/>
          </svg>
        </a>
        <!-- 当进入最小设备时，导航条将隐藏，显示“汉堡按钮”，点击时可以切面显示导航条隐藏的信息
      * data-target ：用于确定需要显示div
        -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
          <span class="sr-only">汉堡按钮</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <form class="navbar-form navbar-right collapse navbar-collapse" id='navbar-collapse' role="search" style="margin-right: 150px">
        <div class="form-group">
          <ul class="nav navbar-nav" style="margin-right: 100px">
            <li @click="addsearch(1)"><a href="javascript:void(0)">手机</a></li>
            <li @click="addsearch(2)"><a href="javascript:void(0)">声学</a></li>
            <li ><a href="javascript:void(0)">配件</a></li>
            <li @click="addsearch(3)"><a href="javascript:void(0)">生活</a></li>
            <li ><a href="javascript:void(0)">flyme</a></li>
            <li><a href="javascript:void(0)">服务</a></li>
          </ul>
          <input style="margin-right: 5px; margin-top: 8px" type="text" class="form-control" placeholder="魅族X6s" v-model="search">
        </div>
        <a href="javascript:void(0)"><img width="30px" height="25px" style="margin-right: 30px" src="../assets/configpic/select_pic.png" @click="search_button"/></a>
        <a @click="$goRoute('/cart')" href="javascript:void(0)"><img width="34px" height="34px" src="../assets/configpic/shappingcart_pic.png"/><span class="badge">{{number}}</span></a>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  // width="102.048px" height="73.556px"
  name: 'navbar',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    // 加入购物车的商品
    number: function () {
      var num = 0
      var productlist = this.$store.state.lists
      num += productlist[0].content.length
      num += productlist[1].content.length
      num += productlist[2].content.length
      return num
    }
  },
  methods: {
    search_button: function () {
      this.$store.state.search = this.search // 将search加入store 获取查询信息
      if (this.$store.state.moblie !== 0) {
        this.$store.state.moblie = 0
      }
    },
    addsearch: function (index) {
      this.$store.state.search = ''
      if (this.$store.state.moblie === index) {
        this.$store.state.moblie = 0
      } else {
        this.$store.state.moblie = index
      }
    }
  }
}
</script>

<style scoped>
  svg {
    margin-left: 300px;
    margin-top: 8px
  }

  @media (max-width:1300px) {
    svg {
      margin-left: 0;
      margin-top: 0
    }
  }
</style>
