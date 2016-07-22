<template>
  <div class="wrapper">
    <!-- 页面顶部公共模块
    <top-bar></top-bar>
    侧边栏导航公共模块
    <side-bar></side-bar>
    路由导航的不同主内容区 -->
    <router-view></router-view>
  </div>
</template>

<script>
var TopBar = require('./components/TopBar.vue')
var SideBar = require('./components/SideBar.vue')

module.exports = {
  components: {
    'topBar': TopBar,
    'sideBar': SideBar
  }
};
</script>

<style>
  .wrapper{
    height: 100%;
  }
</style>