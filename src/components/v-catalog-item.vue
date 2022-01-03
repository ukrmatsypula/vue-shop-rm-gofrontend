<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require(`@/assets/img/${product_data.image}`)"
      :alt="product_data.name"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} UAH</p>
    <button class="btn v-catalog-btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>

<style lang="scss" scoped>
.v-catalog-item {
  flex-basis: 32%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;

  &__image {
    width: 100px;
  }
}
</style>
