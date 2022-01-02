<template>
  <div class="v-catalog">
    <h1>{{ title }}</h1>
    <div class="v-catalog__list">
      <VCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @sendArticle="getArticle"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VCatalogItem from "@/components/v-catalog-item";
export default {
  name: "v-catalog",
  components: {
    VCatalogItem,
  },
  data: () => ({
    title: "Catalog",
  }),
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    getArticle(article) {
      console.log(article);
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
}
</style>
