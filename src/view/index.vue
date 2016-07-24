<template>
    <!-- 页面顶部公共模块 -->
    <top-bar></top-bar>
    <!-- 侧边栏导航公共模块 -->
    <side-bar></side-bar>
    <!-- 路由导航的不同主内容区 -->
    <router-view></router-view>
</template>

<script>
import TopBar from '../component/TopBar'
import SideBar from '../component/SideBar'

export default {
  components: {
    'topBar': TopBar,
    'sideBar': SideBar
  }
}
</script>

<style>
  
</style>