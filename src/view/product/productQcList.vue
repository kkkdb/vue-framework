<template>
  <div class="content-wrapper">
    <!-- Content Header -->
    <section class="content-header">
       <h1>
        qc标准列表
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 商品管理</a></li>
        <li class="active">qc标准列表</li>
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
import API from '../../common/API'
import {getCookie} from '../../common/Cookie'

export default {
    ready: function() {
        $(".content-wrapper").css({
            'min-height': $(document).height() - $("header").height() + 'px'
        });

    },
    data: function() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>