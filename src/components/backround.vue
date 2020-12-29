<template >
  <div id="imgs" data-interval="2000" data-ride="carousel" class="carousel slide" :style="display_or">
    <div class="carousel-inner">
      <!--
            data-interval默认值是5000,单位是毫秒,即每张图片切换所需时间
            data-ride="carousel" 设置为自动播放
        -->
      <!--
          下面开始存放需要展现的图片,第一张需要多加 active类型名称
      -->
      <div class="item active">
        <a @click="$goRoute('/goodDetail', 7)" href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_ep63nc_earphone_backround.jpg"/></a>
      </div>
      <div class="item">
        <a @click="$goRoute('/goodDetail', 1)" href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_16s_backround.jpg"/></a>
      </div>
      <div class="item">
        <a @click="$goRoute('/goodDetail', 3)" href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_note9_backround.jpg"/></a>
      </div>
      <div class="item">
        <a @click="$goRoute('/goodDetail', 4)" href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_16th_backround.jpg"/></a>
      </div>
      <div class="item">
        <a @click="$goRoute('/goodDetail', 6)" href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_pop2_backround.jpg"/></a>
      </div>
      <div class="item">
        <a @click="$goRoute('/goodDetail', 12)" href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_shubiaodian_backround.jpg"/></a>
      </div>
      <div class="item">
        <a @click="$goRoute('/goodDetail', 5)" href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_X8_backround.jpg"/></a>
      </div>
      <div class="item">
        <a  href="javascript:void(0)"><img width="100%" src=".././assets/backround/meizu_xianlianglihe_backround.jpg"/></a>
      </div>

      <!--
          设置跳转小圆点
      -->
      <ul class="carousel-indicators">
        <li data-target="#imgs" data-slide-to="0" class="active"></li>
        <li data-target="#imgs" data-slide-to="1"></li>
        <li data-target="#imgs" data-slide-to="2"></li>
        <li data-target="#imgs" data-slide-to="3"></li>
        <li data-target="#imgs" data-slide-to="4"></li>
        <li data-target="#imgs" data-slide-to="5"></li>
        <li data-target="#imgs" data-slide-to="6"></li>
        <li data-target="#imgs" data-slide-to="7"></li>
      </ul>

      <a id="toLeft" href="#imgs" data-slide="prev" class="carousel-control left"></a>
      <a id="toRight" href="#imgs" data-slide="next" class="carousel-control right"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'backround',
  computed: {
    display_or: function () {
      // 如果搜索栏没有内容，则显示滚动，否则不显示滚动
      if (this.$store.state.search !== '' || this.$store.state.moblie !== 0) {
        return 'display: none'
      }
    }
  }
}
</script>

<style scoped>

</style>
