<template>
  <div id="markdown-container">
    <div id="title">
      <h2>Markdown Previewer</h2>
    </div>
    <markdown-editor v-bind:text.sync="text"></markdown-editor>
    <markdown-preview v-bind:showdata="text" v-on:updateMarkedText="updateMarkedText()"></markdown-preview>
  </div>
</template>

<script>
import MarkdownEditor from "./components/MarkdownEditor.vue";
import MarkdownPreview from "./components/MarkdownPreview.vue";

let marked = require("marked");

export default {
  name: "App",
  components: {
    "markdown-editor": MarkdownEditor,
    "markdown-preview": MarkdownPreview
  },
  data() {
    return {
      showDisplay: true,
      text: ` # Welcome to my React Markdown Previewer! 
## This is a sub-heading...
### You can enter text here: 

You can also make text **bold**... whoa
`
    };
  },
  methods: {
    updateMarkedText(markText) {
      let markUpText = markText;
      this.text = marked(markUpText);
    },

  }
};
</script>

<style>
#markdown-container {
  display: flex;
  height: 50%;
  width: 50%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 25px auto;
}
#title {
  align-self: center;
  align-items: center;
  text-align: center;
  flex: 1 100%;
  -webkit-box-shadow: 0px 1px 36px 3px rgba(253, 255, 245, 0.51);
  box-shadow: 0px 1px 36px 3px rgba(253, 255, 245, 0.51);
}
#markdown-area {
  flex-direction: row;
  display: flex;
  justify-content: center;
  flex: 1 100%;
}
h2 {
  text-decoration: underline;
  color: silver;
}

body {
  background-color: #0d0b36;
  color: white;
}
</style>

