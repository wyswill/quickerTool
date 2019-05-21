<template>
  <div class="project">
    <el-container>
      <el-header>
        <!-- 返回 -->
        <i class="el-icon-back" @click="()=>{this.$router.go(-1)}">{{this.$route.params.name}}</i>
        <span>
          <!-- 保存 -->
          <i class="el-icon-folder-checked"></i>
          <!-- 上一步 -->
          <i class="iconfont icon-chexiao"></i>
          <!-- 下一步 -->
          <i class="iconfont icon-xiayibu"></i>
        </span>
        <span>
          <i class="iconfont icon-tucengzhizuoyuweihu"></i>
        </span>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.project {
  .el-header {
    display: flex;
    align-items: center;
    i {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
