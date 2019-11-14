<template>
  <div class="chart_container">
    <section class="chart_items" v-for="(com,index) in comList" :key="index">
      <keep-alive>
        <component v-bind:is="com" height="400px" width="700px"></component>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import "../../components/echarts/index.js";

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
  .chart_items{
    margin: 2em auto;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 8px;
    box-shadow: 0 0 45px rgba(0,0,0,.2);
    padding: 1.5em 2em;
    width: calc(40vw + 4em);
  }
</style>

