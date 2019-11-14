<template>
    <!-- 订单总数 -->
    <chart :options="option" ref="chartsAll" autoresize/>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/tree";

var data1 = {
    "name": "flare",
    "children": [
        {
            "name": "data",
            "children": [
                {
                     "name": "converters",
                     "children": [
                      {"name": "Converters", "value": 721},
                      {"name": "DelimitedTextConverter", "value": 4294}
                     ]
                },
                {
                    "name": "DataUtil",
                    "value": 3322
                }
            ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "value": 8833},
                {"name": "LineSprite", "value": 1732},
                {"name": "RectSprite", "value": 3623}
           ]
        },
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "value": 4116}
            ]
        },
        {
           "name": "query",
           "children": [
            {"name": "AggregateExpression", "value": 1616},
            {"name": "And", "value": 1027},
            {"name": "Arithmetic", "value": 3891},
            {"name": "Average", "value": 891},
            {"name": "BinaryExpression", "value": 2893},
            {"name": "Comparison", "value": 5103},
            {
             "name": "methods",
             "children": [
              {"name": "add", "value": 593},
              {"name": "and", "value": 330},
              {"name": "average", "value": 287},
              {"name": "count", "value": 277},
              {"name": "distinct", "value": 292},
              {"name": "xor", "value": 354},
             ]
            },
            {"name": "Minimum", "value": 843},
            {"name": "Not", "value": 1554},
            {"name": "Or", "value": 970},
            {"name": "Variable", "value": 1124},
            {"name": "Variance", "value": 1876},
            {"name": "Xor", "value": 1101}
           ]
          },
        {
           "name": "scale",
           "children": [
            {"name": "IScaleMap", "value": 2105},
            {"name": "LinearScale", "value": 1316},
            {"name": "LogScale", "value": 3151},
           ]
        }
    ]
};

var data2 = {
    "name": "flare",
    "children": [
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "value": 4116}
            ]
        },
        {
            "name": "scale",
            "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
           ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "value": 8833}
           ]
        }
    ]
};


export default {
  name: "clChartPie",
  mounted() {
  },
  data() {
    return {
      option:{
            tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'tree1',
            icon: 'rectangle'
        } ,
        {
            name: 'tree2',
            icon: 'rectangle'
        }],
        borderColor: '#c23531'
    },
    series:[
        {
            type: 'tree',

            name: 'tree1',

            data: [data1],

            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%',

            symbolSize: 7,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

        },
        {
            type: 'tree',
            name: 'tree2',
            data: [data2],

            top: '20%',
            left: '60%',
            bottom: '22%',
            right: '18%',

            symbolSize: 7,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
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
  }
};
</script>

<style scoped>
.chartsAll {
  height: 100%;
  width: 100%;
}
</style>
