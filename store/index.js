const development = process.env.NODE_ENV !== 'production';

const baseUrl = development
  ? 'https://dev.exploitcon.com'
  : window.location.origin;

export const state = () => ({
  baseUrl,
  user: {},
  backPath: '',
});

export const getters = {
  getUser: state => state.user,
  getBackPath: state => state.backPath,
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setBackPath(state, payload) {
    state.backPath = payload;
  },
};
