<template>
  <div class="v-main-wrapper">
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
  data: () => ({}),
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
