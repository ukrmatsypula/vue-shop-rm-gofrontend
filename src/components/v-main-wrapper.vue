<template>
  <div class="v-main-wrapper">
    <VCatalog />
    <VCart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VCatalog from "@/components/v-catalog";
import VCart from "@/components/v-cart";
export default {
  name: "v-main-wrapper",
  components: {
    VCatalog,
    VCart,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
