<template>
  <div>
    <el-tabs tab-position="right" >
        <el-tab-pane label="柱状图">
          <cl-charts-histogram></cl-charts-histogram>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>

  </div>
</template>
<script>
 import "../../components/echarts/histogram/demo1.js";
export default{

}


</script>
