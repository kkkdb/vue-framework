var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.options.xhr = { withCredentials: true }
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';


var App = require('./App'),
    Index = require('./Index.vue'),
    Login = require('./Login')

var home = require('./components/home'),
    productList = require('./components/product/pdtList.vue'),
    productDetail = require('./components/product/pdtDetail.vue'),
    inventoryList = require('./components/inventory/intList.vue'),
    inventoryDetail = require('./components/inventory/intDetail.vue')

var router = new VueRouter()

router.map({
  '/index': {
    component: Index,
    subRoutes: {
      '/home': {
        component: home
      },
      '/productList': {
        component: productList
      },
      '/productDetail': {
        component: productDetail
      },
      '/inventoryList': {
        component: inventoryList
      },
      '/inventoryDetail': {
        component: inventoryDetail
      }
    }
  },
  '/login': {
    component: Login
  }
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')