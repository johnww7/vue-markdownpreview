<template>
  <div id="markdown-container">
    <div id="title"><h2>Markdown Previewer</h2></div>
    <!--<div id="markdown-area"> -->
      <markdown-editor v-bind:text.sync="text"></markdown-editor>
      <!-- <markdown-editor v-bind:markedinput.sync="text"></markdown-editor>
      <markdown-preview v-bind:show-data="text"></markdown-preview>-->
      <markdown-preview v-bind:showdata="text" v-on:updateMarkedText="updateMarkedText()"></markdown-preview>
   <!-- </div> -->
  </div>
</template>

<script>

import MarkdownEditor from './components/MarkdownEditor.vue';
import MarkdownPreview from './components/MarkdownPreview.vue';

let marked = require('marked');

export default {
    
    name: 'App',
    components: {
        'markdown-editor': MarkdownEditor,
        'markdown-preview': MarkdownPreview
    },
    data() {
        return {
            text: ` # Welcome to my React Markdown Previewer! 
## This is a sub-heading...
### You can enter text here: 

You can also make text **bold**... whoa
`
        }
    },
    methods: {
      updateMarkedText(markText) {
        let markUpText = markText;
        this.text = marked(markUpText);
      }
    }
}
</script>

<style>
  #markdown-container {
    display: flex;
    height: 50%;
    width: 50%;
    /*flex-direction: column;*/
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 25px auto;
  }
  #title {
    align-self: center;
    align-items: center;
    text-align: center;
    flex: 1 100%;
    /*border: 2px double white;*/
    -webkit-box-shadow: 0px 1px 36px 3px rgba(253,255,245,0.51); 
box-shadow: 0px 1px 36px 3px rgba(253,255,245,0.51);
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


"# Welcome to my React Markdown Previewer!\
## This is a sub-heading...\
### Here's some code: \
`<div></div>`, between 2 backticks. \
``` \
// this is multi-line code: \
function anotherExample(firstLine, lastLine) {\
  if (firstLine == '```' && lastLine == '```') {\
    return multiLineCode;\
  }\
}\
``` \
You can also make text **bold**... whoa!\
Or _italic_.\
Or... wait for it... **_both!_**\
And feel free to go crazy ~~crossing stuff out~~.\
> Example of Block Quotes\
- And of course there are lists.\
  - Some are bulleted.\
     - With different indentation levels.\
        - That look like this. \
"
