<template>
  <!-- 订单总数 -->
  <el-row>
      <el-col :span="12">
        <chart :options="option1" ref="charts1" autoresize/>
      </el-col>
      <el-col :span="12">
        <chart :options="option2" ref="charts2" autoresize/>
      </el-col>
  </el-row>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/graph";

var axisData = ['周一','周二','周三','很长很长的周四','周五','周六','周日'];
var data = axisData.map(function (item, i) {
    return Math.round(Math.random() * 1000 * (i + 1));
});
var links = data.map(function (item, i) {
    return {
        source: i,
        target: i + 1
    };
});
links.pop();

export default {
  name: "clChartRelation",
  mounted() {
    this.selfAdaption();
  },
  data() {
    return {
      option1:{
          title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点1',
                x: 300,
                y: 300
            }, {
                name: '节点2',
                x: 800,
                y: 300
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 550,
                y: 500
            }],
            // links: [],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: '节点2',
                target: '节点1',
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: { curveness: 0.2 }
                }
            }, {
                source: '节点1',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点4'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
      },
      option2:{
title: {
        text: '笛卡尔坐标系上的 Graph'
    },
    tooltip: {},
    xAxis: {
        type : 'category',
        boundaryGap : false,
        data : axisData
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 40,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            data: data,
            links: links,
            lineStyle: {
                normal: {
                    color: '#2f4554'
                }
            }
        }
    ]
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
