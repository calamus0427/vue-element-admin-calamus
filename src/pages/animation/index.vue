<template>
  <div id="example-1">
    <el-radio v-model="view" label="v-a">A</el-radio>
    <el-radio v-model="view" label="v-b">B</el-radio>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show:true,
      view: 'v-a'
    }
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
}
</script>

<style lang="scss" scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>


