const Mock = require('mockjs')

const productList = function () {
  let productList = [
    {
      dept: 'mobile:',
      content: [
        {
          goodid: 1,
          introduce: '骁龙855 4800W光学防抖',
          stypeid: false,
          name: '魅族 16S',
          img: require('../../src/assets/indexGoods/meizu_16s_index.png'),
          price: 3198
        },
        {
          goodid: 2,
          introduce: '骁龙710 屏幕下指纹 旗舰双摄',
          stypeid: false,
          name: '魅族16X',
          img: require('../../src/assets/indexGoods/meizu_16X_index.png'),
          price: 1698
        },
        {
          goodid: 3,
          stypeid: false,
          name: '魅族 note9',
          price: 1398,
          img: require('../../src/assets/indexGoods/meizu_note9_index.png'),
          introduce: '骁龙675 后置4800W'
        },
        {
          goodid: 4,
          stypeid: false,
          name: '魅族 16th',
          price: 2298,
          img: require('../../src/assets/indexGoods/meizu_16th_index.png'),
          introduce: '骁龙845 屏幕下指纹'
        },
        {
          goodid: 5,
          stypeid: false,
          name: '魅族 X8',
          price: 1298,
          img: require('../../src/assets/indexGoods/meizu_X8_index.png'),
          introduce: '人脸指纹双解锁 旗舰双摄'
        }]
    },
    {
      dept: 'earphone:',
      content: [
        {
          goodid: 6,
          stypeid: false,
          name: 'meizu POP2 真无线蓝牙耳机',
          img: require('.././../src/assets/index_background/meizu_earphone_pop2_index_background.jpg'),
          introduce: '蓝牙5.0 超长续航',
          price: 399
        },
        {
          goodid: 7,
          stypeid: false,
          name: '魅族 EP63NC 无线降噪耳机',
          img: require('../../src/assets/indexGoods/meizu_earphone_ep63nc_index.jpg'),
          introduce: '智能降噪 声临其境',
          price: 499
        },
        {
          goodid: 8,
          stypeid: false,
          name: '魅族 HALO 激光蓝牙耳机',
          img: require('../../src/assets/indexGoods/meizu_earphone_halo_index.png'),
          introduce: '夜跑神器 随性张扬',
          price: 499
        },
        {
          goodid: 9,
          stypeid: false,
          name: '魅族 LIVE 四单元动铁耳机',
          img: require('../../src/assets/indexGoods/meizu_earphone_live_index.jpg'),
          introduce: '享六期免息',
          price: '限时特惠 1099'
        },
        {
          goodid: 10,
          stypeid: false,
          name: '魅族 flowbass 三单元动铁耳机',
          img: require('../../src/assets/indexGoods/meizu_earphone_flowbass_index.png'),
          introduce: '延续经典 重赋心声',
          price: 399
        }]
    },
    {
      dept: 'lifes:',
      content: [
        {
          goodid: 11,
          stypeid: false,
          name: '魅族极简都市双肩包',
          img: require('../../src/assets/index_background/meizu_bag_shuangjianbao_background.jpg'),
          introduce: '650D高耐磨牛津布 大容量多功能收纳',
          price: 179
        },
        {
          goodid: 12,
          stypeid: false,
          name: '魅族 星球探索鼠标垫',
          img: require('../../src/assets/indexGoods/meizu_shubiaodian_index.jpg'),
          introduce: '星球无限 追求不止',
          price: 69
        },
        {
          goodid: 13,
          stypeid: false,
          name: '魅族星际探索 帆布袋',
          img: require('../../src/assets/indexGoods/meizu_bag_xingqiutansuo_index.png'),
          introduce: 'FOR THE LOVELY ONES',
          price: 69
        },
        {
          goodid: 14,
          stypeid: false,
          name: '魅族蓝牙自拍杆',
          img: require('../../src/assets/indexGoods/meizu_zipaigan_index.png'),
          introduce: '还给你自由的双手',
          price: 99
        }
      ]}
  ]
  return {
    productList: productList
  }
}

// Mock.mock( url, post/get , 返回的数据)； 获取主页信息
Mock.mock('/index', 'post', productList)
