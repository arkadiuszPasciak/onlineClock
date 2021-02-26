<template>
  <div class="Time">
    <div class="hours" v-if="hours !== false">
      <span v-if="hours < 10">0</span>
      <span>{{ hours }}</span>
    </div>
    <div class="minutes" v-if="minutes !== false">
      <span v-if="minutes < 10">0</span>
      <span>{{ minutes }}</span>
    </div>
    <div class="seconds" v-if="seconds !== false">
      <span v-if="seconds < 10">0</span>
      <span>{{ seconds }}</span>
    </div>
    <div class="microseconds" v-if="microseconds !== false">
      <span v-if="microseconds < 10">0</span>
      <span >{{ microseconds }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Time',
  props: ['hours', 'minutes', 'seconds', 'microseconds'],
};
</script>

<style lang="scss" scoped>
.Time {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-basis: 100%;
  color: $cl-white;
  @include below(medium) {
    margin: 0 0 10px;
  }
  @include above(medium) {
    margin: 0 0 20px;
  }
}
.hours,
.minutes,
.seconds {
  @include below(medium) {
    font: 500 100px/60px $digital;
  }
  @include above(medium) {
    font: 500 160px/120px $digital;
  }
}
.minutes,
.hours {
  &::after {
    content: ':';
  }
}
.microseconds {
  &::before {
    content: '.';
  }
  @include below(medium) {
    min-width: 50px;
    font: 500 40px/80px $digital;
  }
  @include above(medium) {
    min-width: 100px;
    font: 500 90px/130px $digital;
  }
}
</style>
