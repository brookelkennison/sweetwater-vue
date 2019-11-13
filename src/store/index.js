import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import items from "./modules/items";

Vue.use(Vuex);

Vue.config.productionTip = false;

export default new Vuex.Store({
  modules: {
    cart,
    items
  }
});
