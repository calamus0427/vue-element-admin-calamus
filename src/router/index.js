import Vue from 'vue'

import Router from 'vue-router'

// 引用页面模板->供路由使用
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'
import nav_aside from '../pages/nav/nav_aside.vue'
import search from '../pages/search/search_input.vue'
import music from '../pages/music/index.vue'
import icon from '../pages/icon/index.vue'
import todoList from '../pages/todoList/index.vue'
import shop from '../pages/shop/index.vue'
import ten from '../pages/gal/ten.vue'
import login from "../pages/login/login.vue"
import Code404 from "../pages/Code404/Code404"



// 引入子路由页面
import example from '../pages/icon/demo_fontclass.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: "/login",
      name: 'login',
      component: login
    },
    {
      path: "/",
      name: 'login',
      component: login
    },
    {
      path: '/ten',
      name: 'ten',
      component: ten
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon,
      children:[
        {path: 'example',
        name: 'example',
        component: example},

      ],
    },
    // {
    //   path: '/icon/example',
    //   name: 'example',
    //   component: example,
    //   children:[],
    // },
    // {
    //   path: '/music',
    //   name: 'music',
    //   component: music,
    //   children:[],
    // },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav_aside,
      children:[{
        path:'/todolist',
        name:'todolist',
        component:todoList,
      },
      {path: '/music',
      name: 'music',
      component: music},
    {
      path: '/Code404',
      name: 'Code404',
      component: Code404
    },]
    },

    {
      path: "*",
      redirect: "/Code404"
    }
  ]
})
