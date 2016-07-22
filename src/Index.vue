<template>
    <!-- 页面顶部公共模块 -->
    <top-bar></top-bar>
    <!-- 侧边栏导航公共模块 -->
    <side-bar></side-bar>
    <!-- 路由导航的不同主内容区 -->
    <router-view></router-view>
</template>

<script>
var topBar = require('./components/topBar.vue')
var sideBar = require('./components/sideBar.vue')

module.exports = {
  components: {
    'topBar': topBar,
    'sideBar': sideBar
  }
};
</script>

<style>
  
</style>