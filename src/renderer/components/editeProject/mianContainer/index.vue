<template>
  <el-container>
    <el-slider v-model="value" vertical height="500px" :show-tooltip="true"></el-slider>
    <div :style="pageStyle" @drop="dropHander" @dragover="dragoverHander" class="mian"></div>
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
        zoom: "",
        "z-index": "99999"
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
  },
  methods: {
    dropHander(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      let target = e.target;
      let html = this.insert_html(data);
      target.append(html);
    },
    dragoverHander(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  justify-content: center;
  align-items: center;
}
</style>
