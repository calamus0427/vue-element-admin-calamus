<template>
<div>
  <!-- <el-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="value">
  </el-input> -->
  <a href="https://github.com/miaolz123/vue-markdown" target="_blank">vue-markdown</a>
  <vue-markdown>
```
    import VueMarkdown from 'vue-markdown'
    export default {
        name: 'editor',
        components: {
            VueMarkdown
            // or 'mavon-editor': mavonEditor
        },
        data:{
          value:"i am a ~~tast~~ **test**.",
        },
    }
```
  </vue-markdown>
</div>

</template>

<script>
    // Local Registration
    import VueMarkdown from 'vue-markdown'
    // import 'vue-markdown/src/VueMarkdown.js'
    export default {
        name: 'editor',
        components: {
            VueMarkdown
            // or 'mavon-editor': mavonEditor
        },
        data:{
          value:"i am a ~~tast~~ **test**.",
        },
    }
    </script>
    <style>
    #editor {
        margin: auto;
        width: 80%;
        height: 580px;
    }
    </style>
