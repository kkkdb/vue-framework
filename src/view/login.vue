<!-- 登录 -->
<template>
  <div style="height:100% !important;">
    <div class="login-box">
        <div class="login-logo">
            <h1 class="text-green"><b>MMS</b>后台管理系统</h1>
        </div>
        
        <div class="login-box-body">
            <p class="login-box-msg text-green">
              <i class="fa fa-dashboard"></i> 会员登录
            </p>

            <div>
              <div class="form-group has-feedback">
                <input type="text" class="form-control" placeholder="请输入用户名" v-model="userInfo.userName">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="请输入密码" v-model="userInfo.password">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div v-if="errorMsg" class="form-group">
                <span class="text-red" v-text="errorMsg"></span>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <button  class="btn btn-success btn-block btn-flat" v-on:click="login">登录</button>
                </div>
              </div>
            </div>
        </div>
       
    </div>
</div>



</template>

<script>
import API from '../common/API'
import {setCookie} from '../common/Cookie'

export default {
    ready: function() {

    },
    data: function() {
        return {
            'userInfo': {
                'userName': '',
                'password': ''
            },
            'errorMsg': ''
        }
    },
    methods: {
        login: function() {
            var that = this;
            var loading = layer.load(1);
            this.$http.post(API.login, this.userInfo).then((res) => {
                // success callback
                layer.close(loading);

                if(res.data.success){
                    that.errorMsg = '';
                  
                    setCookie(res.data.data, function() {
                        that.$route.router.go({name: 'home'});
                    });
                }else{
                    that.errorMsg = res.data.message;
                }
            }, (res) => {
                // error callback
                layer.close(loading);
                layer.msg("当前网络太差，请稍后重试", {
                    time: 1200
                });
            });
        }
    }
}
</script>