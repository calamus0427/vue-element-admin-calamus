<template>
<div>
  <cl-canvasBg></cl-canvasBg>
  <div class="loginForm">
    <el-form  ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"
                  type="password"
                  suffix-icon="el-icon-view"></el-input>
      </el-form-item>
      <el-form-item>
        账号密码不能为空，随便输入即可
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
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
          loginForm: {
            name: '',
            password: '',
        },
        rules:{
          name:[
            {required: true, message: '请输入用户名', trigger: 'change'}],
          password:[
            {required: true, message: '请输入密码', trigger: 'change'}]
        }
      }
    },
    methods: {
      login() {
        var _this = this ;
        this.$refs.loginForm.validate(function (result) {
          console.log(result);
          if(result){
              _this.$router.push('/index');
          }

        })
      },
      reset(){
        this.$refs['loginForm'].resetFields();
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

