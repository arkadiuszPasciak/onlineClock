<template>
  <div class="Time">
    <span class="minutes" v-if="minutes < 10">0</span>
    <span class="minutes is-colon">{{ minutes }}</span>
    <span class="seconds" v-if="seconds < 10">0</span>
    <span class="seconds">{{ seconds }}</span>
  </div>
</template>

<script>
export default {
  name: 'Time',
  props: ['minutes', 'seconds'],
};
</script>

<style lang="scss" scoped>
.Time {
  flex-basis: 100%;
  color: $cl-white;
  @include below(medium) {
    font: 500 100px/60px $digital;
    margin: 0 0 50px;
  }
  @include above(medium) {
    font: 500 160px/120px $digital;
    margin: 0 0 75px;
  }
}
.minutes {
  &.is-colon {
    &::after {
      content: ':';
    }
  }
}
</style>
