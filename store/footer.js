export const state = () => ({
  categories: {},
  info: {},
});

export const getters = {
  getCategories ({ categories }) {
    return categories;
  },

  getInfo ({ info }) {
    return info;
  },
};

export const mutations = {
  setCategories (state, { categories }) {
    state.categories = categories;
  },

  setInfo (state, { info }) {
    state.info = info;
  },
};

export const actions = {
  setCategories ({ commit }, payload) {
    commit('setCategories', payload);
  },

  setInfo ({ commit }, payload) {
    commit('setInfo', payload);
  },
};
