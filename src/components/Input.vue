<template>
  <div class="Input">
    <label class="Input" :for="name">{{ text }}</label>
    <input
      v-model.number="model"
      type="number"
      :id="name"
      min="0"
      :max="max"
    >
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Input',
  props: ['name', 'max', 'text'],
  setup() {
    const model = ref(0);
    return { model };
  },
};
</script>

<style lang="scss" scoped>
.Input {
  display: flex;
  flex-direction: column;
}
label {
  font: 500 14px/16px $sourceSansPro;
  color: $cl-dark-blue;
}
input {
  padding: 10px 0 10px 10px;
  border: 1px solid $cl-dark-blue;
  color: $cl-white;
  text-align: center;
}
</style>
