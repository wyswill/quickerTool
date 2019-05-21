<template>
  <div class="icons">
    <el-input placeholder="搜索图标" prefix-icon="el-icon-search" v-model="input2"></el-input>
    <el-tabs tab-position="left" style="height: 100%;">
      <el-tab-pane v-for="(ele,index) in labels" :key="index">
        <span slot="label">{{ele.title}}</span>
        <span class="switchIcon"> 
          <i v-for="(eles,inddexs) in ele.value" :key="inddexs" class="iconfont" :class="eles"></i>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: [
        {
          title: "全部",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "Web App",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "医疗",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "文字编辑",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "旋转",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "文件类型",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "方向",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "播放器",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "表单",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "交通",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "图标",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "Logo",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "手势",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "支付",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "货币",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "无障碍",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        },
        {
          title: "性别",
          value: [
            "icon-thumb",
            "icon-carousel",
            "icon-shuipingxian",
            "icon-chuizhixian",
            "icon-dilan1"
          ]
        }
      ],
      input2: ""
    };
  }
};
</script>

