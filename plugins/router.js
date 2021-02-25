export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
      store.commit('setBackPath', from.path);
    }
    next();
  });
};
