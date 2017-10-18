
<template>
<div>    
  <router-link to="/">主页</router-link>
  <router-link to="/btn">按钮</router-link>
  <router-link to="/list">列表</router-link>
  <router-link to="/nav">侧边栏</router-link>
  <router-link to="/blog">博客</router-link>
  <router-link to="/music">音乐播放器</router-link>  
  <router-link to="/icon">图标</router-link>
  <router-link to="/search">搜索框</router-link> 
  <router-link to="/todoList">todoList</router-link>
  <router-link to="/shop">购物车</router-link>        
  <a @click="getMockData()">mock</a> 
</div>
</template>

<style scoped>
 
</style>
<script>
// import axios from 'axios'

  export default{
    name:"index",
    data(){
      return {
        msg:"text",
      }
    },
    methods:{
      getMockData(){
        this.$http.get('/mock/mock.json')
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  }

</script>
