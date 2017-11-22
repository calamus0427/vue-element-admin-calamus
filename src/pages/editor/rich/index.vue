<template>
  <div>
    <div id="app">
     <vue-editor v-model="content"></vue-editor>
    </div>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  export default {

    components: {
        VueEditor
    },

    data() {
        return {
          content: '<h1><a href="https://github.com/davidroyer/vue2-editor" target="_blank" >Calamus</a></h1>'
        }
      }
    }
</script>
