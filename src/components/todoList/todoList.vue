<template>
  <div>
      <span style="color:red">{{cmsg}}</span>
      {{msg}}
      <button v-on:click="onClickMe">open</button>
  </div>
</template>

<script>
    export default{
        name:"CLtodolist",
        data(){
            return{
                cmsg:"this is a component"
            }
        },
        props:['msg'],
        methods:{
            onClickMe(){
                this.$emit('child',this.cmsg)              
            }
        }
            
    }
</script>