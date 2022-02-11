<template>
  <div class="wrapper">
    <div class="v-btn" @click="click" :class="className">
      <i class="material-icons" v-if="prependIcon">{{prependIcon}}</i>
      <span>{{ title }}</span>
      <i class="material-icons" v-if="appendIcon">{{appendIcon}}</i>
    </div>
  </div>
</template>

<script>
import "material-design-icons-iconfont";

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
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: String,
      default: "",
    },
    prependIcon: {
      type: String,
      default: "",
    },
  },
  computed: {
    className() {
      return {
        "v-btn__disabled": this.disabled,
        "v-btn__error": this.error,
        "v-btn__success": this.success,
      };
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: lighten(lightseagreen, 5%);
  }

  &__disabled {
    pointer-events: none;
  }

  &__error {
    background: red;

    &:hover {
      background: darken(red, 5%);
    }
  }

  &__success {
    background: lightgreen;

    &:hover {
      background: lighten(lightgreen, 5%);
    }
  }

  .material-icons {
    margin-right: 8px;
    font-size: 16px;
    &:last-of-type {
      margin-left: 8px;
    }
  }
}

.wrapper {
  max-width: 200px;
  margin: 0 auto;
}
</style>
