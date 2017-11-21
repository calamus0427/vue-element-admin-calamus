// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.$http = axios

import Vuex from 'vuex'
import store from './vuex/store'

import Mock from 'mockjs';


//图标组件
import './components/icon/font/iconfont.css'
import './components/icon/font/iconfont.js'
import './components/icon/icon.js'  //icon
//对话框组件
import './components/talk/talk.js'  //talk
//搜索组件
import './components/search/search_input.js'
//canvas组件
import './components/canvas/canvas.js'
//登录组件
import "./components/login/login.js";
//Echarts组件们
// import "./components/echarts/histogram/demo1.js";



//关闭生产过程中的提示
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: {
    App,
  },
})
