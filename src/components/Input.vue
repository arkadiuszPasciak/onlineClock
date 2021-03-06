<template>
  <div class="Input">
    <label class="Input" :for="id">{{ text }}</label>
    <input
      type="number"
      :id="id"
      min="0"
      :max="max"
      value="0"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['id', 'max', 'text'],
};
</script>

<style lang="scss" scoped>
.Input {
  display: flex;
  flex-direction: column;
}
label {
  font: 500 14px/16px $sourceSansPro;
}
input {
  border: 1px solid $cl-dark-blue;
  padding: 10px 0 10px 10px;
  text-align: center;
}
</style>
