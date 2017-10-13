// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

import Vuex from 'vuex'
import store from './vuex/store'

//自定义图标
import './components/icon/font/iconfont.css'
import './components/icon/font/iconfont.js'
import './components/icon/icon.js'  //icon


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
