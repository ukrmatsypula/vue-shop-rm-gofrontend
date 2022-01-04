import axios from "axios";

export default {
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

  ADD_TO_CART({ commit }, product) {
    commit("SET_CART", product);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  INCREMENT_ITEM_CART({ commit }, index) {
    commit("INCREMENT", index);
  },
  DECREMENT_ITEM_CART({ commit }, index) {
    commit("DECREMENT", index);
  },
};
