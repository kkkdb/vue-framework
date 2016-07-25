<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li class="header">导航栏</li>

        <li class="treeview">
          <a><i class="fa fa-truck"></i> <span>商品</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a v-link="{ name: 'productList' }"><i class="fa fa-circle-o"></i> 商品列表</a></li>
            <li><a v-link="{ name: 'productDetail' }"> <i class="fa fa-circle-o"></i>商品详情</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-truck"></i> <span>库存</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a v-link="{ name: 'inventoryList' }"><i class="fa fa-circle-o"></i> 库存列表</a></li>
            <li><a v-link="{ name: 'inventoryDetail' }"> <i class="fa fa-circle-o"></i>库存详情</a></li>
          </ul>
        </li>
      </ul>

    </section>
  </aside>
</template>

<script>
import API from '../common/API'

export default {
    ready: function() {
        $("aside").height($(document).height()-$("header").height());

        this.$http.get(API.getMenuList).then((res) => {
            // success callback
            
        }, (res) => {
            // error callback
            
        });
    }
}
</script>