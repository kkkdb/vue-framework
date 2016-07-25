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

                /* 商品管理 */
                '/product/omsGoodsList': {
                    name: 'omsGoodsList',
                    component: require('./view/product/omsGoodsList') // oms产品档案列表
                },
                '/product/productFacilityShippingList': {
                    name: 'productFacilityShippingList',
                    component: require('./view/product/productFacilityShippingList') // 候选仓库快递列表
                },
                '/product/productGoodsMappingList': {
                    name: 'productGoodsMappingList',
                    component: require('./view/product/productGoodsMappingList') // 映射关系列表
                },

                '/product/productSuppliesFinishedList': {
                    name: 'productSuppliesFinishedList',
                    component: require('./view/product/productSuppliesFinishedList') // 包装方案列表
                },
                '/product/productSuppliesFinishedNew': {
                    name: 'productSuppliesFinishedNew',
                    component: require('./view/product/productSuppliesFinishedNew') // 包装方案新建
                },
                '/product/productSuppliesFinishedEdit': {
                    name: 'productSuppliesFinishedEdit',
                    component: require('./view/product/productSuppliesFinishedEdit') // 包装方案编辑
                },

                '/product/productSuppliesRawMaterialList': {
                    name: 'productSuppliesRawMaterialList',
                    component: require('./view/product/productSuppliesRawMaterialList') // 耗材列表
                },
                '/product/productSuppliesRawMaterialNew': {
                    name: 'productSuppliesRawMaterialNew',
                    component: require('./view/product/productSuppliesRawMaterialNew') // 耗材新建
                },
                '/product/productSuppliesRawMaterialEdit': {
                    name: 'productSuppliesRawMaterialEdit',
                    component: require('./view/product/productSuppliesRawMaterialEdit') // 耗材编辑
                },

                '/product/productGoodsFinishedList': {
                    name: 'productGoodsFinishedList',
                    component: require('./view/product/productGoodsFinishedList') // 成品列表
                },
                '/product/productGoodsFinishedNew': {
                    name: 'productGoodsFinishedNew',
                    component: require('./view/product/productGoodsFinishedNew') // 成品新建
                },
                '/product/productGoodsFinishedEdit': {
                    name: 'productGoodsFinishedEdit',
                    component: require('./view/product/productGoodsFinishedEdit') // 成品编辑
                },

                '/product/productGoodsRawMaterialList': {
                    name: 'productGoodsRawMaterialList',
                    component: require('./view/product/productGoodsRawMaterialList') // 原料列表
                },
                '/product/productGoodsRawMaterialNew': {
                    name: 'productGoodsRawMaterialNew',
                    component: require('./view/product/productGoodsRawMaterialNew') // 原料新建
                },
                '/product/productGoodsRawMaterialEdit': {
                    name: 'productGoodsRawMaterialEdit',
                    component: require('./view/product/productGoodsRawMaterialEdit') // 原料编辑
                },

                '/product/productApplyList': {
                    name: 'productApplyList',
                    component: require('./view/product/productApplyList') // 上新列表
                },
                '/product/productApplyNew': {
                    name: 'productApplyNew',
                    component: require('./view/product/productApplyNew') // 上新新建
                },
                '/product/productApplyEdit': {
                    name: 'productApplyEdit',
                    component: require('./view/product/productApplyEdit') // 上新编辑
                },

                '/product/productQcList': {
                    name: 'productQcList',
                    component: require('./view/product/productQcList') // qc标准列表
                },
                '/product/productQcNew': {
                    name: 'productQcNew',
                    component: require('./view/product/productQcNew') // qc标准新建
                },
                '/product/productQcEdit': {
                    name: 'productQcEdit',
                    component: require('./view/product/productQcEdit') // qc标准编辑
                },

                /* 仓库管理 */
                '/facility/facilityList': {
                    name: 'facilityList',
                    component: require('./view/facility/facilityList') // 仓库列表
                },
                '/facility/facilityNew': {
                    name: 'facilityNew',
                    component: require('./view/facility/facilityNew') // 仓库新建
                },
                '/facility/facilityEdit': {
                    name: 'facilityEdit',
                    component: require('./view/facility/facilityEdit') // 仓库编辑
                },

                /* 快递管理 */
                '/shipping/shippingList': {
                    name: 'shippingList',
                    component: require('./view/shipping/shippingList') // 快递列表
                },
                '/shipping/shippingNew': {
                    name: 'shippingNew',
                    component: require('./view/shipping/shippingNew') // 快递新建
                },
                '/shipping/shippingEdit': {
                    name: 'shippingEdit',
                    component: require('./view/shipping/shippingEdit') // 快递编辑
                },

                /* 供应商管理 */
                '/productSupplier/productSupplierList': {
                    name: 'productSupplierList',
                    component: require('./view/productSupplier/productSupplierList') // 供应商列表
                },
                '/productSupplier/productSupplierNew': {
                    name: 'productSupplierNew',
                    component: require('./view/productSupplier/productSupplierNew') // 供应商新建
                },
                '/productSupplier/productSupplierEdit': {
                    name: 'productSupplierEdit',
                    component: require('./view/productSupplier/productSupplierEdit') // 供应商编辑
                },

                /* 商户管理 */
                '/merchant/merchantList': {
                    name: 'merchantList',
                    component: require('./view/merchant/merchantList') // 商户列表
                },
                '/merchant/merchantNew': {
                    name: 'merchantNew',
                    component: require('./view/merchant/merchantNew') // 商户新建
                },
                '/merchant/merchantEdit': {
                    name: 'merchantEdit',
                    component: require('./view/merchant/merchantEdit') // 商户编辑
                },

                /* 采购地管理 */
                '/purchasePlace/purchasePlaceList': {
                    name: 'purchasePlaceList',
                    component: require('./view/purchasePlace/purchasePlaceList') // 采购地列表
                },
                '/purchasePlace/purchasePlaceNew': {
                    name: 'purchasePlaceNew',
                    component: require('./view/purchasePlace/purchasePlaceNew') // 采购地新建
                },
                '/purchasePlace/purchasePlaceEdit': {
                    name: 'purchasePlaceEdit',
                    component: require('./view/purchasePlace/purchasePlaceEdit') // 采购地编辑
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
