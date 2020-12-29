<template>
  <div class="container">
    <div  class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">购物车</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped"  v-if="productList[0].content.length !== 0 || productList[1].content.length !== 0 || productList[2].content.length !== 0">
          <thead >
          <tr>
            <th><button  class="btn" @click="selectAll">全选</button>
              <button  class="btn" @click="cancelAll">重选</button></th>
            </tr>
          <tr>
            <th></th>
            <th>商品</th>
            <th></th>
            <th>内存/颜色</th>
            <th class="ishow">网络/名称</th>
            <th class="ishow">套餐</th>
            <th class="ishow">单价</th>
            <th>数量</th>
            <th>金额</th>
            <th class="ishow">操作</th>
          </tr>
          </thead>

          <tbody style="color: deepskyblue;" v-for='(product , index01) in productList' :key="index01">
            <tr v-if="product.content.length !== 0">{{product.type}}</tr>
            <tr v-for="(me , index02) in product.content" :key="index02">
              <td><input type="checkbox" v-model="me.stypeid"/></td>
              <td >{{me.name}}</td>
              <td><img :src="me.src" ></td>
              <td>{{me.edition}}</td>
              <td class="ishow">{{me.internet}}</td>
              <td class="ishow">{{me.taocan}}</td>
              <td class="ishow">￥{{me.price}}</td>
              <td ><button class="btn btn-sm" @click="productRed(index01 , index02)"> &nbsp; <span class="glyphicon glyphicon-minus"></span> &nbsp;</button>&nbsp;&nbsp;{{me.count}}&nbsp;&nbsp;
                <button class="btn btn-sm"  @click="productAdd(index01 , index02)" >&nbsp; <span class="glyphicon glyphicon-plus"></span> &nbsp;</button></td>
              <td >{{me.count * me.price}}</td>
              <td class="ishow"><button class="btn" @click="removePro(index01, index02)" >删除</button></td>
            </tr>
          </tbody>
        </table>
        <div v-if="productList[0].content.length === 0 && productList[1].content.length === 0 && productList[2].content.length === 0">你还没有加入任何商品，快去加入吧</div>
      </div>
      <div class="panel-footer" style="text-align: right;font-size: 20px; margin-right: 20px; color: red">
        <button class="btn pull-left"  @click="removeSelected">删除所选</button>
        <button style="margin-left: 30px" class="pull-right btn btn-success" @click="successbar">去结算</button>
        总价为 ￥ {{totalPrice}}
      </div>
      <!-- 购买成功后 -->
      <div  class="panel panel-default" style="margin-top: 20px" v-if="success.length !== 0" >
        <div class="panel-heading">
          <h3 class="panel-title">已购买</h3>
        </div>
        <table class="table table-striped" >
          <thead>
          <th></th>
          <th></th>
          <th>商品</th>
          <th></th>
          <th>内存/颜色</th>
          <th >网络/名称</th>
          <th>套餐</th>
          <th>数量</th>
          <th>金额</th>
          </thead>
        <tbody style="color: cyan;" v-for='(product , index01) in success' :key="index01">
        <tr >
          <td></td>
          <td><span class="glyphicon glyphicon-ok-circle"></span></td>
          <td >{{product.name}}</td>
          <td><img :src="product.src"></td>
          <td>{{product.edition}}</td>
          <td>{{product.internet}}</td>
          <td>{{product.taocan}}</td>
          <td >&nbsp;&nbsp;{{product.count}}&nbsp;&nbsp;
            &nbsp;&nbsp;</td>
          <td >{{totalPrice}}</td>
          <td></td>
        </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import add from '../../static/js/getsum'
// vuex
export default {
  name: 'cart',
  computed: {
    // 将读取store的值
    // 加入购物车的商品
    productList: function () {
      return this.$store.state.lists
    },
    // 已购买的商品
    success: function () {
      return this.$store.state.success
    },
    totalPrice: function () {
      let aux = 0
      for (let i = 0; i < this.productList.length; i++) {
        for (let j = 0; j < this.productList[i].content.length; j++) {
          if (this.productList[i].content[j].stypeid !== false) {
            aux = 1
            break
          }
        }
      }
      let total = 0
      if (aux === 1) {
        total = add(this.productList) // 利用es6的方法
      } else {
        total = this.countAllprice()
      }
      return total.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    }
  },
  methods: {
    removePro: function (index01, index02) {
      if (this.productList[index01].content.length === 0) {
      } else {
        this.productList[index01].content.splice(index02, 1)
      }
    },
    productAdd: function (index01, index02) {
      this.productList[index01].content[index02].count += 1
      this.productList[index01].content[index02].numprice = this.productList[index01].content[index02].count * this.productList[index01].content[index02].price
    },
    productRed: function (index01, index02) {
      if (this.productList[index01].content[index02].count === 1) {
        return
      }
      this.productList[index01].content[index02].count -= 1
      this.productList[index01].content[index02].numprice = this.productList[index01].content[index02].count * this.productList[index01].content[index02].price
    },
    selectAll: function () {
      for (var i = 0; i < this.productList.length; i++) {
        for (var j = 0; j < this.productList[i].content.length; j++) {
          if (this.productList[i].content[j].stypeid === true) {
            this.productList[i].content[j].stypeid = false
          } else {
            this.productList[i].content[j].stypeid = true
          }
        }
      }
    },
    cancelAll: function () {
      for (var i = 0; i < this.productList.length; i++) {
        for (var j = 0; j < this.productList[i].content.length; j++) {
          this.productList[i].content[j].stypeid = false
        }
      }
    },
    removeSelected: function () {
      for (var i = this.productList.length - 1; i >= 0; i--) {
        for (var j = this.productList[i].content.length - 1; j >= 0; j--) {
          if (this.productList[i].content[j].stypeid === true) {
            this.removePro(i, j)
          }
        }
      }
    },
    countAllprice: function () {
      var total = 0
      for (var i = 0; i < this.productList.length; i++) {
        for (var j = 0; j < this.productList[i].content.length; j++) {
          total += this.productList[i].content[j].numprice
        }
      }
      return total
    },
    successbar: function () {
      var allname = ''
      var vux = 1
      // 判断是否选择商品
      for (var i = 0; i < this.productList.length; i++) {
        for (var j = 0; j < this.productList[i].content.length; j++) {
          if (this.productList[i].content[j].stypeid === true) {
            vux = 0
          }
        }
      }
      // 如果选择商品
      if (vux === 0) {
        for (i = 0; i < this.productList.length; i++) {
          for (j = 0; j < this.productList[i].content.length; j++) {
            if (this.productList[i].content[j].stypeid === true) {
              // 商品名连成字符串
              allname += this.productList[i].content[j].name
              allname += '\n'
              // 将商品标记为已购买、
            }
          }
        }
        alert('您购买的商品 ：' + allname + '总价为 :' + this.totalPrice + '元')
        for (i = this.productList.length - 1; i >= 0; i--) {
          for (j = this.productList[i].content.length - 1; j >= 0; j--) {
            if (this.productList[i].content[j].stypeid === true) {
              this.$store.state.success.push(this.productList[i].content[j])
              this.removePro(i, j)
            }
          }
        }
      } else {
        alert('您未选择商品')
      }
    }
  }
}
</script>

<style scoped>
  img{
    width: 100px;
    height: 100px
  }
@media (max-width:780px) {
  .ishow {
    display: none;
  }
  img{
    width: 70px;
    height: 70px
  }
}
</style>
