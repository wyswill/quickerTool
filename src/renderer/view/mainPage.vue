<template>
  <el-container style="height:100%;">
    <!-- 菜单 -->
    <el-aside style="width: 300px;height: 100%;overflow: hidden;">
      <!-- <h5>自定义颜色</h5> -->
      <div class="header">
        <img src="../assets/logo.png" alt>
        <div class="user">
          <i class="el-icon-s-custom"></i>
          <p>吾皇的迷妹</p>
        </div>
      </div>
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height: 100%;"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span>我的工作台</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/myWorkBar/frontEnd">前端项目</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">后端项目</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-s-custom"></i>
          <span slot="title">账号管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-message"></i>
          <span slot="title">系统消息</span>
        </el-menu-item>
        <el-divider></el-divider>
        <el-menu-item index="4">
          <i class="el-icon-switch-button"></i>
          <span slot="title">退出登录</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 内容 -->
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input2: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.router-link-active {
  color: #ffd04b;
}
.el-menu-item {
  a {
    text-decoration: none;
  }
}
.header {
  background: #545c64;
  img {
    width: 37%;
  }
  .user {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 8%;
  }
}
</style>

