<!-- 首页 -->
<template>
  <div class="content-wrapper">
    <!-- Content Header -->
     <section class="content-header">
     <h1>欢迎进入MMS管理系统, <strong class="text-green" v-text="userName"></strong></h1>
  </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
        
        </div>
    </section>

  </div>
</template>

<script>
var API = require('../common/API'),
    Cookie = require('../common/Cookie.js')

module.exports = {
    ready: function() {
        $(".content-wrapper").css({
            'min-height':$(document).height()-$("header").height()+'px'
        });


        if(Cookie.getCookie("userName")){
            this.userName = Cookie.getCookie("userName");
        }else{
            this.$route.router.go({name: 'login'});
        }

    },
    data: () => {
        return {
            'userName': ''
        }
    }
};
</script>