<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li class="header">导航栏</li>

        <li class="treeview">
          <a href="#"><i class="fa fa-truck"></i> <span>发运组</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> 预到货通知列表</a></li>
            <li><a href="#"> <i class="fa fa-circle-o"></i>水果收货</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa  fa-calculator"></i> <span>盘点组</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> 预到货通知列表</a></li>
            <li><a href="#"> <i class="fa fa-circle-o"></i>水果收货</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa  fa-retweet"></i> <span>退货组</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> 预到货通知列表</a></li>
            <li><a href="#"> <i class="fa fa-circle-o"></i>水果收货</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa  fa-recycle"></i> <span>耗材管理组</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> 预到货通知列表</a></li>
            <li><a href="#"> <i class="fa fa-circle-o"></i>水果收货</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa fa-area-chart"></i> <span>总部运营</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> 预到货通知列表</a></li>
            <li><a href="#"> <i class="fa fa-circle-o"></i>水果收货</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa fa-phone"></i> <span>仓配客服</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> 预到货通知列表</a></li>
            <li><a href="#"> <i class="fa fa-circle-o"></i>水果收货</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#"><i class="fa fa-desktop"></i> <span>业务监控</span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> 预到货通知列表</a></li>
            <li><a href="#"> <i class="fa fa-circle-o"></i>水果收货</a></li>
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