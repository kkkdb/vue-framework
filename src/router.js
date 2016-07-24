// 路由器模块
import index from './view/index'
import login from './view/login'
import home from './view/home'
import productList from './view/product/pdtList'
import productDetail from './view/product/pdtDetail'
import inventoryList from './view/inventory/intList'
import inventoryDetail from './view/inventory/intDetail'

export default function(router) {
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
    });

    router.redirect({
      '*': '/login'
    })
}
