<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu">
        <li class="header">导航栏</li>
        <li v-for="item in MenuList" class="treeview" :class="{'active': iconClass==item.isActive}">
          <a href="#"><i class="fa" v-bind:class="item.icon"></i> <span v-text="item.name"></span> <i class="fa fa-angle-left pull-right"></i></a>
          <ul class="treeview-menu">
            <li v-for="childMenu in item.childMenu" v-if='childMenu.isShielf==0'><a v-link="{path: childMenu.view , name: childMenu.view, activeClass: 'active', replace: true}"><i class="fa fa-circle-o"></i> <span v-text="childMenu.name"></span></a></li>
          </ul>
        </li>

      </ul>

    </section>
  </aside>
</template>

<script>
import API from '../common/API'

var vmSideBar = ''

export default {
    ready: function() {
        $("aside").height($(document).height()-$("header").height());

        vmSideBar = this;

        vmSideBar.getMenuList();
        
    },
    data: function() {
      return {
        'MenuList': []
      };
    },
    computed: {
        iconClass () {
            var path = this.$route.path.split('/');
            return path[path.length-2]
        }
    },
    methods: {
        'getMenuList': function() {
            var loading = layer.load(1);
            vmSideBar.$http.get(API.getMenuList).then((res) => {
                // success callback
                layer.close(loading);
                var result = res.data;
                
                if(result.success){
                    vmSideBar.MenuList = result.data;
                    console.log(vmSideBar.MenuList);
                    return true;
                }else{
                    return false;
                }
                
            }, (res) => {
                // error callback
                layer.close(loading);
                layer.msg("当前网络太差，请稍后重试",{
                    'time': 1200
                });
            });
        }
    }
}
</script>

<style>
    .sidebar-menu .treeview-menu>li>a.active{
        color: #fff;
    }
</style>