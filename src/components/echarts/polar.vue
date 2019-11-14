<template>
    <!-- 订单总数 -->
    <chart :options="option" ref="chartsAll"/>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";
let data = []

for (let i = 0; i <= 360; i++) {
  let t = (i / 180) * Math.PI
  let r = Math.sin(2 * t) * Math.cos(2 * t)
  data.push([r, i])
}

export default {
  name: "clChartPolar",
  mounted() {
    this.selfAdaption();
  },
  data() {
    return {
      option:{
          title: {
    text: '极坐标双数值轴'
  },
  legend: {
    data: ['line']
  },
  polar: {
    center: ['50%', '54%']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  angleAxis: {
    type: 'value',
    startAngle: 0
  },
  radiusAxis: {
    min: 0
  },
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      showSymbol: false,
      data: data
    }
  ],
  animationDuration: 2000
      }
    };
  },
  props: {
  },
  watch: {
  },
  components: { chart: ECharts },
  methods: {
    selfAdaption() {
      let _this = this;
      setTimeout(() => {
        window.addEventListener("resize", function() {
          if (_this.$refs.chartsAll) {
            _this.$refs.chartsAll.resize();
          }
        });
      }, 10);
    }
  }
};
</script>

<style scoped>
.chartsAll {
  height: 100%;
  width: 100%;
}
</style>
