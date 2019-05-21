<template>
  <el-row>
    <el-col>
      <div class="head">
        <el-input placeholder="搜索图标" prefix-icon="el-icon-search" v-model="input"></el-input>
        <span>
          <i class="iconfont icon-tianjiawenzhang"></i>
          <i class="iconfont icon-tianjiawenjian"></i>
        </span>
      </div>
    </el-col>
    <el-col>
      <div class="custom-tree-container">
        <div class="block">
          <el-tree :data="data" node-key="id"  :expand-on-click-node="true"></el-tree>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
let id = 1000;

export default {
  data() {
    const data = [
      {
        id: 1,
        label: "登录/注册",
        children: [
          {
            id: 4,
            label: "登录"
          },
          {
            id: 5,
            label: "注册"
          }
        ]
      },
      {
        id: 2,
        label: "领劵中心"
      },
      {
        id: 3,
        label: "超值预购",
        children: [
          {
            id: 7,
            label: "次日取"
          },
          {
            id: 8,
            label: "农场预定直采"
          }
        ]
      },
    ];
    return {
      input: "",
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data))
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
// .el-row,
// .el-col,
// .custom-tree-container {
//   height: 100%;
// }
.head {
  width: 75%;
  span {
    position: absolute;
    top: 4px;
    right: -13px;
    i {
      font-size: 32px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.custom-tree-container {
  position: relative;
  top: 0px;
  left: -9px;
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
}
</style>

