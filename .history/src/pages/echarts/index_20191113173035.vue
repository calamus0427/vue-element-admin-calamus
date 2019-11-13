<template>
  <div class="chart_container">
    <section class="chart_items" v-for="(com,index) in comList" :key="index">
      <keep-alive>
        <component v-bind:is="com" id="com" height="400px" width="700px"></component>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import  "../../components/echarts/index.js";
export default {
  name:'',
  data(){
    return {
      comList:['cl-chart-bar','cl-chart-cmap']
    }
  }
}
</script>

<style lang="scss" scoped>
  .chart{
    margin:0 auto ;
  }
</style>

