<template>
  <div class="wrapper">
    <div class="v-btn" @click="click" :class="className">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-btn",
  props: {
    title: {
      type: String,
      default: "Press",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return { "v-btn__disabled": this.disabled };
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
.v-btn {
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  background-color: lightseagreen;
  cursor: pointer;

  &:hover {
    background: lighten(lightseagreen, 5%);
  }

  &__disabled {
    pointer-events: none;
  }
}

.wrapper {
  max-width: 200px;
  margin: 0 auto;
}
</style>
