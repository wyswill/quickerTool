<template>
  <div class="attrBox">
    <div class="header">
      <span>样式设置</span>
    </div>
    <el-form label-position="left" label-width="40px">
      <el-form-item label="id:">
        <el-input v-model="styles.id"></el-input>
      </el-form-item>
      <el-form-item label="class:">
        <el-input v-model="styles.class"></el-input>
      </el-form-item>
    </el-form>
    <div class="styles">
      <p v-for="(ele,index) in styles.sty" :key="index">{{ele}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["styles"],
  data() {
    return {
      labelPosition: "right"
    };
  }
};
</script>

<style lang="less" scoped>
.attrBox {
  width: 270px;
  background: #fff;
  position: absolute;
  right: 17%;
  top: 20%;
  .styles {
    margin-left: 8%;
    margin-right: 8%;
    margin-bottom: 10%;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    p {
      padding: 2% 0;
    }
  }
}
</style>

