// 路由器模块

export default function(router) {
    router.map({
        '/index': {
            name: 'index',
            component: require('./view/index'),
            subRoutes: {
                '/home': {
                    name: 'home',
                    component: require('./view/home')
                },
                '/productList': {
                    name: 'productList',
                    component: require('./view/product/pdtList')
                },
                '/productDetail': {
                    name: 'productDetail',
                    component: require('./view/product/pdtDetail')
                },
                '/inventoryList': {
                    name: 'inventoryList',
                    component: require('./view/inventory/intList')
                },
                '/inventoryDetail': {
                    name: 'inventoryDetail',
                    component: require('./view/inventory/intDetail')
                }
            }
        },
        '/login': {
            name: 'login',
            component: require('./view/login')
        }
    });

    router.redirect({
      '*': '/login'
    })
}
