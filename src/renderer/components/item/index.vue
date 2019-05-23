<template>
  <div class="container">
    <div
      :class="{item:config.type=='addOne',project:config.type=='project'}"
      @click="dialogVisible = config.type=='addOne'"
    >
      <i class="el-icon-folder-add" v-if="config.type=='addOne'">创建新项目</i>
      <div v-else class="project-content" @mouseenter="enter" @mouseleave="leave">
        <div>
          <i class="el-icon-s-custom">{{config.num}}</i>
        </div>
        <div class="images">
          <img :src="config.imgSrc" alt="项目icon">
        </div>
        <p>{{config.name}}</p>
        <div class="foot">
          最后编辑:{{config.lastEditeTime}}
          <i class="el-icon-edit"></i>
        </div>
        <!-- 项目选项 -->
        <div class="selection" v-show="isShow">
          <el-button @click="edit">编辑前端页面</el-button>
          <el-button @click="run">运行预览</el-button>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <el-dialog title="创建新项目" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <!-- from -->
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="项目英文名">
          <el-input v-model="form.englishName" placeholder="项目英文名"></el-input>
        </el-form-item>
        <el-form-item label="项目中文名">
          <el-input v-model="form.chinesName" placeholder="项目中文名"></el-input>
        </el-form-item>
        <el-form-item label="选择项目框架">
          <el-select v-model="form.framework" placeholder="请选择" size="medium">
            <el-option
              v-for="item in framework"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择开发工具">
          <el-select v-model="form.options" placeholder="请选择" size="medium">
            <el-option
              v-for="item in DEVTools"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目类型">
          <el-button type="primary" class="el-icon-mobile-phone">移动端</el-button>
          <el-button type class="el-icon-s-platform">PC端</el-button>
        </el-form-item>
        <el-form-item label="分辨率">
          <el-select v-model="form.resolution" placeholder="请选择" size="medium">
            <el-option
              v-for="item in resolution"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["config"],
  data() {
    return {
      dialogVisible: false,
      form: {
        englishName: "",
        chinesName: "",
        framework: "",
        resolution: ""
      },
      framework: [
        {
          value: "选项1",
          label: "Spring+springMVC+mybatis"
        }
      ],
      DEVTools: [
        {
          value: "选项1",
          label: "IDEA"
        }
      ],
      resolution: [
        {
          value: "选项1",
          label: "iphone6-8 (375*667)"
        }
      ],
      isShow: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    enter() {
      this.isShow = true;
    },
    leave() {
      this.isShow = false;
    },
    edit() {
      this.$router.replace({
        name: "editeProject",
        params: {
          name: this.config.name
        }
      });
    },
    run() {}
  }
};
</script>

<style lang="less" scoped>
.borderradius() {
  border-radius: 10px;
}
.item,
.project {
  width: 303px;
  height: 280px;
  text-align: center;
  line-height: 280px;
  display: inline-block;
  border-radius: 10px;
  .borderradius();
  border: 1px dashed #000;
  &:hover {
    cursor: pointer;
  }
}
.project {
  border: 1px solid #ccc;
  text-align: right;
  line-height: 0;
}
.project-content {
  position: relative;
  i {
    color: #d2a254;
    margin: 10px 10px 0 0;
  }
  .images {
    display: flex;
    justify-content: center;
    margin-top: 20%;
  }
  p {
    text-align: center;
    margin-top: 20%;
  }
  .foot {
    margin-top: 9%;
    border-top: 2px solid #ccc;
    height: 42px;
    line-height: 42px;
    color: #888888;
    opacity: 77%;
    text-align: left;
    i {
      float: right;
      font-size: 22px;
    }
  }
  .selection {
    position: absolute;
    top: 0;
    background: #fff;
    width: 100%;
    height: 99%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button {
      color: #ff9800;
      margin: 15px 0;
      border-color: #ff9800;
    }
    .borderradius();
  }
}
.el-select {
  width: 100%;
}
.container {
  flex: auto;
  margin-bottom: 30px;
}
</style>

