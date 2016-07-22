var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueResource)

var App = require('./App'),
    Home = require('./components/Home'),
    Login = require('./components/Login')

var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/login': {
    component: Login
  }
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')