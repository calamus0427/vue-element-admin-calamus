<template>
  <div class="Example">
    <h1>It's Example page with Vue-CodeMirror</h1>
    <h3>Codemirror Example:</h3>
    <codemirror :code="code" :options="editorOption" @change="codeChange"></codemirror>
    <pre>{{ code }}</pre>
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 8}"
      v-model="code">
    </el-input>
  </div>
</template>

<script>
  import { codemirror } from 'vue-codemirror'
  export default {
    components: {
      codemirror
    },
    data () {
      return {
        code: '<div>1</div>',
        editorOption: {
          tabSize: 4,
          styleActiveLine: true,
          line: true,
          mode: 'text/html',
          lineWrapping: true,
          theme: 'base16-dark'
        }
      }
    },
    methods: {
      codeChange(newCode) {
        console.log(newCode)
        this.code = newCode
      }
    },
    computed: {
      editor() {
        return this.$refs.codeEditor.editor
      }
    },
    mounted() {
      console.log('this is my editor object', this.editor)
    }
  }
</script>

<style lang="scss" scoped>
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>

