<template>
  <button class="Button" :class="modifier">{{ name }}</button>
</template>

<script>
export default {
  name: 'Time',
  props: ['name', 'modifier'],
};
</script>

<style lang="scss" scoped>
.Button {
  @include btn($btn);
  padding: 15px 60px;
  font: 500 16px/20px $sourceSansPro;
  letter-spacing: 1px;
  &.start {
    @include btn($btn-primary);
    &:hover {
      @include hover(hover) {
        @include btn($btn-primary-hover);
      }
    }
  }
  &.stop {
    @include btn($btn-secondary);
    &:hover {
      @include hover(hover) {
        @include btn($btn-secondary-hover);
      }
    }
  }
  &.edit {
    @include btn($btn-tertiary);
    &:hover {
      @include hover(hover) {
        @include btn($btn-tertiary-hover);
      }
    }
  }
  &.reset {
    @include btn($btn-quaternary);
    &:hover {
      @include hover(hover) {
        @include btn($btn-quaternary-hover);
      }
    }
  }
}
</style>
