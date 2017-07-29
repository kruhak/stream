const state = {
  user: null,
};

const getters = {
  getUser (state) {
    return state.user;
  },

  isAuthenticated (state) {
    return state.user !== null;
  }
};

const actions = {
  signIn (context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = {
          name: 'Kruhak',
          roles: [
            'administrator'
          ]
        };

        context.commit('setUser', user);

        resolve();
      });
    });
  },
  signOut (context) {
    context.commit('setUser', null);
  },
  signUp (context) {},
};

const mutations = {
  setUser (state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}