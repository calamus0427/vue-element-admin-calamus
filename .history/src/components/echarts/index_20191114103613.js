import Vue from "vue";
import Bar from "./bar.vue";
import ChineseMap from "./cMap.vue";
import Calender from "./calender.vue";

const components = [Bar, ChineseMap,Calender];

components.forEach(component => {
  Vue.component(component.name, component);
});

export default components;