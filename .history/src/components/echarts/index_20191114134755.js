import Vue from "vue";
import Bar from "./bar.vue";
import Pie from "./pie.vue";
import ChineseMap from "./cMap.vue";
import Calender from "./calender.vue";
import Polar from "./polar.vue";
import Scatter from "./scatter.vue";

const components = [Bar, ChineseMap,Calender,Pie,Polar,Scatter];

components.forEach(component => {
  Vue.component(component.name, component);
});

export default components;