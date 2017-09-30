<template>
<el-row >
    <el-col :span="3" >
        <el-menu class="nav_aside el-menu-vertical-demo"  theme="dark" mode="vertical" default-active="1-4-1"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span slot="title">导航一</span>
                          </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
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
    </el-col>
</el-row>
  
</template>

<script>
export default {
            data: function() {
                return {
                    isCollapse: false,
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

<style  lang="scss">
    .nav_aside{
       height:100vh ;
    };

</style>
