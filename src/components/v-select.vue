<template>
  <div class="v-select" @click.stop>
    <p class="title"
      @click="isOptionsVisible = !isOptionsVisible"
      >
      {{ selected }}
      </p>
    <div class="options" v-if="isOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        >
        {{ option.name }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    model: "",
    isOptionsVisible: false,
  }),
  methods: {
    selectOption(option) {
      this.$emit('select', option);
      this.closeSelect();
    },
    closeSelect() {
      this.isOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.closeSelect);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeSelect);
  }
};
</script>

<style lang="scss">

.v-select {
  position: relative;
  width: 200px;
}

.v-select .title {
  border: 1px solid lightgray;
  cursor: pointer;
}

.v-select .options {
  position: absolute;
  top: 30px;
  right: 0;
  border: 1px solid lightgray;
  width: 100%;
}

.v-select .options p:hover {
  background: #e7e7e7;
  cursor: pointer;
}

.v-select p {
  margin: 0;
}
</style>
