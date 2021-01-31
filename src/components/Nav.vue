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
        href: '/countdown',
      },
      {
        id: 2,
        name: 'is-stopwatch',
        href: '/stopwatch',
      },
      {
        id: 3,
        name: 'is-alarm',
        href: '/alarm',
      },
      {
        id: 4,
        name: 'is-clock',
        href: '/clock',
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
  background: $cl-white;
  &.is-stopwatch {
    mask: url('~@/assets/icons/stopwatch.svg');
  }
  &.is-alarm {
    mask: url('~@/assets/icons/alarm-clock.svg');
  }
  &.is-countdown {
    mask: url('~@/assets/icons/countdown-timer.svg');
  }
  &.is-clock {
    mask: url('~@/assets/icons/clock.svg');
  }
}
.router-link-active {
  background: $cl-green;
}
</style>
