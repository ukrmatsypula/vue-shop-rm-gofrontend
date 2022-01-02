<template>
  <div class="v-catalog">
    <h1>v-catalog</h1>
    <div class="v-catalog__list">
      <VCatalogItem
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @sendArticle="getArticle"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item";
export default {
  name: "v-catalog",
  components: {
    VCatalogItem,
  },
  data: () => ({
    products: [
      {
        name: "T-shirt 1",
        price: 100,
        article: "T1",
        image: "1.jpeg",
        available: false,
      },

      {
        name: "T-shirt 2",
        price: 150,
        article: "T2",
        image: "2.jpeg",
        available: true,
      },

      {
        name: "T-shirt 3",
        price: 200,
        article: "T3",
        image: "3.jpeg",
        available: false,
      },

      {
        name: "T-shirt 4",
        price: 250,
        article: "T4",
        image: "4.jpeg",
        available: true,
      },

      {
        name: "T-shirt 5",
        price: 300,
        article: "T5",
        image: "5.jpeg",
        available: false,
      },

      {
        name: "T-shirt 6",
        price: 350,
        article: "T6",
        image: "6.jpeg",
        available: true,
      },
    ],
  }),
  methods: {
    getArticle(article) {
      console.log(article);
    },
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
