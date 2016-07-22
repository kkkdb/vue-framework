<!-- 首页 -->
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
                <input type="text" class="form-control" placeholder="请输入用户名">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="请输入密码">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div ng-if="errorMsg" class="form-group">
                <span class="text-red"></span>
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <button  class="btn btn-success btn-block btn-flat">登录</button>
                </div>
              </div>
            </div>
        </div>
       
    </div>
</div>

</template>

<script>
    module.exports = {
        ready: function() {
            
        }
    };
</script>