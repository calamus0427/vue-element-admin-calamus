import Vue from "vue";
import Bar from "./bar.vue";
import ChineseMap from "./cMap.vue";

const components = [Bar, ChineseMap];

components.forEach(component => {
  Vue.component(component.name, component);
});

export default components;