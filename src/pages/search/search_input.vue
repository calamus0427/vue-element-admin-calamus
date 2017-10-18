<template>
  <div id="search">
    input内容:{{msg}}
    <cl-search v-model="msg" placeholder="11111"></cl-search>
  </div>
</template>

<script>
    export default {
        name:'search',
        data:function(){
          return{
            msg:"nihao",
          }
        }
    }
</script>