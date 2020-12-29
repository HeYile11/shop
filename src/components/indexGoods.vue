<template>
  <div class="app_index" v-if="search_product === '' && mobile_navbar === 0">
    <div class="container">
      <ul v-for='(product , index01) in productList' :key="index01">
        <span class="col-lg-6 " v-for="(me , index02) in product.content" :key="index02" v-if="index01 == 0 && (index02 == 0 || index02 == 1)">
          <a @click="$goRoute('/goodDetail', me.goodid)" href="javascript:void(0)">
            <li class="lione">
              <br/>
              <h4>{{me.name}}</h4>
              {{me.introduce}}<br/>
              <h4 style="color: red">￥&nbsp;{{me.price}}</h4>
              <img class='imagebig'  :src="me.img" ><br/>
            </li>
          </a>
        </span>
        <span v-else-if="index01 == 0" class="col-lg-4" >
          <a @click="$goRoute('/goodDetail', me.goodid)" href="javascript:void(0)">
            <li >
              <img :src="me.img" ><br/>
                <h5>{{me.name}}</h5>
              <h6>{{me.introduce}}</h6>
                <h4 style="color: red">￥&nbsp;{{me.price}}</h4>
            </li>
          </a>
        </span>
      </ul>
    </div>
      <a class= 'isshow' href="javascript:void(0)"><img @click="$goRoute('/goodDetail', 7)" style="width: 80% ; height: 80%" src="../assets/backround/meizu_ep63nc_earphone_backround.jpg"></a>
    <div class="container">
    <ul v-for='(product , index01) in productList' :key="index01">
          <span class="col-lg-4" v-for="(me , index02) in product.content" :key="index02" v-if="index01 === 1 && index02 !== 0">
            <a @click="$goRoute('/goodDetail', me.goodid, me)" href="javascript:void(0)">
              <li  class="litwo">
                <img style="margin-top: 50px" :src="me.img" ><br/><br/>
                  <h5>{{me.name}}</h5>
                <h6>{{me.introduce}}</h6>
                  <h4 style="color: red">￥&nbsp;{{me.price}}</h4>
              </li>
            </a>
          </span>
          <span v-else-if="index01 === 1" class="col-lg-4" >
            <a @click="$goRoute('/goodDetail', me.goodid)" href="javascript:void(0)">
              <li class="earphone_box">
                  <h4 style="padding-top: 250px; color: white">{{me.name}}</h4>
                  <h6 style="color: white">{{me.introduce}}</h6>
                  <h4 style="color: powderblue">￥&nbsp;{{me.price}}</h4>
              </li>
            </a>
          </span>
      </ul>
    </div>
    <a class= 'isshow' href="javascript:void(0)"><img @click="$goRoute('/goodDetail', 12)" style="width: 80% ; height: 80%" src="../assets/backround/meizu_shubiaodian_backround.jpg"></a>
    <div class="container">
      <ul v-for='(product , index01) in productList' :key="index01">
            <span class="col-lg-4" v-for="(me , index02) in product.content" :key="index02" v-if="index01 === 2 && index02 !== 0">
              <a @click="$goRoute('/goodDetail', me.goodid)" href="javascript:void(0)">
                <li class="litwo">
                  <img style="margin-top: 50px" :src="me.img" ><br/><br/>
                    <h5>{{me.name}}</h5>
                  <h6>{{me.introduce}}</h6>
                    <h4 style="color: red">￥&nbsp;{{me.price}}</h4>
                </li>
              </a>
            </span>
            <span v-else-if="index01 === 2" class="col-lg-4" >
              <a @click="$goRoute('/goodDetail', me.goodid)" href="javascript:void(0)">
                <li class="life_box">
                    <h4 style="padding-top: 250px; color: white">{{me.name}}</h4>
                  <h6 style="color: white">{{me.introduce}}</h6>
                    <h4 style="color: powderblue">￥&nbsp;{{me.price}}</h4>
                </li>
              </a>
            </span>
      </ul>
    </div>
  </div>
  <div v-else-if="search_product === ''" class="app_index">
    <div class="container">
      <ul v-for='(product , index01) in productList' :key="index01" v-if="index01 === mobile_navbar-1">
        <span class="col-lg-4" v-for="(me , index02) in product.content" :key="index02" >
          <a @click="$goRoute('/goodDetail', me.goodid)" href="javascript:void(0)" >
            <li >
              <img :src="me.img" ><br/>
              <h5>{{me.name}}</h5>
              <h6>{{me.introduce}}</h6>
              <h4 style="color: red">￥&nbsp;{{me.price}}</h4>
            </li>
          </a>
        </span>
      </ul>
    </div>
  </div>
  <div v-else class="app_index">
    <div class="container">
      <ul v-for='(product , index01) in productList' :key="index01" >
        <span class="col-lg-4" v-for="(me , index02) in product.content" :key="index02" v-if="search_product !== '' && me.name.indexOf(search_product) !== -1">
          <a @click="$goRoute('/goodDetail', me.goodid)" href="javascript:void(0)" >
            <li >
              <img :src="me.img" ><br/>
              <h5>{{me.name}}</h5>
              <h6>{{me.introduce}}</h6>
              <h4 style="color: red">￥&nbsp;{{me.price}}</h4>
            </li>
          </a>
        </span>
      </ul>
    </div>
  </div>
</template>

<script>
// 子组件接受父组件传来的商品信息进行排版
export default {
  name: 'indexGoods',
  computed: {
    search_product: function () {
      return this.$store.state.search
    },
    mobile_navbar: function () {
      return this.$store.state.moblie
    }
  },
  props: {
    'productList': [Array]
  }
  /* ,
  filters: { // 过滤器
      // myInput是通过管道传来的数据
      // arg1在调用过滤器时在圆括号中第一个参数
      // arg2在调用过滤器时在圆括号中第二个参数
      myname: function (myInput, arg1, arg2)
      {
        return 处理后的数据
      }
    }
    */
}
</script>

<style scoped>

  .app_index{
    text-align: center;
    margin-top: 10px
  }
  li {
    list-style:none;
    background-color: aliceblue;
    margin: 10px;
  }
  img {
    weight: 150px;
    height: 150px;
  }
  a {
    text-decoration: none;
  }
  .earphone_box{
    width: 319px;
    height: 363px;
    background-size: 100% 100%;
    background-image: url("../assets/index_background/meizu_earphone_pop2_index_background.jpg");
  }

  .life_box{
    width: 319px;
    height: 363px;
    background-size: 100% 100%;
    background-image: url("../assets/index_background/meizu_bag_shuangjianbao_background.jpg");
  }
  .imagebig {
    width: 300px;
    height: 300px
  }
  .litwo {
    width: 319px;
    height: 369px
  }
  @media (max-width:780px) {
    .imagebig {
      width: 80px;
      height: 80px
    }
    img {
      width: 80px;
      height: 80px
    }
    li {
      width: 140px;
      height: 140px;
      margin-left: 25%;
      background-color: white;
    }
    .lione {
      width: 140px;
      height: 200px;
    }
    .litwo {
      width: 140px;
      height: 180px
    }
    .earphone_box {
      display: none;
    }
    .life_box {
      display: none;
    }
    .isshow {
      display: none;
    }
    .app_index{
      margin-top: 0;
    }
  }
</style>
