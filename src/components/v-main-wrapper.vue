<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>

    <vSelect :options="options" @select="optionSelected" :selected="selected" />
    <h2>Selected value: {{ selected }}</h2>

    <vBtn
      @click="clickBtn"
      :disabled="false"
      :error="true"
      :success="true"
      prependIcon="cancel"
      appendIcon="edit" />
  </div>
</template>

<script>

import vSelect from "@/components/v-select.vue";
import vBtn from '@/components/v-btn.vue';

export default {
  name: "v-main-wrapper",
  data: () => ({
    options: [
      { name: "Option 1", value: 1 },
      { name: "Option 2", value: 2 },
      { name: "Option 3", value: 3 },
      { name: "Option 4", value: 4 },
    ],
    selected: "Select value",
  }),
  components: {
    vSelect,
    vBtn,
  },
  methods: {
    optionSelected(selectedItem) {
      this.selected = selectedItem.name;
    },
    clickBtn() {
      console.log('click')
    }
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
