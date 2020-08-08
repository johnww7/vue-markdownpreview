<template>
  <div id="editor-container" v-bind:class="toggleDisplayClass">
    <span class="editor-heading-style">
      <button id="editor-btn" v-on:click="setEditor">Editor</button>
    </span>
    <textarea
      id="editor"
      v-bind:value="text"
      rows="40"
      columns="60"
      v-on:input="$emit('update:text', $event.target.value)"
    ></textarea>
  </div>
</template>


<script>
export default {
  name: "markdown-editor",
  props: {
    text: String
  },
  data: function() {
    return {
      editorDisplaySetting: true
    };
  },
  methods: {
    markedForm() {
      let markedInputData = this.markedinput;
      this.$emit("update:markedinput", markedInputData);
    },
    setEditor() {
      this.editorDisplaySetting = !this.editorDisplaySetting;
      console.log("Pressed editor button");
      let editorSetting = this.editorDisplaySetting;
      console.log("value of EditorSetting: " + editorSetting);
      this.$store.commit("togglePreview", editorSetting);
    }
  },
  computed: {
    toggleDisplayClass() {
      let previewSetting = this.$store.getters.getPreviewStatus;
      let editorSetting = this.$store.getters.getEditorStatus;
      return editorSetting
        ? previewSetting
          ? "show-display-on"
          : "show-fulldisplay-on"
        : "show-display-off";
    }
  }
};
</script>

<style>
#editor-container {
  height: 40em;
  width: 25em;
  flex: 1;
  background-color: black;
  margin: 5px;
  flex-direction: column;
  -webkit-box-shadow: 0px 1px 15px 3px rgba(11, 41, 255, 0.78);
  box-shadow: 0px 1px 15px 3px rgba(11, 41, 255, 0.78);
}
#editor {
  width: auto;
  height: auto;
  background-color: black;
  color: #c5c5ca;
  overflow: hidden;
  resize: none;
  flex: 1;
}
.editor-heading-style {
  text-align: center;
  background-color: rgba(119, 119, 150, 0.2);
  height: 4%;
  -webkit-box-shadow: 0px 1px 36px 3px rgba(253, 255, 245, 0.51);
  box-shadow: 0px 1px 36px 3px rgba(253, 255, 245, 0.51);
}
#editor-btn {
  text-align: center;
  background-color: rgba(119, 119, 150, 0);
  height: 90%;
  color: #c5c5ca;
  border: none;
  width: 10em;
}
.show-display-on {
  display: flex;
}
.show-display-off {
  display: none;
}
.show-fulldisplay-on {
  display: flex;
}
</style>