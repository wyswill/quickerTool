<template>
  <el-container>
    <el-slider v-model="value" vertical height="500px" :show-tooltip="true"></el-slider>
    <div
      :style="pageStyle"
      @drop="dropHander"
      @dragover="dragoverHander"
      class="mian"
      @click="click"
    >
      <component v-for="(ele,index) in cmps" :key="index" v-bind:is="ele"></component>
    </div>
    <attrBox :styles="styles"></attrBox>
  </el-container>
</template>

<script>
const fs = require("fs");
export default {
  components: {
    attrBox: require("../attrBox").default
  },
  data() {
    return {
      value: 50,
      pageStyle: {
        width: "375px",
        height: "667px",
        background: "#fff",
        zoom: "",
        "z-index": "99999",
        overflow: "auto"
      },
      styles: {
        sty: [],
        id: "",
        class: ""
      },
      cmps: []
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
    this.init();
    this.fock();
  },
  methods: {
    dropHander(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      let target = e.target;
      let html = this.insert_html(data);
      this.cmps.push(html);
      // target.append(html);
      this.fock();
    },
    dragoverHander(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    },
    dragstart_handler(e) {
      e.dataTransfer.setData("text", e.target.id);
    },
    active(e) {
      let target = e.target;
      target.style.borderWidth = "1px";
      target.style.borderStyle = "solid";
      target.style.borderColor = "red";
      /*  console.log(target.style.width);
      console.log(target.style.height); */
    },
    cansolActive(e) {
      let target = e.target;
      target.style.border = "none";
    },
    click(e) {
      let target = e.target;
      let styles = target.style.cssText.split(";");
      let { id, className } = target;
      this.styles.id = id;
      this.styles.class = className;
      this.styles.sty = styles;
    },
    fock() {
      let main = document.querySelector(".mian");
      main.onmouseenter = e => this.active(e);
      main.onmouseleave = e => this.cansolActive(e);
      let chliden = Array.from(main.children);
      chliden.map(ele => {
        ele.onmouseenter = e => this.active(e);
        ele.onmouseleave = e => this.cansolActive(e);
      });
    },
    init() {
      let title = document.querySelector(".el-icon-back");
      let filePath = `./out/${title.innerText}.html`;
      let main = document.querySelector(".mian");
      var data = "";
      // 创建可读流
      var readerStream = fs.createReadStream(filePath);
      // 设置编码为 utf8。
      readerStream.setEncoding("UTF8");
      // 处理流事件 --> data, end, and error
      readerStream.on("data", function(chunk) {
        data += chunk;
      });
      readerStream.on("end", function() {
        main.innerHTML = data;
      });
      readerStream.on("error", function(err) {
        console.log(err.stack);
      });
      console.log("程序执行完毕");
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
