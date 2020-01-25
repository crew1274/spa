<style lang="scss">
@import "@/assets/scss/common.scss";
.font-size-icon {
  font-size: 24px;
}
.icon-xialacaidan {
  font-size: 21px;
  color: #21f7f5;
}
.el-header {
  width: 100%;
  height: 80px !important;
  padding: 0;
}
.personal-menu-btn {
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
.xiala {
  cursor: pointer;
}
.select_route{
  background-color: rgba(76,149,232,0.2);
}
#header {
  position: fixed;
  z-index: 9999999;
  width: 100%;
  height: 80px;
  background-color: #0e385e;
  box-shadow: 0 5px 5px #000;
  color: #fff;
  .user-menu {
    padding-left: 15px;
    text-align: left;
  }
  .header-bar {
    height: 80px;
    a {
      color: #fff;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .el-col {
    height: 80px;
    line-height: 80px;
  }
  .user-wrap {
    // text-align: right;
    // line-height: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right:30px;
  }
  .text-right {
    display: flex;
    justify-content: center;
  }
  .el-dropdown {
    color: #fff !important;
  }
  .fr {
    .el-col {
      text-align: center;
    }
  }
  #selectsearch {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .el-select {
      width: 100px;
      min-width: 100px;
      position: relative;
      z-index: 1;
      .el-input__inner {
        height: 52px;
      }
      .el-input .el-select__caret {
        color: #fff;
      }
    }
    .vulner_affect {
      display: inline-block;
      margin-left: 10px;
      .iconfont {
        margin-right: 5px;
      }
    }
    .el-input__inner {
      background-color: #182b5c;
      color: #fff;
      border: none;
      &[placeholder] {
        color: #fff;
      }
    }
    .el-select-dropdown {
      background-color: #182b5c;
    }
    .el-select-dropdown__item.hover,
    .el-select-dropdown__item:hover {
      background-color: #0f4ea4;
    }
  }
  .chart-condition-dropdown {
    border: none;
    background: #0f4ea4;
    .el-select-dropdown__item {
      background: #0f4ea4;
      color: #fff;
    }
    &.el-popper[x-placement^="bottom"] {
      .popper__arrow::after {
        border-bottom-color: #0f4ea4;
      }
    }
    &.el-popper[x-placement^="bottom"] {
      .popper__arrow {
        border-bottom-color: #0f4ea4;
      }
    }
    .el-select-dropdown__item.hover,
    .el-select-dropdown__item:hover {
      background-color: #03399b;
      color: #fff;
    }
  }
  .headerlogo{
    display: inline-block;
    width:40px;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
    background-color:#0a7bd4;
    margin-top:20px;

  }
  .logout{
    display: inline-block;
    margin-left:20px;
  }
}
@media screen and (max-width:992px){
  .el-header{
    width: 100%;
    height: auto !important;
  }
  #header{
    height: auto !important;
  }
}
</style>

<template>
  <div id="header">
    <el-row :gutter="0" class="header-bar">
      <el-col :span="10" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <el-row :gutter="0">
          <el-col :span="2">
            <span class="headerlogo">
              <i class="iconfont icon-gongju" style="font-size:40px;"></i>
            </span>
          </el-col>
          <el-col :span="5">
            欢迎登入DDC
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4" :offset="10" :xs="24" :sm="4" :md="4" :lg="4" :xl="4">
        <div class="user-wrap">
          <img src="../../assets/images/user-img.png" class="user">
          <span class="el-dropdown-link">
              {{userName}}
          </span>
          <span class="logout" @click="logout">
            <i class="iconfont icon-tuichu" style="font-size:30px;color:red;"></i>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import search from "./search";
export default {
  data() {
    return {
      ip_search_show: true,
      person_search_show: false,
      search: "",
      isNav: false,
      showSearch: false,
      last_key: [],
      last_index: [],
      pre_index: "",
      pre_field: "",
      userName: localStorage.getItem("username"),
      role: "",
      selectSearch: "IP",
      showTopSearch: true
    };
  },
  mounted(){
  },
  methods:{
    logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      this.$router.push({name:'login'});
    }
  }
};
</script>
