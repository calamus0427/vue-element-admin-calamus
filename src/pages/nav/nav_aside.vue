<template>
<el-container>
  <el-aside :width="width">
    <el-menu class="nav_aside el-menu-vertical-demo" mode="vertical" default-active="1-4-1"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span slot="title">
                              导航一</span>
                          </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item  index="/todolist">
                            <router-link to="/todolist">todolist</router-link> </el-menu-item>
                            <el-menu-item index="1-2">
                              <router-link to="/music">音乐播放器</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                                    <i class="el-icon-star-off"></i>
                                    <span slot="title">导航二</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                                    <i class="el-icon-star-on"></i>
                                    <span slot="title">导航三</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="3-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="3-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
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
            <el-breadcrumb-item style="float:right" :to="{ path: '/login' }">退出</el-breadcrumb-item>
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
                    // width:'400px',
                }
            },
            computed:{
                width(){
                  if(this.isCollapse){
                      return '70px';
                  }else{
                    return '200px';
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
.isCollapse {
    // margin-top: 10px;
    text-align: left;
}
.el-footer{
  color:#7a7f8a;
  font-size:14px;
}


</style>
