<template >
<div class="container">
  <!-- 左边-->
  <span class="col-lg-6" v-for='(product, index01) in content' :key="'zuobian'+index01" v-if="goodrouteid === product.goodid">
    <ul >
      <li >
        <img class="imgone" :src=product.src v-if="src === ''">
        <img class="imgone" v-bind:src=src v-else>
      </li>
      <span v-for="(index, index03) in product.img_index_s" :key="index03">
        <a href="javascript:void(0)">
        <li @click="changeimg_index(index03+1)" class="col-lg-2 litwo" >
         <img class="imgsmall" :src="index.img_s" />
        </li>
        </a>
      </span>
    </ul>
  </span>
  <!-- 右边-->
  <span style="text-align: left" class="col-lg-6" v-for='(product, index01) in content' :key="'youbian'+index01"  v-if="goodrouteid === product.goodid">
    <div>
      <h3 style="font-weight: bold" >{{product.name}}</h3>
      <div style=" color: red">{{product.introduce02}}</div>
      <div class="price" ><span style="font-size: 20px">&nbsp;&nbsp;&nbsp;￥</span> {{product.price}}<br/>
        <span class="priceintroduce">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ product.priceintroduce }}</span>
      </div>
      <!-- 支持-->
      <div class="else_info">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;花呗分期
        <span class="glyphicon glyphicon-ok-circle"></span>&nbsp;&nbsp;&nbsp;顺丰发货
        <span class="glyphicon glyphicon-ok-circle"></span>&nbsp;&nbsp;&nbsp;7天无理由退货
        <span class="glyphicon glyphicon-ok-circle"></span>
      </div>
      <!-- 网络类型 | 型号-->
      <div class="else_info"><span v-if="goodrouteid  >= 1 && goodrouteid <= 5">网络类型:</span>
        <span v-else>型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:</span>
       <span  v-for="(inter, index) in product.internet" :key="index">
         <a class="box" :style="back_ground_color_bding_01_inter" @click="change_background_color_bding_box_inter(1)" href="javascript:void(0)"><span >{{inter.inte}}</span></a>
       </span>
      </div>
      <!-- 内存容量 | 颜色-->
      <div class="else_info"><span v-if="goodrouteid  >= 1 && goodrouteid <= 5">内存容量:</span>
        <span v-else>颜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色:</span>
       <span  v-for="(edit, index) in product.editiion" :key="index">
         <a class="box" :style="back_ground_color_01" @click="change_background_color_box(1)" href="javascript:void(0)"><span >{{edit.edit_01}}</span></a>
         <a v-if="goodrouteid  >= 1 && goodrouteid <= 5" class="box" :style="back_ground_color_02" @click="change_background_color_box(2)" href="javascript:void(0)"><span >{{edit.edit_02}}</span></a>
       </span>
      </div>
      <!-- 套餐-->
      <div class="else_info"><span>选择套餐:</span>
       <span  v-for="(taocan, index) in product.taocan" :key="index">
         <a class="box" :style="back_ground_color_bding_01" @click="change_background_color_bding_box(1)" href="javascript:void(0)"><span >{{taocan.taocan_01}}</span></a>
       </span>
      </div>
      <!-- 数量-->
      <div class="else_info"><span>数量:</span>
       <span style="margin-left: 30px">
         <button class="btn btn-sm" @click="productRed(index01)" href="javascript:void(0)"> &nbsp; - &nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;
         <span>{{good_count}}</span>
         &nbsp;&nbsp;&nbsp;&nbsp;
         <button class="btn btn-sm"  @click="productAdd(index01)"  href="javascript:void(0)">&nbsp; + &nbsp;</button>
       </span>
      </div>
      <div class="add_to_cart_box">
        <button class="btn btn-lg btn-warning" @click="add_to_cart()" v-if="boolean_product === false"> 加入购物车</button>
        <button class="btn btn-lg btn-warning"  v-else> 已加入购物车</button>
      </div>

    </div>
  </span>

</div>
</template>

