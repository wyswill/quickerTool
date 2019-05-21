<template>
  <div class="photos">
    <div class="head">
      <el-input placeholder="搜索图标" prefix-icon="el-icon-search" v-model="input"></el-input>
      <span>
        <i class="iconfont icon-jiahao-"></i>新建
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

