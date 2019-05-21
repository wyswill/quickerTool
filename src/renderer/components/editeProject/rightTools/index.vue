<template>
  <div class="rightTools">
    <el-container>
      <el-aside width="30">
        <i class="iconfont icon-tiaoshi"></i>
        <i class="iconfont icon-shandian"></i>
        <i class="iconfont icon-usb"></i>
        <i class="iconfont icon-jiegou"></i>
      </el-aside>
      <el-tabs v-model="activeName" :stretch="false" type="border-card">
        <el-tab-pane>
          <span slot="label">
            <i class="iconfont icon-article" style="font-size:20px;"></i>
          </span>
          <div style='htighe:100%;'>
            <threes></threes>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <i class="iconfont icon-tucengzhizuoyuweihu" style="font-size:20px;"></i>
          </span>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {
    threes: require("./threes").default
  },
  data() {
    return {
      activeName: "0"
    };
  }
};
</script>
<style lang="less" scoped>
.rightTools,
.el-tab-pane,
.el-tabs {
  height: 100%;
}
.rightTools {
  .el-container {
    .el-aside {
      width: 30px;
      border-right: 1px solid #ccc;
      i {
        font-size: 25px;
        margin: 20px 0;
        display: block;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .el-tabs {
      width: 100%;
      .el-tabs__content{
       overflow: auto;
      }
    }
  }
}
</style>

