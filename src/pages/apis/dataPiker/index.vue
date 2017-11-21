<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="TimePicker 时间选择器">
        <el-row :gutter="2">
          <el-col :span="12">
            <div class="block">
              <span class="demonstration">基本用法</span>
              <el-time-picker
                v-model="value2"
                :picker-options="{
                  selectableRange: '18:30:00 - 20:30:00'
                }"
                placeholder="任意时间点">
              </el-time-picker>
            </div>

          </el-col>
          <el-col :span="12">
            <div class="block">
              <span class="demonstration">日期范围</span>
              <el-time-picker
                    arrow-control
                  v-model="value3"
                  :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                  }"
                  placeholder="任意时间点">
                </el-time-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div class="block">
            <span class="demonstration">日期范围</span>
              <el-time-select
              placeholder="起始时间"
              v-model="startTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }">
            </el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime
              }">
            </el-time-select>
          </div>
        </el-row>
        <el-row :gutter="2">
          <el-col :span="12">
            <div class="block">
              <span class="demonstration">日期范围</span>
                <el-time-picker
                  is-range
                  v-model="value4"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
            </div>
          </el-col>
          <el-col :span="12">
            <el-time-picker
              is-range
              arrow-control
              v-model="value5"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </el-time-picker>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="DatePicker 日期选择器">
        <el-row>
           <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value6"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
        </el-row>
        <el-row :gutter="5">
          <el-col :span="8">
            <div class="block">
              <span class="demonstration">周</span>
              <el-date-picker
                v-model="value7"
                type="week"
                format="yyyy 第 WW 周"
                placeholder="选择周">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="block">
              <span class="demonstration">月</span>
              <el-date-picker
                v-model="value8"
                type="month"
                placeholder="选择月">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="block">
              <span class="demonstration">年</span>
              <el-date-picker
                v-model="value9"
                align="right"
                type="year"
                placeholder="选择年">
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div class="block">
            <span class="demonstration">日期范围</span>
            <el-date-picker
              v-model="value10"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              default-value="2010-10-01"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </div>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="DateTimePicker 日期时间选择器">
        <el-row>
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
                v-model="value11"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
        </el-row>
        <el-row :gutter="5">
            <el-col :span="12">
              <div class="block">
                  <span class="demonstration">默认</span>
                  <el-date-picker
                    v-model="value12"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
            </el-col>
            <el-col :span="12">
              <div class="block">
                  <span class="demonstration">带快捷选项</span>
                  <el-date-picker
                    v-model="value13"
                    type="datetimerange"
                    :picker-options="pickerOptions3"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                  </el-date-picker>
                </div>
            </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        pickerOptions3: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value10: '',
        value2: new Date(2016, 9, 10, 18, 40),
        value3: new Date(2016, 9, 10, 18, 40),
        startTime: '',
        endTime: '',
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value11: '',
        value12: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value13: ''
      };
    }
  }
</script>

<style lang="scss" scoped>
  .el-row{
    margin-bottom:20px;
  }
</style>


