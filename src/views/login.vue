<style lang="scss">
@import "../assets/scss/common.scss";
#login {
  .el-form-item__content{
    margin-bottom:20px;
  }
  background: url(../assets/images/ddclogin.png) no-repeat 0 0;
  background-size:100% 100%;
  width:100%;
  height: 100%;
  padding-top:100px;
  .logo{
    display: block;
    width: 110px;
    height: 110px;
    line-height: 110px;
    border-radius: 10px;
    background-color: #0a7bd4;
    margin:0 auto;
    color:#fff;
    text-align: center;
  }
  .title{
    display: block;
    margin:0 auto;
    height:100px;
    line-height: 100px;
    color:#fff;
  }
  .login_content {
    margin:0 auto;
    background:url(../assets/images/logincontent.png) no-repeat 0 0;
    width: 500px;
    height: 425px;
    padding:60px 35px;
    .btnSub{
      width:100%;
    }
    .el-input__inner{
      background: transparent;
    }
    .remeber{
      color:#fff;
      text-align:left;
      margin-bottom:40px;
      .findpwd{
        color:#56b5ff;
      }
    }
    .register{
      color:#fff;
    }
  }
  
}
</style>
<template>
  <div id="login">
    <div>
      <span class="logo">
        <i class="iconfont icon-gongju" style="font-size:80px;"></i>
      </span>
      <span class="title">欢迎登入DDC</span>
    </div>
    <div class="login_content">
      <el-form ref="loginForm" :rules="rules" :model="loginForm">
        <el-form-item prop="loginName">
          <label @keyup.enter="onSubmit">
            <el-input v-model="loginForm.loginName" prefix-icon="iconfont icon-yonghu" placeholder="请输入用户名"></el-input>
          </label>
        </el-form-item>
        <el-form-item prop="password">
          <label @keyup.enter="onSubmit">
            <el-input type="password" placeholder="请输入密码" prefix-icon="iconfont icon-cf-c09"  v-model="loginForm.password"></el-input>
          </label>
        </el-form-item>
      </el-form>
      <p class="remeber clearfix">
        <el-checkbox class="fl">记住密码</el-checkbox>
        <span class="findpwd fr">忘记DDC ID 密码？</span>
        </p>
      <el-button ref="btnSub" v-if="!loading" class="btnSub" type="primary" @click="onSubmit">登录</el-button>
      <el-button ref="btnSub" v-else class="btnSub" type="primary" :loading="true">登录中</el-button>
      <p class="register">还没有账号？<a>立即注册</a></p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        loginName: "",
        password: "",
        vcode: ""
      },
      loading: false,
      rules: {
        loginName: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }]
      }
    };
  },
  methods:{
      Login() {
      let { loginName, password } = this.loginForm;
      if(loginName == 'admin' && password =='admin')
      {
        localStorage.setItem('username','admin');
        localStorage.setItem('token','hfjkdhgjhgjhjfdghjfhgjdhgjfhgjfghf');
        this.$router.push({ name: "index" });
      }
      else{
        this.$message(
          {
            type: 'error',
            message: "登录名或密码错误"
          }
        )
      }
    },
    onSubmit: function() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.Login();
        } else {
          return false;
        }
      });
    }
  },
};
</script>