<template>
  <div>
    <el-tabs tab-position="right" >
        <el-tab-pane label="综合应用图">
          <cl-charts-mix1 id="chart4" height="400px" width="700px"></cl-charts-mix1>
        </el-tab-pane>
        <el-tab-pane label="键盘图">
          <el-row :gutter="10">
            <el-col :span="12">
              <cl-charts-histogram id="chart1"></cl-charts-histogram>
            </el-col>
            <el-col :span="12">
              <cl-charts-histogram2 id="chart2"></cl-charts-histogram2>              <!-- <cl-charts-histogram2</cl-charts-histogram2> -->
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="折线图">
          <cl-charts-line1 id="chart3" height="400px" width="700px"></cl-charts-line1>
        </el-tab-pane>
        <el-tab-pane label="柱状图">敬请期待</el-tab-pane>
        <el-tab-pane label="饼状图">敬请期待</el-tab-pane>
        <el-tab-pane label="雷达图">敬请期待</el-tab-pane>
        <el-tab-pane label="地图">敬请期待</el-tab-pane>
        <el-tab-pane label="漏斗图">敬请期待</el-tab-pane>
        <el-tab-pane label="散点图">敬请期待</el-tab-pane>
        <el-tab-pane label="树状图">敬请期待</el-tab-pane>
        <el-tab-pane label="日历图">敬请期待</el-tab-pane>
        <el-tab-pane label="高级应用图">敬请期待</el-tab-pane>

      </el-tabs>

  </div>
</template>
<script>
 import "../../components/echarts/histogram/demo1.js";
 import "../../components/echarts/histogram/demo2.js";
 import "../../components/echarts/line/demo1.js";
 import "../../components/echarts/mix/demo1.js";


export default{

}


</script>

<style lang="scss" scoped>
  .chart{
    margin:0 auto ;
  }
</style>
