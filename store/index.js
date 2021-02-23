const development = process.env.NODE_ENV !== 'production';

const baseUrl = development
  ? 'https://dev.exploitcon.com'
  : window.location.origin;

export const state = () => ({
  baseUrl,
  user: {},
});

export const getters = {
  getUser: state => state.user,
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};
