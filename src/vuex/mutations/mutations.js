export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    return (state.products = products);
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;

      state.cart.map((item) => {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    return state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
};
