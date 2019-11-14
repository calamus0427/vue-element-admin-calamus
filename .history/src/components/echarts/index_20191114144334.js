import Vue from "vue";
import Bar from "./bar.vue";
import Pie from "./pie.vue";
import ChineseMap from "./cMap.vue";
import Calender from "./calender.vue";
import Polar from "./polar.vue";
import Scatter from "./scatter.vue";
import Radar from "./radar.vue";
import SMap from "./sMap.vue";
import GMap from "./gMap.vue";
import SLine from "./sLine.vue";
import Tree from "./tree.vue";
import Relation from "./relation.vue";
import Graph from "./graph.vue";

const components = [Tree,Bar, ChineseMap,Calender,Pie,Polar,Scatter,Radar,SMap,GMap,SLine,Relation,Graph];

components.forEach(component => {
  Vue.component(component.name, component);
});

export default components;