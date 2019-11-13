import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
});
