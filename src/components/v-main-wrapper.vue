<template>
  <div>
    <p>{{ title }}</p>
    <VCatalog />
    <VCart />
  </div>
</template>

<script>
import VCatalog from "@/components/v-catalog";
import VCart from "@/components/v-cart";
export default {
  name: "v-main-wrapper",
  components: {
    VCatalog,
    VCart,
  },
  data: () => ({
    title: "Main wrapper",
  }),
};
</script>

<style lang="scss">
.v-main-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: $padding * 2;
}
</style>
