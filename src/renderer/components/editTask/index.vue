<template>
  <div>
    <el-row>
      <el-col :offset="10">
        <h1>{{$route.params.name}}</h1>
      </el-col>
      <el-col>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="projects" label="任务项" align="center"></el-table-column>
          <el-table-column prop="date" label="项目时间" align="center"></el-table-column>
          <el-table-column prop="author" label="创建者" align="center"></el-table-column>
          <el-table-column prop="status" label="状态" align="center"></el-table-column>
          <el-table-column prop="progress" label="进度反馈" align="center">
            <template slot-scope="scope">
              <div v-html="scope.row.progress" style="font-size: 20px;"></div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          projects: "二级分销",
          date: "2018/10/12 --- 2018/10/12",
          author: "Leader",
          status: "待办",
          progress: `<i class='el-icon-caret-right'></i>`
        },
        {
          projects: "三级分销",
          date: "2018/10/12 --- 2018/10/12",
          author: "Leader",
          status: "开发中",
          progress: `<i class='el-icon-refresh'></i>`
        },
        {
          projects: "banner+广告图",
          date: "2018/10/12 --- 2018/10/12",
          author: "Leader",
          status: "测试",
          progress: `<i class='el-icon-s-order'></i>`
        },
        {
          projects: "首页",
          date: "2018/10/12 --- 2018/10/12",
          author: "Leader",
          status: "已完成",
          progress: `<i class='el-icon-check'></i>`
        }
      ]
    };
  }
};
</script>

<style>
</style>
