import shop from "/public/items.json";

// state
const state = {
  all: []
};

// getters
const getters = {};

// actions
const actions = {
  getAllItems({ commit }) {
    shop.getItems(items => {
      commit("setItems", items);
    });
  }
};

// mutations
const mutations = {
  setItems(state, items) {
    state.all = items;
  },

  decrementItemInventory(state, { id }) {
    const item = state.all.find(item => item.id === id);
    item.inventory--;
  }
};

// export
export default {
  state,
  getters,
  actions,
  mutations
};
