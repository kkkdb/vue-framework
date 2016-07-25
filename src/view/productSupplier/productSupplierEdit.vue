<!-- Menu中不显示 -->
<template>
  <div class="content-wrapper">
    <!-- Content Header -->
    <section class="content-header">
       <h1>
        供应商编辑
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 供应商管理</a></li>
        <li class="active">供应商编辑</li>
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