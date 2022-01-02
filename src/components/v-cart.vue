<template>
  <div class="v-cart">
    <h1>v-cart</h1>
    <vCartItem
      v-for="item in cart_data"
      :key="item.article"
      :cart_item_data="item"
    />
  </div>
</template>

<script>
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
};
</script>

<style></style>