<script>
export default {
  name: 'childGoodsdetailList',
  props: {
    'goodrouteid': [Number]
  },
  computed: {
    // 获取加入购物车的商品，判断商品是否已在购物车中
    productList: function () {
      return this.$store.state.lists
    }
  },
  data () {
    return {
      productListaadcart: [],
      index_id: 1,
      src: '',
      boolean_product: false, // 判断此商品是否在购物车中
      good_count: 1,
      back_ground_color_01: '',
      back_ground_color_02: '',
      back_ground_color_bding_01: '',
      back_ground_color_bding_01_inter: '',
      product: {
        goodid: this.goodrouteid,
        stypeid: false,
        name: '',
        edition: '',
        taocan: '',
        internet: '',
        src: '',
        count: 1,
        price: 0,
        numprice: 0
      },
      content: [
        {
          goodid: 1,
          introduce01: '骁龙855 4800W光学防抖',
          stypeid: false,
          name: '魅族 16S',
          img: require('../assets/indexGoods/meizu_16s_index.png'),
          src: require('../assets/listGoods/meizu_16S_01.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_16S_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_16S_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_16S_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_16S_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_16s_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_16s_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_16s_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_16s_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '全网通版'
          }],
          editiion: [{
            edit_01: ' 6   +   64G   ',
            edit_02: ' 8   +   128G  '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '【5.31 10点直降200元 最低1598元起】【限时6期免息】骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖',
          price: 3198,
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 >',
          count: 1,
          numprice: 3198
        },
        {
          goodid: 2,
          introduce01: '骁龙710 屏幕下指纹 旗舰双摄',
          stypeid: false,
          name: '魅族16X',
          img: require('../assets/indexGoods/meizu_16X_index.png'),
          src: require('../assets/listGoods/meizu_16X_01.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_16X_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_16X_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_16X_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_16X_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_16X_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_16X_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_16X_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_16X_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '全网通版'
          }],
          editiion: [{
            edit_01: ' 6   +   64G   ',
            edit_02: ' 8   +   128G  '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '【5.31 10点直降200元 最低1598元起】【限时6期免息】骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖',
          price: 1698,
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 >',
          count: 1,
          numprice: 1698
        },
        {
          goodid: 3,
          introduce01: '骁龙710 屏幕下指纹 旗舰双摄',
          stypeid: false,
          name: '魅族 note9',
          img: require('../assets/indexGoods/meizu_note9_index.png'),
          src: require('../assets/listGoods/meizu_note9_01.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_note9_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_note9_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_note9_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_note9_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_note9_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_note9_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_note9_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_note9_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '全网通版'
          }],
          editiion: [{
            edit_01: ' 6   +   64G   ',
            edit_02: ' 8   +   128G  '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '【618特惠 低至1199元起】【限时6期免息】 骁龙675 | 后置4800万 | 前置2000万 | 独家定制水滴设计全面屏 | 4000mAh大容量电池 | 18W mCharge快充 | 吃鸡不卡 拍她更美 price: 1698',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 >',
          price: 1698,
          count: 1,
          numprice: 1698
        },
        {
          goodid: 4,
          stypeid: false,
          name: '魅族 16th',
          price: 2298,
          img: require('../assets/indexGoods/meizu_16th_index.png'),
          src: require('../assets/listGoods/meizu_16th_01.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_16th_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_16th_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_16th_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_16th_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_16th_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_16th_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_16th_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_16th_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '全网通版'
          }],
          editiion: [{
            edit_01: ' 6   +   64G   ',
            edit_02: ' 8   +   128G  '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '【5.31 10点直降200元 最低1598元起】【限时6期免息】骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          introduce01: '人脸指纹双解锁 旗舰双摄',
          count: 1,
          numprice: 2298
        },
        {
          goodid: 5,
          stypeid: false,
          name: '魅族 X8',
          price: 1298,
          img: require('../assets/indexGoods/meizu_X8_index.png'),
          src: require('../assets/listGoods/meizu_X8_01.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_X8_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_X8_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_X8_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_X8_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_X8_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_X8_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_X8_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_X8_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '全网通版'
          }],
          editiion: [{
            edit_01: ' 6   +   64G   ',
            edit_02: ' 8   +   128G  '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '【5.31 10点直降200元 最低1598元起】【限时6期免息】骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          introduce01: '人脸指纹双解锁 旗舰双摄',
          count: 1,
          numprice: 1298
        },
        {
          goodid: 6,
          stypeid: false,
          name: 'meizu POP2 真无线蓝牙耳机',
          img: require('.././assets/index_background/meizu_earphone_pop2_index_background.jpg'),
          src: require('.././assets/listGoods/meizu_pop2_earphone_01.jpg'),
          introduce01: '蓝牙5.0 超长续航',
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_pop2_earphone_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_pop2_earphone_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_pop2_earphone_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_pop2_earphone_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_pop2_earphone_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_pop2_earphone_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_pop2_earphone_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_pop2_earphone_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '   P O P 2  '
          }],
          editiion: [{
            edit_01: ' 皓 月 白   '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          introduce02: '蓝牙5.0 超长续航',
          price: 399,
          count: 1,
          numprice: 399
        },
        {
          goodid: 7,
          stypeid: false,
          name: '魅族 EP63NC 无线降噪耳机',
          src: require('../assets/listGoods/meizu_earphone_ep63nc_01.jpg'),
          img: require('../assets/indexGoods/meizu_earphone_ep63nc_index.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_earphone_ep63nc_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_earphone_ep63nc_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_earphone_ep63nc_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_earphone_ep63nc_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_earphone_ep63nc_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_earphone_ep63nc_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_earphone_ep63nc_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_earphone_ep63nc_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: ' EP63NC '
          }],
          editiion: [{
            edit_01: ' 玄 武 灰   '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '智能降噪 声临其境',
          introduce01: '智能降噪 声临其境',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: 499,
          count: 1,
          numprice: 499
        },
        {
          goodid: 8,
          stypeid: false,
          name: '魅族 HALO 激光蓝牙耳机',
          src: require('../assets/listGoods/meizu_halo_earphone_01.jpg'),
          img: require('../assets/indexGoods/meizu_earphone_halo_index.png'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_halo_earphone_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_halo_earphone_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_halo_earphone_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_halo_earphone_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_halo_earphone_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_halo_earphone_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_halo_earphone_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_halo_earphone_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: 'H A L O'
          }],
          editiion: [{
            edit_01: ' 红色版本   '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '夜跑神器 随性张扬',
          introduce01: '夜跑神器 随性张扬',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: 499,
          count: 1,
          numprice: 499
        },
        {
          goodid: 9,
          stypeid: false,
          name: '魅族 LIVE 四单元动铁耳机',
          img: require('../assets/indexGoods/meizu_earphone_live_index.jpg'),
          src: require('../assets/listGoods/meizu_earphone_live_01.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_earphone_live_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_earphone_live_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_earphone_live_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_earphone_live_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_earphone_live_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_earphone_live_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_earphone_live_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_earphone_live_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '魅族LIVE'
          }],
          editiion: [{
            edit_01: ' 银色版本   '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '享六期免息',
          introduce01: '享六期免息',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: '限时特惠 1099',
          count: 1,
          numprice: 1099
        },
        {
          goodid: 10,
          stypeid: false,
          src: require('../assets/listGoods/meizu_flowbass_earphone_01.jpg'),
          name: '魅族 flowbass 三单元动铁耳机',
          img: require('../assets/indexGoods/meizu_earphone_flowbass_index.png'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_flowbass_earphone_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_flowbass_earphone_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_flowbass_earphone_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_flowbass_earphone_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_flowbass_earphone_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_flowbass_earphone_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_flowbass_earphone_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_flowbass_earphone_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: 'flowbass'
          }],
          editiion: [{
            edit_01: '  极光灰版   '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '延续经典 重赋心声',
          introduce01: '延续经典 重赋心声',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: 399,
          count: 1,
          numprice: 399
        },
        {
          goodid: 11,
          stypeid: false,
          name: '魅族极简都市双肩包',
          src: require('../assets/listGoods/meizu_bag_shuangjianbao_01.jpg'),
          img: require('../assets/index_background/meizu_bag_shuangjianbao_background.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_bag_shuangjianbao_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_bag_shuangjianbao_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_bag_shuangjianbao_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_bag_shuangjianbao_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_bag_shuangjianbao_01_s.png'), id: 1},
            {img_s: require('../assets/listGoods/meizu_bag_shuangjianbao_02_s.png'), id: 2},
            {img_s: require('../assets/listGoods/meizu_bag_shuangjianbao_03_s.png'), id: 3},
            {img_s: require('../assets/listGoods/meizu_bag_shuangjianbao_04_s.png'), id: 4}
          ],
          internet: [{
            inte: '都市双肩包'
          }],
          editiion: [{
            edit_01: ' 朴 素 黑  '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '650D高耐磨牛津布 大容量多功能收纳',
          introduce01: '650D高耐磨牛津布 大容量多功能收纳',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: 179,
          count: 1,
          numprice: 179
        },
        {
          goodid: 12,
          stypeid: false,
          name: '魅族 星球探索鼠标垫',
          src: require('../assets/listGoods/meizu_shubiaodian01_01.jpg'),
          img: require('../assets/indexGoods/meizu_shubiaodian_index.jpg'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_shubiaodian01_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_shubiaodian01_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_shubiaodian01_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_shubiaodian01_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_shubiaodian01_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_shubiaodian01_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_shubiaodian01_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_shubiaodian01_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '探索鼠标垫'
          }],
          editiion: [{
            edit_01: ' 星 球 蓝   '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '星球无限 追求不止',
          introduce01: '星球无限 追求不止',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: 69,
          count: 1,
          numprice: 69
        },
        {
          goodid: 13,
          stypeid: false,
          name: '魅族星际探索 帆布袋',
          src: require('../assets/listGoods/meizu_bag_xingqiutansuo_01.jpg'),
          img: require('../assets/indexGoods/meizu_bag_xingqiutansuo_index.png'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_bag_xingqiutansuo_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_bag_xingqiutansuo_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_bag_xingqiutansuo_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_bag_xingqiutansuo_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_bag_xingqiutansuo_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_bag_xingqiutansuo_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_bag_xingqiutansuo_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_bag_xingqiutansuo_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '帆 布 袋'
          }],
          editiion: [{
            edit_01: ' 光 年 白  '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: 'FOR THE LOVELY ONES',
          introduce01: 'FOR THE LOVELY ONES',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: 69,
          count: 1,
          numprice: 69
        },
        {
          goodid: 14,
          stypeid: false,
          name: '魅族蓝牙自拍杆',
          src: require('../assets/listGoods/meizu_zipaigan_01.jpg'),
          img: require('../assets/indexGoods/meizu_zipaigan_index.png'),
          img_index: {
            img_index_01: require('../assets/listGoods/meizu_zipaigan_01.jpg'),
            img_index_02: require('../assets/listGoods/meizu_zipaigan_02.jpg'),
            img_index_03: require('../assets/listGoods/meizu_zipaigan_03.jpg'),
            img_index_04: require('../assets/listGoods/meizu_zipaigan_04.jpg')
          },
          img_index_s: [
            {img_s: require('../assets/listGoods/meizu_zipaigan_01_s.jpg'), id: 1},
            {img_s: require('../assets/listGoods/meizu_zipaigan_02_s.jpg'), id: 2},
            {img_s: require('../assets/listGoods/meizu_zipaigan_03_s.jpg'), id: 3},
            {img_s: require('../assets/listGoods/meizu_zipaigan_04_s.jpg'), id: 4}
          ],
          internet: [{
            inte: '自 拍 杆'
          }],
          editiion: [{
            edit_01: ' 粉    色 '
          }],
          taocan: [{
            taocan_01: '官方标配'
          }],
          introduce02: '还给你自由的双手',
          introduce01: '还给你自由的双手',
          priceintroduce: '加价购 \n' +
            '另加15元起，即可换购超值商品 \n' +
            '立即加购 ',
          price: 99,
          count: 1,
          numprice: 99
        }
      ]
    }
  },
  methods: {
    // 换图片
    changeimg_index: function (changeId) {
      this.index_id = changeId
      if (this.index_id === 1) {
        this.src = this.content[this.goodrouteid - 1].img_index.img_index_01
      }
      if (this.index_id === 2) {
        this.src = this.content[this.goodrouteid - 1].img_index.img_index_02
      }
      if (this.index_id === 3) {
        this.src = this.content[this.goodrouteid - 1].img_index.img_index_03
      }
      if (this.index_id === 4) {
        this.src = this.content[this.goodrouteid - 1].img_index.img_index_04
      }
    }, // 选择内存的背景
    change_background_color_box: function (num) {
      if (num === 1) {
        this.back_ground_color_01 = 'background-color: powderblue'
        this.back_ground_color_02 = ''
        this.product.edition = this.content[this.goodrouteid - 1].editiion[0].edit_01
      } else {
        this.back_ground_color_02 = 'background-color: powderblue'
        this.back_ground_color_01 = ''
        this.product.edition = this.content[this.goodrouteid - 1].editiion[0].edit_02
      }
      for (let i = 0; i < this.productList.length; i++) {
        for (let j = 0; j < this.productList[i].content.length; j++) {
          // 如果内存容量相同，id相同 则视为同类商品
          if (this.productList[i].content[j].goodid === this.product.goodid && this.productList[i].content[j].edition === this.product.edition) {
            this.boolean_product = true
          } else {
            this.boolean_product = false
          }
        }
      }
    }, // 选择套餐的背景
    change_background_color_bding_box: function (num) {
      if (num === 1) {
        this.back_ground_color_bding_01 = 'background-color: powderblue'
        this.product.taocan = this.content[this.goodrouteid - 1].taocan[0].taocan_01
      }

      this.product.name = this.content[this.goodrouteid - 1].name
      this.product.src = this.content[this.goodrouteid - 1].src
      this.product.price = this.content[this.goodrouteid - 1].price
    },
    // 全网通 或者 型号
    change_background_color_bding_box_inter: function (num) {
      if (num === 1) {
        this.back_ground_color_bding_01_inter = 'background-color: powderblue'
        this.product.internet = this.content[this.goodrouteid - 1].internet[0].inte
      }
    },
    productAdd: function (index) {
      this.content[index].count += 1
      this.good_count += 1
      this.product.count = this.good_count
    },
    productRed: function (index) {
      if (this.content[index].count === 1) {
        return
      }
      this.content[index].count -= 1
      this.good_count -= 1
      this.product.count = this.good_count
    },
    add_to_cart: function () {
      if (this.product.edition === '') {
        alert('请选择内存')
      } else if (this.product.internet === '') {
        alert('请选择网络类型')
      } else if (this.product.taocan === '') {
        alert('请选择套餐')
      } else if (this.product.name === '') {
        alert('请选择名字')
      } else {
        this.product.numprice = this.product.count * this.product.price
        if (this.goodrouteid <= 5) {
          // 将商品添加到store中， 下标分别代表着不同的类型商品
          this.$store.state.lists[0].content.push(this.product)
        } else if (this.goodrouteid > 5 && this.goodrouteid <= 10) {
          this.$store.state.lists[1].content.push(this.product)
        } else {
          this.$store.state.lists[2].content.push(this.product)
        }
        alert('已加入购物车')
      }
      // this.$store.state.lists.push(this.productList[this.goodrouteid - 1])
    }
  }
}
// 点击后鼠标移开保持鼠标点击时的状态（只有在<a href="#"></a>时标签中有效）
/* a:focus{
   color: yellow;
   background-color: black;
} */
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  li {
    list-style:none;
  }
  .price{
    color: red;
    font-weight: bold;
    font-size: 30px;
    background-color: aliceblue;
    margin-top: 20px;
    height: 80px;
  }
  .priceintroduce{
    color: #2c3e50;
    font-size: 13px;
    font-weight: normal;
  }
  .else_info{
    color: #8c8c8c;
    margin-left: 30px;
    margin-top: 35px;
  }
  .box{
    padding: 13px 70px;
    border: 1px solid black;
    text-align: center;
    margin-left: 5px;
    border-radius: 5px;
  }
  .box02{
    padding: 13px 70px;
    border: 1px solid black;
    text-align: center;
    margin-left: 5px;
    border-radius: 5px;
  }
  .add_to_cart_box{
    margin-top: 50px;
    margin-left: 35px;
    color: red;
  }
  .imgone {
    width: 480px ;
    height: 480px
  }
  .imgsmall {
    width: 80px ;
    height: 80px
  }
  .litwo {
    margin-top: 5px ;
    margin-right: 20px
  }
  @media (max-width:780px) {
    .imgone {
      width: 280px ;
      height: 280px
    }
    .imgsmall {
      width: 30px ;
      height: 30px
    }
    .litwo {
      float: left;
    }
    .box{
      padding: 8px 43px;
    }
  }
</style>
