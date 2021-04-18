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
  display: block;
  margin: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: $cl-white;
  cursor: pointer;
  transition: background-color .3s ease, color .3s ease;
  @include below(medium) {
    font: 500 12px/16px $sourceSansPro;
    padding: 12px 40px;
  }
  @include above(medium) {
    font: 500 16px/20px $sourceSansPro;
    padding: 15px 60px;
  }
  &.start {
    background: $cl-green;
    &:hover {
      @include hover(hover) {
        background: rgba($cl-green, .8);
      }
    }
  }
  &.stop {
    background: $cl-red;
    &:hover {
      @include hover(hover) {
        background: rgba($cl-red, .8);
      }
    }
  }
  &.edit {
    background: $cl-dark-blue;
    &:hover {
      @include hover(hover) {
        background: rgba($cl-dark-blue, .8);
      }
    }
  }
  &.reset {
    background: $cl-orange;
    &:hover {
      @include hover(hover) {
        @background: rgba($cl-orange, .8);
      }
    }
  }
  &.disabled {
    pointer-events: none;
    opacity: .5;
  }
}
</style>
