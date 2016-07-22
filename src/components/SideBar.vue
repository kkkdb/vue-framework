<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li class="header">导航栏</li>

        <li class="treeview">
          <a href="#"><i class="fa fa-truck"></i> <span>商品</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a v-link="{ path: '/index/productList' }"><i class="fa fa-circle-o"></i> 商品列表</a></li>
            <li><a v-link="{ path: '/index/productDetail' }"> <i class="fa fa-circle-o"></i>商品详情</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-truck"></i> <span>库存</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a v-link="{ path: '/index/inventoryList' }"><i class="fa fa-circle-o"></i> 库存列表</a></li>
            <li><a v-link="{ path: '/index/inventoryDetail' }"> <i class="fa fa-circle-o"></i>库存详情</a></li>
          </ul>
        </li>
      </ul>

    </section>
  </aside>
</template>

<script>
module.exports = {
    ready: function() {
        var window_h = $(document).height();
        var header_h = $("header").height();

        $("aside").height(window_h - header_h);
        console.log("side height: " + $("aside").height());
    }
};
</script>