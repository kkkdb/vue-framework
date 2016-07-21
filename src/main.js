import jQuery from '../lib/jQuery/jQuery-2.2.0.min.js'
import Bootstrap from '../lib/bootstrap/js/bootstrap.min.js'
import AdminLTE from '../lib/adminLTE/js/app.min.js'

var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueResource)

var App = require('./App'),
    Home = require('./components/Home')

var router = new VueRouter()

router.map({
  // 首页
  '/home': {
    component: Home
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')