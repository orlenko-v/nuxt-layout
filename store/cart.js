export const state = () => ({
  items: [],
});

export const getters = {
  getItems ({ items }) {
    return items;
  },

  getItemById: (state) => (id) => {
    return state.items.find(item => item.id === id);
  }
};

export const mutations = {
  setItems (state, { items }) {
    state.items = items;
  },

  increment (state, { id }) {
    const item = state.getters.getItemById(id);

    if (item.count < item.available) {
      item.count += 1;
    }
  },

  decrement (state, { id }) {
    const item = state.getters.getItemById(id);

    if (item.count > 1) {
      item.count -= 1;
    }
  },

  delete (state, { id }) {
    state.items = state.items.filter(item => item.id !== id);
  },

  clear (state) {
    state.items = [];
  },
};

export const actions = {
  setItems ({ commit }, payload) {
    commit('setItems', payload);
  },

  increment ({ commit }, payload) {
    commit('increment', payload);
  },

  decrement ({ commit }, payload) {
    commit('decrement', payload);
  },

  delete ({ commit }, payload) {
    commit('delete', payload);
  },

  clear ({ commit }) {
    commit('clear');
  },
};
