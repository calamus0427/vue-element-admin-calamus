
<template>
<div>  
  <router-link to="/">主页</router-link>
  <router-link to="/btn">按钮</router-link>
  <router-link to="/list">列表</router-link>
  <router-link to="/nav">侧边栏</router-link>
  <router-link to="/blog">博客</router-link>
  <router-link to="/music">音乐播放器</router-link>  
  <router-link to="/icon">图标</router-link>    
</div>
</template>

<style scoped>
 
</style>
<script>
  export default{
    name:"index",
    data(){
      return {
        msg:"text",
      }
    }
  }
</script>
