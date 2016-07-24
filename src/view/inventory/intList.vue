<!-- 库存列表 -->
<template>
  <div class="content-wrapper">
    <!-- Content Header -->
    <section class="content-header">
       <h1>
        库存列表
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 库存</a></li>
        <li class="active">库存列表</li>
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
        $(".content-wrapper").css({
            'min-height': $(document).height() - $("header").height() + 'px'
        });
    }
}
</script>