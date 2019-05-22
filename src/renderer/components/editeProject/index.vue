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
          <i class="iconfont icon-ruanpan" @click="save"></i>
          <!-- 上一步 -->
          <i class="iconfont icon-chexiao" @click="back"></i>
          <!-- 下一步 -->
          <i class="iconfont icon-xiayibu" @click="forword"></i>
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
          <i class="iconfont icon-jiahao-" @click="add"></i>
          <i class="iconfont icon-fangdajing-copy"></i>
          {{$store.getters.getPageZoom}}%
          <i class="iconfont icon--hao" @click="sub"></i>
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
      <div class="contents" style="display: flex;overflow-x: hidden;">
        <el-aside>
          <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
            <!-- components -->
            <el-tab-pane>
              <span slot="label">
                <i class="iconfont icon-icon04"></i>
              </span>
              <components></components>
            </el-tab-pane>
            <!-- tool -->
            <el-tab-pane>
              <span slot="label">
                <i class="iconfont icon-gongwenbao"></i>
              </span>
              <tool></tool>
            </el-tab-pane>
            <!-- icon -->
            <el-tab-pane>
              <span slot="label">
                <i class="iconfont icon-smile"></i>
              </span>
              <icons></icons>
            </el-tab-pane>
            <!-- 母版 -->
            <el-tab-pane>
              <span slot="label">
                <i class="iconfont icon-jiegouhua"></i>
              </span>
              <photos></photos>
            </el-tab-pane>
          </el-tabs>
        </el-aside>
        <!-- 主操作 -->
        <el-main>
          <mianContainer></mianContainer>
        </el-main>
        <!-- 右边菜单 -->
        <el-aside class="right">
          <rightTools></rightTools>
        </el-aside>
      </div>
    </el-container>
  </div>
</template>

<script>
const fs = require("fs");
export default {
  components: {
    components: require("./component").default,
    tool: require("./tool").default,
    icons: require("./icons").default,
    photos: require("./photos").default,
    rightTools: require("./rightTools").default,
    mianContainer: require("./mianContainer").default
  },
  data() {
    return {
      activeName: "0",
      itemStank: []
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    add() {
      this.$store.dispatch("pageZoomPlus");
    },
    sub() {
      this.$store.dispatch("pageZoomSub");
    },
    back() {
      let main = document.querySelector(".mian");
      let lastChlid = main.lastChild;
      if (lastChlid) {
        this.itemStank.push(lastChlid);
        main.removeChild(lastChlid);
      }
    },
    forword() {
      let main = document.querySelector(".mian");
      let last = this.itemStank.pop();
      if (last) main.append(last);
    },
    save() {
      let main = document.querySelector(".mian");
      const fileName = this.$route.params.name,
        filePath = `./out/${fileName}.html`;
      fs.writeFile(`${filePath}.html`, `${main.innerHTML}`, "utf8", function(
        error
      ) {
        if (error) {
          console.log(error);
          return false;
        }
        console.log("写入成功");
      });
    }
  }
};
</script>

<style lang="less" >
.project {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 3px 1px 16px 0px #ccc;
    z-index: 9999;
    i {
      margin: 0 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .contents {
    display: flex;
    height: 100%;
    .el-aside {
      height: 100%;
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
            &:hover {
              cursor: pointer;
            }
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
        .switchIcon {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          i {
            font-size: 29px;
          }
        }
        .photos {
          .head {
            .el-input {
              width: 82%;
            }
            span {
              &:hover {
                cursor: pointer;
              }
            }
          }
          .imgs {
            width: 47%;
            float: left;
            text-align: center;
            margin: 16px 3px;
            border: 1px solid #ccc;
            img {
              width: 100%;
            }
            p {
              border-top: 1px solid #ccc;
            }
          }
        }
      }
    }
    .right {
      background: #fff;
      height: 100%;
    }
    .el-main {
      background: rgb(245, 245, 245);
      padding: 0;
    }
  }
  .block {
    display: block;
    width: 100%;
  }
}
</style>
