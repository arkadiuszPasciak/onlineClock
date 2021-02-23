<template>
  <button class="Button" :class="modifier">{{ name }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['name', 'modifier'],
};
</script>

<style lang="scss" scoped>
.Button {
  @include btn($btn);
  padding: 15px 60px;
  margin: 10px;
  letter-spacing: 1px;
  @include below(medium) {
    font: 500 12px/16px $sourceSansPro;
    padding: 12px 40px;
  }
  @include above(medium) {
    font: 500 16px/20px $sourceSansPro;
    padding: 15px 60px;
  }
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
  &.disabled {
    pointer-events: none;
    opacity: .5;
  }
}
</style>
