<template>
        <div id="editor">
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
            <mavon-editor style="height: 100%"></mavon-editor>
        </div>
</template>

<script>
    // Local Registration
    import { mavonEditor } from 'mavon-editor'
    import VueMarkdown from 'vue-markdown'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: 'editor',
        components: {
            mavonEditor,VueMarkdown
        }
    }
    </script>
    <style>
    #editor {
        margin: auto;
        width: 80%;
        height: 580px;
    }
    </style>
