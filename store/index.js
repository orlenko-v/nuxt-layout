export const state = () => ({
  baseURL: 'https://akvahit.ru',
});

export const getters = {
  getBaseURL ({ baseURL }) {
    return baseURL;
  },
};

export const mutations = {};

export const actions = {
  async nuxtServerInit ({ getters, dispatch }, { $axios, error }) {
    const baseURL = getters.getBaseURL;

    try {
      const { results: [ { items } ] } = await $axios.$get(
        '/api/menu',
        { baseURL, params: { code: 'catalog-footer' } },
      );

      const newItems = items.map(({ title, link }) => ({ title, link }));
      const categories = { title: 'Категории', items: newItems };

      dispatch('footer/setCategories', { categories });
    } catch (e) {
      error(e);
    }

    try {
      const { results: [ { title, items } ] } = await $axios.$get(
        '/api/menu',
        { baseURL, params: { code: 'footer-site' } },
      );

      const newItems = items.map(({ title, link }) => ({ title, link }));
      const info = { title, items: newItems };

      dispatch('footer/setInfo', { info });
    } catch (e) {
      error(e);
    }

    try {
      const { results } = await $axios.$get(
        '/api/shop/products',
        { baseURL, params: { page: 3000 } },
      );

      dispatch('cart/setItems', { items: results });
    } catch (e) {
      error(e);
    }
  },
};
