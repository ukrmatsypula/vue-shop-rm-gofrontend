import Vue from "vue";
import Vuex from "vuex";

import actions from "@/vuex/actions/actions.js";
import mutations from '@/vuex/mutations/mutations.js'
import getters from '@/vuex/getters/getters.js';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters,
  mutations,
  actions,
  modules: {},
});

export default store;
