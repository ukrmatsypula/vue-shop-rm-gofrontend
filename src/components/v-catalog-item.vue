<template>
  <div class="v-catalog-item">
    <h1>Item 1</h1>
    <p>Price: 100</p>
    <button>add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
};
</script>

<style lang="scss" scoped>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
}
</style>
