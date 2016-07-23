var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.options.xhr = { withCredentials: true }
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


var App = require('./App'),
    index = require('./view/index'),
    login = require('./view/login'),
    home = require('./view/home'),
    productList = require('./view/product/pdtList'),
    productDetail = require('./view/product/pdtDetail'),
    inventoryList = require('./view/inventory/intList'),
    inventoryDetail = require('./view/inventory/intDetail')

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
