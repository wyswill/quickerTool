<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="web组件" name="1">
      <components></components>
    </el-collapse-item>
    <el-collapse-item title="moblie组件" name="2">
      <components></components>
    </el-collapse-item>
    <el-collapse-item title="图表组件" name="3">
      <components></components>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  components: {
    components: require("../component").default
  },
  data() {
    return {
      activeName: "1"
    };
  }
};
</script>
<style lang="less" scoped>
</style>
