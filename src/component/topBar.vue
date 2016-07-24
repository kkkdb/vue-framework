<template>
  <header class="main-header">
    <!-- Logo -->
    <a v-link="{ path: '/index/home' }" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>M</b>MS</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>拼好货</b>MMS</span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="http://placehold.it/100x100" class="user-image" alt="User Image">
              <span class="hidden-xs" v-text="userName"></span>
              <i class="fa  fa-angle-down"></i>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="http://placehold.it/100x100" class="img-circle" alt="User Image">
                <p v-text="userName"></p>
              </li>
             
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" title="修改密码" class="btn btn-default btn-sm btn-flat"><i class="fa fa-gear"></i>  <span>修改密码</span></a>
                </div>
                <div class="pull-right">
                  <a href="#" title="退出" class="btn btn-default btn-sm btn-flat" v-on:click="signOut"><i class="fa fa-power-off"></i> <span>退出</span></a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import {getCookie, deleteCookie} from'../common/Cookie.js'

export default {
    ready: function() {
        if (getCookie("userName")) {
            this.userName = getCookie("userName");
        } else {
            this.$route.router.go({
                name: 'login'
            });
        }
    },
    data: function() {
        return {
            'userName': ''
        }
    },
    methods: {
        'signOut': function() {
            var that = this;
            deleteCookie(function(){
                that.$route.router.go({
                    name: 'login'
                });
            });
        }
    }
}
</script>