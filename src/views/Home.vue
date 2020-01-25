<style lang="scss">
.iconfont {
  margin-right: 8px;
  cursor: pointer;
}
#home {
  height: 100%;

  .user-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right:10px;
  }
  .logout{
    display: inline-block;
    cursor: pointer;
    margin-left:40px;
    i{
      font-size: 20px;
    }
  }
  .personal-menu-btn {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .cursor {
    cursor: pointer;
  }
  .menu {
    background-color: #2a3f54;
    height: 100%;
    .logo {
      background-color: #1e87f0;
      height: 80px;
      line-height: 80px;
    }
    .menu_item {
      color: #fff;

      .active {
        background-color: #19293a;
      }
      li {
        margin: 0;
        display: flex;
        height: 60px;
        line-height: 60px;
        padding-left: 76px;
        cursor: pointer;
        i {
          margin-right: 10px;
        }
      }
    }
  }
  .el-header {
    line-height: 80px;
  }
  .el-main {
    background-color: #f4f6f7;
    padding: 50px;
  }
}
</style>
<template>
  <el-container id="home-wrap">
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main class="index-container-wrap">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters,mapActions }  from 'vuex';
import vHeader from '@/components/common/v-header';
export default {
  name: "home",
  data() {
    return {
      userName: "",
    };
  },
  created() {

  },
  components: {
    vHeader
  }
};
</script>
