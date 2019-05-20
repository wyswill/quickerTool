<template>
  <div>
    <el-row>
      <el-col :offset="20">
        <i class="el-icon-d-caret">最后修改在前面</i>
      </el-col>
    </el-row>
    <div class="content">
      <item v-for="(ele,index) in items" :key="index" :config="ele"></item>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    item: require("../item/index.vue").default
  },
  data() {
    return {
      items: [
        {
          type: "addOne"
        },
        {
          type: "project",
          num: 1,
          imgSrc: require("../../assets/user.png"),
          name: "樱草单商户微信小程序",
          lastEditeTime: "大约一个月之前"
        },
        {
          type: "project",
          num: 1,
          imgSrc: require("../../assets/user.png"),
          name: "樱草单商户微信小程序",
          lastEditeTime: "大约一个月之前"
        },
        {
          type: "project",
          num: 1,
          imgSrc: require("../../assets/user.png"),
          name: "樱草单商户微信小程序",
          lastEditeTime: "大约一个月之前"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.content {
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

