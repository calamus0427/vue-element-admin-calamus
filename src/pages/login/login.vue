<template>
<div>
  <cl-canvasBg></cl-canvasBg>
  <div class="loginForm">
    <el-form  ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>



</div>

</template>

<script>
  export default{
    name:'login',
    data(){
      return{
        centerDialogVisible:true,
          form: {
          name: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
  .loginForm{
    width:25%;
    margin:250px auto;
    background-color: rgba(255,255,255,0.5)
  }
</style>

