<template>
  <div class="project">
    <el-container>
      <el-header>
        <!-- 返回 -->
        <i
          class="el-icon-back"
          @click="()=>{this.$router.push({path:'/myWorkBar/frontEnd/myProject'})}"
        >{{this.$route.params.name}}</i>
        <span>
          <!-- 保存 -->
          <i class="iconfont icon-ruanpan"></i>
          <!-- 上一步 -->
          <i class="iconfont icon-chexiao"></i>
          <!-- 下一步 -->
          <i class="iconfont icon-xiayibu"></i>
        </span>
        <span>
          <i class="iconfont icon-tucengzhizuoyuweihu"></i>
          <i class="iconfont icon-fangxing"></i>
          <i class="iconfont icon-fangxing"></i>
        </span>
        <span>
          <i class="iconfont icon-jiegouhua"></i>
        </span>
        <span>
          <i class="iconfont icon-jiahao-"></i>
          <i class="iconfont icon-fangdajing-copy"></i>80%
          <i class="iconfont icon--hao"></i>
        </span>
        <span>
          <i class="iconfont icon-tupianguanli"></i>页面库
        </span>
        <span>
          <i class="iconfont icon-shangchuan"></i>
          <i class="iconfont icon-fenxiang1"></i>
        </span>
        <span>
          <i class="iconfont icon-yulan"></i>预览
          <i class="iconfont icon-ico"></i>二维码
        </span>
      </el-header>
      <el-aside>
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
          <el-tab-pane>
            <span slot="label">
              <i class="iconfont icon-icon04"></i>
            </span>
            <components></components>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <i class="iconfont icon-gongwenbao"></i>
            </span>
            <tool></tool>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <i class="iconfont icon-smile"></i>
            </span>
            我的行程
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <i class="iconfont icon-jiegouhua"></i>
            </span>
            我的行程
          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-aside></el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {
    components: require("./component").default,
    tool: require("./tool").default
  },
  data() {
    return {
      activeName: "0"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less" >
.project {
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .el-aside {
    .el-tab-pane {
      .com {
        display: flex;
        flex-wrap: wrap;

        div {
          border: 1px solid #ccc;
          width: 32.6%;
          height: 80px;
          text-align: center;
          line-height: 100px;
          position: relative;
          font-size: 15px;
          i {
            font-size: 20px;
            &::before {
              font-size: 20px;
              position: absolute;
              top: -21px;
              left: 37px;
            }
          }
        }
      }
    }
  }
}
</style>
