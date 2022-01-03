<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require(`@/assets/img/${cart_item_data.image}`)"
      :alt="cart_item_data.name"
    />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>

    <div class="v-cart-item__quantity">
      <span>
        Qty: <br />
        <span class="v-cart-item__quantity-btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="v-cart-item__quantity-btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    incrementItem() {
      this.$emit("increment");
    },
    decrementItem() {
      this.$emit("decrement");
    },
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;

  &__image {
    max-width: 50px;
  }

  &__quantity {
    user-select: none;

    &-btn {
      padding: $padding;
      cursor: pointer;
    }
  }
}
</style>
