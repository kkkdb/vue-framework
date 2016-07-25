const NodeServerHost = 'http://localhost:3001/';
const JavaServerHost = 'http://172.16.1.205:8081/mms/';

export default {
	login: NodeServerHost + 'login', // 登录接口 post
    getMenuList: NodeServerHost + 'getMenuList', // 根据用户权限获取导航栏接口 get

    getProductList: JavaServerHost + 'product/qc/list' // 获取商品列表接口 get	
}
