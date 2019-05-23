<template>
  <div class="photos">
    <div class="head">
      <el-input placeholder="搜索图标" prefix-icon="el-icon-search" v-model="input"></el-input>
      <span>
        <i class="iconfont icon-jiahao-"></i>新建
      </span>
    </div>
    <div class="imgs" v-for="(ele,index) in imgs" :key="index">
      <img :src="ele.imgSrc" alt>
      <p>{{ele.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      imgs: [
        { imgSrc: require("../../../assets/1.jpg"), title: "限时优惠副本" },
        { imgSrc: require("../../../assets/2.jpg"), title: "限时优惠副本" },
        { imgSrc: require("../../../assets/3.jpg"), title: "限时优惠副本" },
        { imgSrc: require("../../../assets/4.jpg"), title: "限时优惠副本" },
        { imgSrc: require("../../../assets/5.jpg"), title: "限时优惠副本" },
        { imgSrc: require("../../../assets/6.jpg"), title: "限时优惠副本" }
      ]
    };
  }
};
</script>

