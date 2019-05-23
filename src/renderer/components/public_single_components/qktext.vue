<template>
  <div class="qktext">
    {{content}}
    这是一段默认文本
  </div>
</template>

<script>
export default {
  props: ["content"]
};
</script>

<style lang="less" scoped>
.qktext {
  height: 50px;
}
</style>
