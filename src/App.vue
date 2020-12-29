
<template>
  <div id="app">
    <router-view/>
    <!-- 多个组件要写入对应的name-->
    <router-view name="navbarcart"/>
    <router-view name="cart"/>
    <router-view name='navbar'/>
    <router-view name='backround'/>
    <router-view name='goodsList'/>
    <router-view name='goodsDetail'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
