var ServerHost = 'http://127.0.0.1:3001/';

export default {
	'login': ServerHost + 'login', // 登录接口	post
    'getMenuList': ServerHost + 'getMenuList', // 根据用户权限获取导航栏接口 get
    'getProductList': ServerHost + 'getProductList' // 获取商品列表接口 get	
}
