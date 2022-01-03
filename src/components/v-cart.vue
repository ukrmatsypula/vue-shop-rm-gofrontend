<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link-to-cart">Back to catalog</div>
    </router-link>

    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <vCartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />

    <div class="v-cart__total">
      <p class="v-cart__name">Total: {{ this.cartTotalBalance || 0 }} UAH</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import vCartItem from "@/components/v-cart-item.vue";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    cartTotalBalance() {
      let result;

      this.cart_data.reduce((acc, product) => {
        result = acc += product.price * product.quantity;
        return acc;
      }, 0);
      return result;
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;

  &__total {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $padding * 2 $padding * 3;
    color: #fff;
    background: lightgreen;
    font-size: 22px;
  }

  &__name {
    margin-right: $margin * 2;
  }
}
</style>
