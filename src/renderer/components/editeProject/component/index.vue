<template>
  <div class="com">
    <div
      v-for="(ele,index) in icons"
      :key="index"
      draggable
      @drag="dragHander"
      @dragstart="dragstart_handler"
      :id="ele.title"
    >
      <i class="iconfont" :class="ele.class"></i>
      {{ele.title}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          class: "icon-wenzi",
          title: "文字"
        },
        {
          class: "icon-juxing",
          title: "矩形"
        },
        {
          class: "icon-yuanxingweixuanzhong",
          title: "圆形"
        },
        {
          class: "icon-shuipingxian",
          title: "水平线"
        },
        {
          class: "icon-chuizhixian",
          title: "垂直线"
        },
        {
          class: "icon-anniu",
          title: "按钮"
        },
        {
          class: "icon-thumb",
          title: "图片"
        },
        {
          class: "icon-lianjie",
          title: "链接"
        },
        {
          class: "icon-xuanzewenjian",
          title: "选择文件"
        },
        {
          class: "icon-danhangshuru",
          title: "单行输入"
        },
        {
          class: "icon-textarea1",
          title: "多行输入"
        },
        {
          class: "icon-xialakuang",
          title: "下拉框"
        },
        {
          class: "icon-danxuananniu",
          title: "单选按钮"
        },
        {
          class: "icon-xuanzhong",
          title: "复选框"
        },
        {
          class: "icon-biaoge",
          title: "表格"
        },
        {
          class: "icon-dilan1",
          title: "标题栏"
        },
        {
          class: "icon-dilan",
          title: "底栏"
        },
        {
          class: "icon-kaiguanguan-open",
          title: "开关"
        },
        {
          class: "icon-carousel",
          title: "轮播图"
        }
      ]
    };
  },
  methods: {
    dragHander(e) {
      // console.log(e.target);
    },
    dragstart_handler(e) {
      e.dataTransfer.setData("text", e.target.id);
    }
  }
};
</script>

