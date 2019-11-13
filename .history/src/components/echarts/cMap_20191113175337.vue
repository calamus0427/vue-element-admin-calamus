<template>
    <!-- <div class="fillcontain">
        <div class="fillcontainer" ref="fillcontainer">
            <div id="fundPosition" class="echartsPosition"></div>
        </div>
    </div> -->
    <chart :options="option" ref="chartsAll" />
</template>

<script>
import ECharts from "vue-echarts/components/ECharts";
// import echarts from 'echarts'
import '../../../node_modules/echarts/map/js/china.js';
import "echarts/lib/chart/map";
    export default {
        name:'clChartCmap',
        components: { chart: ECharts },
        data(){
          return {
            chart:null,
            option:{
                title: {
                    text: '2019年全国各省份投资情况',
                    subtext: '单位/万元',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['总投资额']
                },
                visualMap: {
                    min: 0,
                    max: 1200000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高','低'],           // 文本，默认为数值文本
                    calculable: true
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '总投资额',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:[
                            {name: '北京',value: this.randomData() },
                            {name: '天津',value: this.randomData() },
                            {name: '上海',value: this.randomData() },
                            {name: '重庆',value: this.randomData() },
                            {name: '河北',value: this.randomData() },
                            {name: '河南',value: this.randomData() },
                            {name: '云南',value: this.randomData() },
                            {name: '辽宁',value: this.randomData() },
                            {name: '黑龙江',value: this.randomData() },
                            {name: '湖南',value: this.randomData() },
                            {name: '安徽',value: this.randomData() },
                            {name: '山东',value: this.randomData() },
                            {name: '新疆',value: this.randomData() },
                            {name: '江苏',value: this.randomData() },
                            {name: '浙江',value: this.randomData() },
                            {name: '江西',value: this.randomData() },
                            {name: '湖北',value: this.randomData() },
                            {name: '广西',value: this.randomData() },
                            {name: '甘肃',value: this.randomData() },
                            {name: '山西',value: this.randomData() },
                            {name: '内蒙古',value: this.randomData() },
                            {name: '陕西',value: this.randomData() },
                            {name: '吉林',value: this.randomData() },
                            {name: '福建',value: this.randomData() },
                            {name: '贵州',value: this.randomData() },
                            {name: '广东',value: this.randomData() },
                            {name: '青海',value: this.randomData() },
                            {name: '西藏',value: this.randomData() },
                            {name: '四川',value: this.randomData() },
                            {name: '宁夏',value: this.randomData() },
                            {name: '海南',value: this.randomData() },
                            {name: '台湾',value: this.randomData() },
                            {name: '香港',value: this.randomData() },
                            {name: '澳门',value: this.randomData() }
                        ]
                    }
                ]
            }
          }
        },
        mounted(){
            //   this.initChart()
              this.selfAdaption();
        },
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
        },
        randomData() {
            return Math.round(Math.random()*1000000);
        },
          drawMap (id) {
            // echarts.init(),初始化数据      
            if ( this.chart &&  this.chart.dispose) { 
               this.chart.dispose(); 
            }   
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption({
                title: {
                    text: '2019年全国各省份投资情况',
                    subtext: '单位/万元',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['总投资额']
                },
                visualMap: {
                    min: 0,
                    max: 1200000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高','低'],           // 文本，默认为数值文本
                    calculable: true
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '总投资额',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:[
                            {name: '北京',value: this.randomData() },
                            {name: '天津',value: this.randomData() },
                            {name: '上海',value: this.randomData() },
                            {name: '重庆',value: this.randomData() },
                            {name: '河北',value: this.randomData() },
                            {name: '河南',value: this.randomData() },
                            {name: '云南',value: this.randomData() },
                            {name: '辽宁',value: this.randomData() },
                            {name: '黑龙江',value: this.randomData() },
                            {name: '湖南',value: this.randomData() },
                            {name: '安徽',value: this.randomData() },
                            {name: '山东',value: this.randomData() },
                            {name: '新疆',value: this.randomData() },
                            {name: '江苏',value: this.randomData() },
                            {name: '浙江',value: this.randomData() },
                            {name: '江西',value: this.randomData() },
                            {name: '湖北',value: this.randomData() },
                            {name: '广西',value: this.randomData() },
                            {name: '甘肃',value: this.randomData() },
                            {name: '山西',value: this.randomData() },
                            {name: '内蒙古',value: this.randomData() },
                            {name: '陕西',value: this.randomData() },
                            {name: '吉林',value: this.randomData() },
                            {name: '福建',value: this.randomData() },
                            {name: '贵州',value: this.randomData() },
                            {name: '广东',value: this.randomData() },
                            {name: '青海',value: this.randomData() },
                            {name: '西藏',value: this.randomData() },
                            {name: '四川',value: this.randomData() },
                            {name: '宁夏',value: this.randomData() },
                            {name: '海南',value: this.randomData() },
                            {name: '台湾',value: this.randomData() },
                            {name: '香港',value: this.randomData() },
                            {name: '澳门',value: this.randomData() }
                        ]
                    }
                ]
            });
          },
          initChart(){
                this.$nextTick(() => {
                    this.$refs.fillcontainer.style.height = (document.body.clientHeight - 160)+'px'
                    this.drawMap('fundPosition');
                    var resizeTimer = null;
                    // 保证页面在放大或缩小时，也能够动态的显示数据
                    window.onresize = function() {
                    if (resizeTimer) clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function() {
                        this.$refs.fillcontainer.style.height = (document.body.clientHeight - 160)+'px'
                        this.drawMap('fundPosition');
                    }, 100);
                    }
                })
            }
        }
    }
</script>

<style scoped>
.fillcontain {
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
}
.echartsPosition {
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: 0 0 10px #FF6C60;
    box-shadow: 0 0 10px #FF6C60;
    border-radius: 10px;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.chartsAll {
  height: 100%;
  width: 100%;
}
</style>
