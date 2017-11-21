<template>
<el-container>
  <el-aside :width="width">
    <el-menu class="nav_aside el-menu-vertical-demo"
      mode="vertical"
      default-active="index"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :unique-opened="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="introduce">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#cl-icon-Mousse"></use>
        </svg>
        <span slot="title">首页</span>
      </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-API"></use>
                              </svg>
                              <span slot="title">
                                组件及API
                            </span>
                        </template>
                        <el-submenu index="1-1">
                            <span slot="title">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-jiatingyijianchongzhi"></use>
                              </svg>
                              基本组件
                            </span>
                            <el-menu-item index="Carousel">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-suanzhang"></use>
                              </svg>轮播图
                            </el-menu-item>
                            <el-menu-item index="todolist">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-qinqin"></use>
                              </svg>
                                todolist
                            </el-menu-item>
                            <el-menu-item index="iconNav">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-keai"></use>
                              </svg>ICON
                            </el-menu-item>
                            <el-menu-item index="table">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-deyi"></use>
                              </svg>
                              Table
                            </el-menu-item>
                            <el-menu-item index="form">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-ku"></use>
                              </svg>
                              Form
                            </el-menu-item>
                            <el-menu-item index="StarRating">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-daku"></use>
                              </svg>
                              星级评分
                            </el-menu-item>
                            <el-menu-item index="process">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-gongxifacai"></use>
                              </svg>
                              进度条
                            </el-menu-item>
                            <el-menu-item index="dataPiker">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-han"></use>
                              </svg>
                              时间选择器
                            </el-menu-item>
                            <el-menu-item index="backToTop">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-xiaoer"></use>
                              </svg>
                              返回顶部
                            </el-menu-item>
                            <el-menu-item index="permission">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-caimi"></use>
                              </svg>
                              权限
                            </el-menu-item>
                            <el-menu-item index="mark">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-kiss-2"></use>
                              </svg>
                              标记
                            </el-menu-item>
                            <el-menu-item index="upload">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-haixiu"></use>
                              </svg>
                              上传文件
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-2">
                            <span slot="title">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-tushu1"></use>
                              </svg>
                              文本编辑器
                            </span>
                            <el-menu-item index="richEditor">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-saodi"></use>
                              </svg>
                              富文本编辑器
                            </el-menu-item>
                            <el-menu-item index="markdownEditor">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-ganhuo"></use>
                              </svg>
                              Markdown编辑器
                            </el-menu-item>
                            <el-menu-item index="jsonEditor">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-jiaoshu"></use>
                              </svg>
                              Json编辑器
                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                          <svg class="icon" aria-hidden="true">
                              <use xlink:href="#cl-icon-xiugaicelve"></use>
                          </svg>
                          <span slot="title">
                            组件综合应用
                          </span>
                        </template>
                        <el-menu-item index="gallery">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#cl-icon-xiangji4"></use>
                          </svg>
                          画廊
                        </el-menu-item>
                        <el-menu-item index="music">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#cl-icon-luyin1"></use>
                          </svg>
                          音乐播放器
                          </el-menu-item>
                        <el-menu-item index="video">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#cl-icon-shipinzhongxin"></use>
                          </svg>
                          视频播放器
                        </el-menu-item>
                        <el-menu-item index="vuePpt">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#cl-icon-ppt"></use>
                          </svg>
                          Vue-PPT入门介绍
                        </el-menu-item>
                        <el-menu-item index="navTable">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#cl-icon-word"></use>
                          </svg>
                          Vue项目基础表单
                        </el-menu-item>
                        <el-submenu index="2-1">
                            <span slot="title">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-youxi1"></use>
                              </svg>
                              小游戏
                            </span>
                            <el-menu-item index="game">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-Sodawater"></use>
                              </svg>
                              介绍
                            </el-menu-item>
                        </el-submenu>

                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-shujushiti"></use>
                              </svg>
                              <span slot="title">
                              其他插件应用
                          </span>
                        </template>
                        <el-submenu index="3-1">
                            <span slot="title">
                              <svg class="icon" aria-hidden="true">
                                  <use xlink:href="#cl-icon-zhuzhuangtu"></use>
                                </svg>
                                Echarts
                              </span>
                            <el-menu-item index="echartsInfo">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-bingzhuangtu"></use>
                              </svg>
                              介绍
                            </el-menu-item>
                            <el-menu-item index="echartsApp">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-shijieditu"></use>
                              </svg>
                              综合示例
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-2">
                            <span slot="title">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-jingyu"></use>
                              </svg>
                              mock
                            </span>
                            <el-menu-item index="mockNav">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-xiongmao"></use>
                              </svg>
                              介绍
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-3">
                            <span slot="title">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-huli"></use>
                              </svg>
                              Vue-markdown
                            </span>
                            <el-menu-item index="markdown">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-lu"></use>
                              </svg>
                              Markdown
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-4">
                            <span slot="title">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-maotouying"></use>
                              </svg>
                              Vue-animation
                            </span>
                            <el-menu-item index="vueAnimation">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-lang"></use>
                              </svg>
                              Vue-animation
                            </el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#cl-icon-houtaiweihu"></use>
                            </svg>
                            <span slot="title">
                              错误页面
                          </span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="Code404">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-emoji-15"></use>
                              </svg>
                              404页面
                            </el-menu-item>
                            <el-menu-item index="Code500">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#cl-icon-emoji-29"></use>
                              </svg>
                              500页面
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="background">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#cl-icon-qunzi-copy-copy"></use>
                        </svg>
                        <span slot="title">
                          换肤
                      </span>
                    </el-menu-item>
                    <el-menu-item index="next">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#cl-icon-shenghuo"></use>
                        </svg>
                        <span slot="title">
                          后期计划
                      </span>
                    </el-menu-item>
                </el-menu>

    </el-aside>
  <el-container>
    <el-header style="height:75px;">
      <el-row class="isCollapse">
        <el-button icon="el-icon-menu" type="primary" plain size="mini" @click="isCollapse = !isCollapse"></el-button>
      </el-row>
      <el-row class="tabs">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/nav' }">项目页</el-breadcrumb-item>
            <el-breadcrumb-item class="logup" :to="{ path: '/login' }">退出</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      </el-header>
    <el-main>
      <div style="width:95%;margin:0 auto;">
         <router-view></router-view>
      </div>

    </el-main>
    <el-footer>
      <a href="https://github.com/calamus0427" target="_blank">@Calamus</a> 2017
      </el-footer>
  </el-container>
</el-container>

</template>

<script>
export default {
            data: function() {
                return {
                    isCollapse: false,
                }
            },
            computed:{
                width(){
                  if(this.isCollapse){
                      return '70px';
                  }else{
                    return '219px';
                  }

                }
            },
            methods:{
                handleOpen(key, keyPath) {
                    console.log(key, keyPath);
                },
                handleClose(key, keyPath) {
                    console.log(key, keyPath);
                }
            },
}
</script>

<style  lang="scss" scoped>
a{
  text-decoration: none;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.el-main{
  height:480px;
}
.el-menu li {
    list-style: none;
    text-align: left;
}
    .nav_aside{
       height:100vh ;
    };
    .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 180px;
    }
.el-header{
  .el-row{
    margin-top:10px;
  }
  .tabs{
    // background-color:#dcdcdc;
    padding-bottom:5px;
    border-bottom:1px solid #dcdcdc ;
  }

}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.isCollapse {
    // margin-top: 10px;
    text-align: left;
}
.el-footer{
  color:#7a7f8a;
  font-size:14px;
  text-align:center;
}
.logup{
  float: right;
  cursor: pointer;
  font-weight:bold;
}


</style>
