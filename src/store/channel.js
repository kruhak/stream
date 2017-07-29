const state = {
  channels: {
    corristo: {
      id: 'corristo',
      title: 'Las Plagas',
      source: 'http://localhost/plag.m3u8'
    },
    kruhak: {
      id: 'kruhak',
      title: 'Kruhak',
      source: 'http://localhost/test.m3u8'
    }
  },
  active: [
    'corristo'
  ]
};

const getters = {
  getChannelById: (state, getters) => (id) => {
    return state.channels[id];
  },
  getActiveChannels: (state, getters) => () => {
    return Object.keys(state.channels)
      .filter(key => state.active.includes(key))
      .reduce((obj, key) => {
        obj[key] = state.channels[key];
        return obj;
      }, {})
  }
};

const actions = {
  loadChannels() {},

};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};