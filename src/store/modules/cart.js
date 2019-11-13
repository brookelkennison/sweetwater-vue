import Vue from "vue";
import Vuex from "vuex";
import item from "/public/items.json";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cartItems: []
  },
  getters: {
    cartSize: state => {
      return state.cartItems.length;
    },
    cartTotalItems: state => {
      return state.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    }
  },
  mutations: {
    addToCart: (state, itemId) => {
      let item = state.item.find(item => item.id === itemId);
      let cartItem = state.cartItems.find(item => item.id === itemId);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cartItems.push({
          ...item,
          stock: item.quantity,
          quantity: 1
        });
      }
      item.quantity--;
    },
    removeFromCart: (state, itemId) => {
      let item = state.cartItems.find(item => item.id === itemId);
      let cartItem = state.cartItems.find(item => item.id === itemId);
      cartItem.quantity--;
      item.quantity++;
    }
  },
  actions: {
    fetchItems: ({ commit }) => {
      item.getItems().then(items => {
        commit("SetUpItems", items);
      });
    },
    addToCart: ({ commit }, itemId) => {
      item.items("add", itemId).then(itemId => {
        commit("addToCart", itemId);
      });
    },
    removeFromCart: ({ commit }, itemId) => {
      item.items("remove", itemId).then(itemId => {
        commit("removeFromCart", itemId);
      });
    }
  }
});
