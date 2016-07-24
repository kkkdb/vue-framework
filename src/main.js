import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.options.xhr = { withCredentials: true }
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


import App from './App'
import index from './view/index'
import login from './view/login'
import home from './view/home'
import productList from './view/product/pdtList'
import productDetail from './view/product/pdtDetail'
import inventoryList from './view/inventory/intList'
import inventoryDetail from './view/inventory/intDetail'

var router = new VueRouter()

router.map({
  '/index': {
    name: 'index',
    component: index,
    subRoutes: {
      '/home': {
        name: 'home',
        component: home
      },
      '/productList': {
        name: 'productList',
        component: productList
      },
      '/productDetail': {
        name: 'productDetail',
        component: productDetail
      },
      '/inventoryList': {
        name: 'inventoryList',
        component: inventoryList
      },
      '/inventoryDetail': {
        name: 'inventoryDetail',
        component: inventoryDetail
      }
    }
  },
  '/login': {
    name: 'login',
    component: login
  }
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')
