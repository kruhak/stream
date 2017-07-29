import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import channel from './channel'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    channel
  }
})