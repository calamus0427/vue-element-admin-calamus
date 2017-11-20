<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="基础用法">
        <div class="block">
          <span class="demonstration">默认不区分颜色</span>
          <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
          <span class="demonstration">区分颜色</span>
          <el-rate
            v-model="value2"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
      </el-tab-pane>
      <el-tab-pane label="辅助文字">
        <el-rate
          v-model="value3"
          show-text>
        </el-rate>
      </el-tab-pane>
      <el-tab-pane label="其他ICON">
        <el-rate
          v-model="value4"
          :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
          void-icon-class="icon-rate-face-off"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </el-tab-pane>
      <el-tab-pane label="只读">
        <el-rate
          v-model="value5"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
      }
    }
  }
</script>
