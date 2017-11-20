<template>
  <div >
    <el-tabs type="border-card">
      <el-tab-pane label="线形进度条 — 百分比外显">
        <div class="demo">
          <el-progress :percentage="0"></el-progress>
          <el-progress :percentage="70"></el-progress>
          <el-progress :percentage="100" status="success"></el-progress>
          <el-progress :percentage="50" status="exception"></el-progress>
        </div>
      </el-tab-pane>
      <el-tab-pane label="线形进度条 — 百分比内显">
        <div class="demo">
          <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        </div>
      </el-tab-pane>
      <el-tab-pane label="环形进度条">
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </el-tab-pane>
    </el-tabs>


    <el-tabs type="border-card">
      <el-tab-pane label="基础用法">
         <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value2"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
          </div>
      </el-tab-pane>
      <el-tab-pane label="离散值">
        <div class="block">
          <span class="demonstration">不显示间断点</span>
          <el-slider
            v-model="value6"
            :step="10">
          </el-slider>
        </div>
        <div class="block">
          <span class="demonstration">显示间断点</span>
          <el-slider
            v-model="value7"
            :step="10"
            show-stops>
          </el-slider>
        </div>
      </el-tab-pane>
      <el-tab-pane label="带有输入框">
        <div class="block">
          <el-slider
            v-model="value8"
            show-input>
          </el-slider>
        </div>
      </el-tab-pane>
      <el-tab-pane label="范围选择">
        <div class="block">
          <el-slider
            v-model="value9"
            range
            show-stops
            :max="10">
          </el-slider>
        </div>
      </el-tab-pane>
      <el-tab-pane label="竖向模式">
        <div class="block">
          <el-slider
            v-model="value10"
            vertical
            height="200px">
          </el-slider>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        value6: 0,
        value7: 0,
        value8: 0,
        value9: [4, 8],
        value10: 0,

      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .el-tabs+.el-tabs{
    margin-top:50px;
  }
  // .demo{
  //   border: 1px solid #ebebeb;
  //   border-radius: 3px;
  //   transition: .2s;
  // }
  .demo .el-progress--line {
    // padding:25px;
    display:block;
    margin-bottom: 15px;
    // width: 350px;
}
</style>


