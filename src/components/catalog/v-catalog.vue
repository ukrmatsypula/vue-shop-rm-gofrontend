<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>

    <h1>{{ title }}</h1>

    <div class="v-catalog__list">
      <VCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VCatalogItem from "@/components/catalog/v-catalog-item";
export default {
  name: "v-catalog",
  components: {
    VCatalogItem,
  },
  data: () => ({
    title: "Catalog",
  }),
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived");
      }
    });
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: 1px solid #aeaeae;
  }
}
</style>
