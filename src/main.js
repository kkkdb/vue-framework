import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'    // 根组件
import routerMap from './router'    // 路由器模块

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

routerMap(router)

router.start(App, '#root')
