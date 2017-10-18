<template>
    <div> 
        <el-input :value="input" v-model="value" :placeholder="placeholder"></el-input>
    </div>
</template>

<script>
     export default{
         name:'CLSearch',
         data:function(){
             return{
                 value:this.input,
             }
         },
         props:{
            input:{
                type:String,
                required:true,
            },
            placeholder:{
                type:String,
            }
         }
     }
</script>
