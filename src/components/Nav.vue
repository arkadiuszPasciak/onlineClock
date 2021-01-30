<template>
  <nav class="Nav">
    <router-link class="btn is-stopwatch" to="/"></router-link>
    <router-link class="btn is-alarm" to="/"></router-link>
    <router-link class="btn is-countdown" to="/"></router-link>
    <router-link class="btn is-clock" to="/"></router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
.Nav {
  display: flex;
  margin: 0 -5px;
}
.btn {
  width: 35px;
  height: 35px;
  margin: 0 5px;
  &.is-stopwatch {
    background: url('~@/assets/icons/stopwatch.svg') center center no-repeat;
  }
  &.is-alarm {
    background: url('~@/assets/icons/alarm-clock.svg') center center no-repeat;
  }
  &.is-countdown {
    background: url('~@/assets/icons/countdown-timer.svg') center center no-repeat;
  }
  &.is-clock {
    background: url('~@/assets/icons/clock.svg') center center no-repeat;
  }
}
</style>
