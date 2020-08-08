import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    displayEditor: true,
    displayPreview: true,
  },
  mutations: {
    toggleEditor(state, status) {
      state.displayEditor = status;
    },
    togglePreview(state, status) {
      state.displayPreview = status;
    },
  },
  getters: {
    getEditorStatus(state) {
      return state.displayEditor;
    },
    getPreviewStatus(state) {
      return state.displayPreview;
    },
  },
});
