<!-- 库存详情 -->
<template>
  <div class="content-wrapper">
    <!-- Content Header -->
    <section class="content-header">
       <h1>
        库存详情
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 库存</a></li>
        <li class="active">库存详情</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
      </div>
    </section>
  </div>
</template>

<script>

export default {
    ready: function() {
        var window_h = $(document).height();
        var header_h = $("header").height();
        $(".content-wrapper").css({
            'min-height': window_h - header_h + 'px'
        });
    }
}
</script>