import Vue from 'vue'

import Router from 'vue-router'

// 引用页面模板->供路由使用
import index from '../pages/index.vue'
import nav_aside from '../pages/nav/nav_aside.vue'
import music from '../pages/music/index.vue'
import icon from '../pages/icon/index.vue'
import todolistShow from '../pages/todoList/index.vue'
import shop from '../pages/shop/index.vue'
import ten from '../pages/gal/ten.vue'
import login from "../pages/login/login.vue"
import Code404 from "../pages/Code404/Code404"
import Code500 from "../pages/Code500/Code500"
import introduce from "../pages/introduce/index"
import background from "../pages/apis/background/index"
import backTotop from "../pages/apis/backTotop/index"
import carousel from "../pages/apis/carousel/index"
import dataPiker from "../pages/apis/dataPiker/index"
import form from "../pages/apis/form/index"
import iconNav from "../pages/apis/icon/index"
import mark from "../pages/apis/mark/index"
import permission from "../pages/apis/permission/index"
import process from "../pages/apis/process/index"
import starrating from "../pages/apis/starrating/index"
import table from "../pages/apis/table/index"
import todolist from "../pages/apis/todolist/index"
import jsonEditor from "../pages/editor/json/index"
import richEditor from "../pages/editor/rich/index"
import markdownEditor from "../pages/editor/markdown/index"
import video from "../pages/video/index"
import vuePpt from "../pages/vue_ppt/index"
import game from "../pages/game/index"
import gallery from "../pages/gallery/index"
import navTable from "../pages/navTable/index"
import next from "../pages/next/index"
import echartsInfo from "../pages/echarts/index"
import mockNav from "../pages/mock/index"
import markdown from "../pages/markdown/index"
import vueAnimation from "../pages/animation/index"
import blog from "../pages/blog/index";
import upload from "../pages/upload/index";

















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
      redirect: "/login"
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
      path: '/blog',
      name: 'blog',
      component: blog
    }, {
      path: '/todolistShow',
      name: 'todolistShow',
      component: todolistShow
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon,
      // children:[
      //   {path: 'example',
      //   name: 'example',
      //   component: example},

      // ],
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav_aside,
      children:[{
        path:'/todolist',
        name:'todolist',
        component:todolist,
      },
      {path: '/music',
      name: 'music',
      component: music},
      {path: '/video',
      name: "video",
      component: video
    },
    {
      path: '/Code404',
      name: 'Code404',
      component: Code404
    },
    {
      path: '/Code500',
      name: 'Code500',
      component: Code500
    },
        {
      path: '/upload',
      name: "upload",
      component: upload
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
  {
      path: '/background',
      name: 'background',
      component: background
    },{
      path: '/backTotop',
      name: "backTotop",
      component: backTotop
    },{
      path: '/carousel',
      name: "carousel",
      component: carousel
    },{
      path: '/dataPiker',
      name: "dataPiker",
      component: dataPiker
    },{
      path: '/form',
      name: 'form',
      component: form
    },{
      path: '/iconNav',
      name: 'iconNav',
      component: iconNav
    },{
      path: '/mark',
      name: 'mark',
      component: mark
    },{
      path: '/permission',
      name: "permission",
      component: permission
    },{
      path: '/process',
      name: "process",
      component: process
    },{
      path: '/starrating',
      name: "starrating",
      component: starrating
    },{
      path: '/table',
      name: "table",
      component: table
    },{
      path: '/jsonEditor',
      name: "jsonEditor",
      component: jsonEditor
    },{
      path: '/markdownEditor',
      name: "markdownEditor",
      component: markdownEditor
    },{
      path: '/richEditor',
      name: "richEditor",
      component: richEditor
    },{
      path: '/vuePpt',
      name: "vuePpt",
      component: vuePpt
    },{
      path: '/game',
      name: "game",
      component: game
    },{
      path: '/gallery',
      name: "gallery",
      component: gallery
    },{
      path: '/navTable',
      name: "navTable",
      component: navTable
    },{
      path: '/next',
      name: "next",
      component: next
    },{
      path: "/echarts",
      name: "echarts",
      component: echartsInfo
    },{
      path: "/mockNav",
      name: "mockNav",
      component: mockNav
    },{
      path: "/markdown",
      name: "markdown",
      component: markdown
    },{
      path: "/vueAnimation",
      name: "vueAnimation",
      component: vueAnimation
    }]
    },

    {
      path: "*",
      redirect: "/Code404"
    }
  ]
})
