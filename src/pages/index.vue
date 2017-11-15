
<template>
<div>
  <cl-canvasBg :dotsNum="60" :isColor="true"></cl-canvasBg>
  <ul class="nav">
    <li>
        <router-link to="/">主页</router-link>
    </li>
    <li>
       <router-link to="/btn">按钮</router-link>
    </li>
    <li>
        <router-link to="/list">列表</router-link>
    </li>
    <li>
      <router-link to="/nav">element管理后台</router-link>
    </li>
    <li>
      <router-link to="/blog">博客</router-link>
    </li>
    <li>
      <router-link to="/music">音乐播放器</router-link>
    </li>
    <li>
       <router-link to="/icon">图标</router-link>
    </li>
    <li>
      <router-link to="/search">搜索框</router-link>
    </li>
    <li>
      <router-link to="/todoList">todoList</router-link>
    </li>
    <li>
      <router-link to="/shop">购物车</router-link>
    </li>
    <li>
      <router-link to="/ten">洛天依--十重幻想小游戏</router-link>
    </li>
    <li>
      <router-link to="/login">登录</router-link>
    </li>
    <li>
      <a @click="getMockData()">mock</a>
    </li>
  </ul>
</div>
</template>

<style scoped>
.nav{
  background-color:rgba(255,255,255,0.5);
}
ul li{
  list-style:none;
  text-decoration:none;
}
ul{
  position: absolute;
  top:10%;
  left:40%;
}
a {
    text-decoration: none;
    color:gray;
    font-weight:bold;
    text-shadow: 5px 5px 2px #ccc;
}
a:hover{
  color:black;
  font-weight:bold;
  text-shadow: 5px 5px 5px gray;
}
.router-link-active {
    text-decoration: none;
}

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
