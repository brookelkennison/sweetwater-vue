import shop from "/public/items.json";

const state = {
  cartItems: []
};

const getters = {
  cartItems: (state, getters, rootState) => {
    return state.items.map(({ id, quantitiy }) => {
      const item = rootState.items.all.find(item => item.id === id);
      return {
        productName: item.productName,
        price: item.price,
        quantitiy
      };
    });
  },
  cartTotal: (state, getters) => {
    return getters.cartItems.reduce((total, item) => {
      return total + item.price * item.quantitiy;
    }, 0);
  }
};

const actions = {
  checkout({ commit, state }, items) {
    const savedCartItems = [...state.cartItems];
    commit("setCartItems", { items: [] });
    shop.buyItems(items, () => {
      commit("setCartItems", { items: savedCartItems });
    });
  },
  addItemToCart({ state, commit }, item) {
    if (item.available > 0) {
      const cartItem = state.cartItems.find(
        cartItems => cartItems.id === item.id
      );
      if (!cartItem) {
        commit("pushItemToCart", { id: item.id });
      } else {
        commit("incrementCartItemQuantity", cartItem);
      }
      commit("items/decrementItemInventory", { id: item.id }, { root: true });
    }
  }
};

const mutations = {
  pushItemToCart(state, { id }, item) {
    state.cartItems.push({
      id,
      quantitiy: item.quantitiy
    });
  },
  incrementCartItemQuantity(state, { id }) {
    const cartItem = state.cartItems.find(cartItems => cartItems.id === id);
    cartItem.quantitiy++;
  },
  setCartItems(state, { cartItems }) {
    state.cartItems = cartItems;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
