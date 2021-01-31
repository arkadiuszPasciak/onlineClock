<template>
  <nav class="Nav">
    <router-link
      v-for="el in nav"
      :key="el.id"
      class="btn"
      :class="el.name"
      :to="el.href"
    />
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  setup() {
    const nav = [
      {
        id: 1,
        name: 'is-countdown',
        href: '/',
      },
      {
        id: 2,
        name: 'is-stopwatch',
        href: '/',
      },
      {
        id: 3,
        name: 'is-alarm',
        href: '/',
      },
      {
        id: 4,
        name: 'is-clock',
        href: '/',
      },
    ];
    return { nav };
  },
};
</script>

<style lang="scss" scoped>
.Nav {
  display: flex;
  margin: 0 -10px;
}
.btn {
  width: 35px;
  height: 35px;
  margin: 0 10px;
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
