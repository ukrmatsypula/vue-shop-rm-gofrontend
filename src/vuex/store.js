import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      return (state.products = products);
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      return await axios
        .get("http://localhost:3000/products", {
          method: "GET",
        })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {},
});

export default store;
