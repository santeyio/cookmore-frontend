import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import user from '@/state/user';
import modalDisplay from '@/state/modalDisplay';


Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    user,
    modalDisplay,
  },
  plugins: [vuexLocal.plugin],
});
