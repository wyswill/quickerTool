<template>
  <el-container>
    <el-slider v-model="value" vertical height="500px"></el-slider>
    <div :style="pageStyle"></div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      value: 50,
      pageStyle: {
        width: "375px",
        height: "667px",
        background: "#fff",
        zoom: ""
      }
    };
  },
  computed: {
    zooms() {
      return this.$store.getters.getPageZoom;
    }
  },
  watch: {
    value: function(vals) {
      this.$store.dispatch("setPageZoom", vals);
      this.pageStyle.zoom = `${vals + 50}%`;
    },
    zooms(vals) {
      this.pageStyle.zoom = `${vals + 50}%`;
      this.value = vals;
    }
  },
  mounted() {
    this.$store.dispatch("setPageZoom", this.value);
  }
};
</script>

<style lang="less" scoped>
.el-container {
  justify-content: center;
  align-items: center;
}
</style>
