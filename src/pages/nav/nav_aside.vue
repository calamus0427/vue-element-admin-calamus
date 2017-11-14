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
    :router="true">
      <el-menu-item index="index">
        <i class="el-icon-service"></i>
        <span slot="title">首页</span>
      </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span slot="title">
                              基础组件</span>
                        </template>
                        <el-menu-item index="1-3">画廊</el-menu-item>
                        <el-menu-item index="music">音乐播放器</el-menu-item>
                        <el-menu-item index="video">视频播放器</el-menu-item>
                        <el-submenu index="1-4">
                            <span slot="title">基本组件</span>
                            <el-menu-item index="1-4-1">轮播图</el-menu-item>
                            <el-menu-item index="todolist">todolist</el-menu-item>
                            <el-menu-item index="todolist">星级评分</el-menu-item>
                            <el-menu-item index="todolist">进度条</el-menu-item>
                            <el-menu-item index="todolist">时间选择器</el-menu-item>
                            <el-menu-item index="todolist">返回顶部</el-menu-item>
                            <el-menu-item index="todolist">权限</el-menu-item>
                            <el-menu-item index="todolist">标记</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <span slot="title">ICON</span>
                            <el-menu-item index="1-4-1">ICON库</el-menu-item>
                            <el-menu-item index="1-4-1">ICON组件</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <span slot="title">Table</span>
                            <el-menu-item index="1-4-1">Table</el-menu-item>
                            <el-menu-item index="1-4-1">分页</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <span slot="title">Form</span>
                            <el-menu-item index="1-4-1">Form</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <span slot="title">文本编辑器</span>
                            <el-menu-item index="1-4-1">富文本编辑器</el-menu-item>
                            <el-menu-item index="1-4-1">Markdown编辑器</el-menu-item>
                            <el-menu-item index="1-4-1">Json编辑器</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-4">
                            <span slot="title">背景</span>
                            <el-menu-item index="1-4-1">知乎canvas背景</el-menu-item>
                            <el-menu-item index="1-4-1">樱花飘落背景</el-menu-item>
                            <el-menu-item index="1-4-1">雪花背景</el-menu-item>
                            <el-menu-item index="1-4-1">星星闪烁背景</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                                    <i class="el-icon-star-off"></i>
                                    <span slot="title">组件综合应用</span>
                        </template>
                        <el-menu-item index="1-3">画廊</el-menu-item>
                        <el-menu-item index="1-3">音乐播放器</el-menu-item>
                        <el-menu-item index="1-3">视频播放器</el-menu-item>
                        <el-menu-item index="1-3">Vue-PPT入门介绍</el-menu-item>
                        <el-menu-item index="1-3">Vue项目基础表单</el-menu-item>
                        <el-submenu index="1-5">
                            <span slot="title">小游戏</span>
                            <el-menu-item index="2-1">十重妄想</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>

                        </el-submenu>

                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                                    <i class="el-icon-star-on"></i>
                                    <span slot="title">其他插件应用</span>
                        </template>
                        <el-submenu index="1-5">
                            <span slot="title">Echarts</span>
                            <el-menu-item index="2-1">介绍</el-menu-item>
                            <el-menu-item index="2-2">柱状图</el-menu-item>
                            <el-menu-item index="2-2">饼状图</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>

                        </el-submenu>
                        <el-submenu index="1-5">
                            <span slot="title">mock</span>
                            <el-menu-item index="2-1">十重妄想</el-menu-item>
                        </el-submenu>
                        <el-submenu index="1-5">
                            <span slot="title">Vue-markdown</span>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                                    <i class="el-icon-star-on"></i>
                                    <span slot="title">错误页面</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="Code404">404页面</el-menu-item>
                            <el-menu-item index="Code500">500页面</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="6">
                      <i class="el-icon-service"></i>
                      <span slot="title">换肤</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                      <i class="el-icon-service"></i>
                      <span slot="title">后期计划</span>
                    </el-menu-item>
                </el-menu>

    </el-aside>
  <el-container>
    <el-header>
      <el-row class="isCollapse">
        <el-button icon="el-icon-menu" type="primary" plain size="mini" @click="isCollapse = !isCollapse"></el-button>
      </el-row>
      <el-row class="tabs">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/todolist' }">项目页</el-breadcrumb-item>
            <el-breadcrumb-item class="logup" :to="{ path: '/login' }">退出</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>@Calamus 2017</el-footer>
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
}
.logup{
  float: right;
  cursor: pointer;
  font-weight:bold;
}


</style>
