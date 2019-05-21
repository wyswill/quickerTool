<template>
  <el-container>
    <el-header>
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#fff"
        text-color="#000"
        active-text-color="#FF9800"
      >
        <el-menu-item index="1">
          <router-link to="/myWorkBar/frontEnd/myProject">我的项目</router-link>
        </el-menu-item>
        <el-menu-item index="2">我的团队</el-menu-item>
        <el-menu-item class="input">
          <input type="text" placeholder="请输入项目名称进行搜索" v-model="search">
          <span>搜索</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="less" scoped>
.el-header {
  box-shadow: 3px 1px 16px 0px #ccc;
  text-align: left;
  font-size: 12px;
}
.el-menu-item.input {
  display: flex;
  align-items: center;
  float: right;
  input,
  span {
    color: #888888;
    height: 42px;
    outline: none;
    font-size: 16px;
    border: 1px solid #f8f8f8;
  }
  @radius: 26px;
  input {
    width: 295px;
    border-radius: @radius 0 0 @radius;
    text-indent: 12px;
    background: #f4f1f1;
  }
  span {
    line-height: 42px;
    padding: 0 10px;
    border-radius: 0 @radius @radius 0;
    border-left: none;
    background: #ff9801;
    border-color: #ff9801;
    color: #ffffff;
  }
  &:hover {
    background-color: rgb(255, 255, 255) !important;
  }
}
.el-main {
  overflow-x: hidden;
}
</style>

