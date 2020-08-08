<template>
  <div id="preview-container" v-bind:class="togglePreviewClass">
    <span class="previewer-heading-style">
      <button id="preview-btn" v-on:click="setDisplay">Previewer</button>
    </span>
    <div id="preview" v-html="markedDownText"></div>
  </div>
</template>


<script>
let marked = require("marked");

export default {
  name: "markdown-preview",
  props: {
    showdata: String
  },
  data: function() {
    return {
      previewDisplaySetting: true
    };
  },
  methods: {
    setDisplay() {
      console.log("Previewsetting value: " + this.previewDisplaySetting);
      this.previewDisplaySetting = !this.previewDisplaySetting;

      console.log("Pressed editor button");

      let previewSetting = this.previewDisplaySetting;
      console.log("value of previewSetting: " + previewSetting);
      this.$store.commit("toggleEditor", previewSetting);
    }
  },
  computed: {
    markedDownText() {
      return marked(this.showdata);
    },
    togglePreviewClass() {
      let previewSetting = this.$store.getters.getPreviewStatus;
      let editorSetting = this.$store.getters.getEditorStatus;
      return previewSetting
        ? editorSetting
          ? "show-display-on"
          : "show-fulldisplay-on"
        : "show-display-off";
    }
  }
};
</script>

<style>
#preview-container {
  width: 25em;
  color: white;
  flex: 1;
  background-color: black;
  margin: 5px;
  flex-direction: column;
  -webkit-box-shadow: 0px 1px 15px 3px rgba(11, 41, 255, 0.78);
  box-shadow: 0px 1px 15px 3px rgba(11, 41, 255, 0.78);
}
#preview {
  width: auto;
  height: 96%;
  background-color: black;
  color: #0fe60f;
}

.previewer-heading-style {
  text-align: center;
  background-color: rgba(119, 119, 150, 0.2);
  height: 4%;
  -webkit-box-shadow: 0px 1px 36px 3px rgba(253, 255, 245, 0.51);
  box-shadow: 0px 1px 36px 3px rgba(253, 255, 245, 0.51);
}
#preview-btn {
  text-align: center;
  background-color: rgba(119, 119, 150, 0);
  height: 90%;
  color: #c5c5ca;
  border: none;
}

.show-display-on {
  display: flex;
  height: auto;
}
.show-display-off {
  display: none;
}
.show-fulldisplay-on {
  height: 40em;
  display: flex;
}
</style>
