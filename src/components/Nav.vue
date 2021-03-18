<template>
  <nav class="Nav" :class="size">
    <router-link
      v-for="el in links"
      :key="el.id"
      class="btn"
      :to="el.href"
    >
      <i class="icon" :class="el.modified"></i>
      <span v-if="name" class="text">{{ el.name }}</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import jsonNav from '@/json/nav.json';
import { Nav } from '@/types';

export default defineComponent({
  name: 'Nav',
  props: ['name', 'size'],
  setup() {
    const links = jsonNav as Nav;
    return { links };
  },
});
</script>

<style lang="scss" scoped>
.Nav {
  display: flex;
  &.small {
    margin: 0 -10px;
    .btn {
      margin: 0 10px;
    }
  }
  &.big {
    @include below(medium) {
        margin: 150px -10px;
      }
      @include above(medium) {
        margin: 150px -25px;
      }
    .btn {
      @include below(medium) {
        width: 85px;
        margin: 0 10px;
      }
      @include above(medium) {
        width: 100px;
        margin: 0 25px;
      }
    }
    .icon {
      @include below(medium) {
        transform: scale(2);
        margin: 0 auto 30px;
      }
      @include above(medium) {
        transform: scale(3);
        margin: 0 auto 50px;
      }
    }
  }
}
.btn {
  &:hover {
    @include hover(hover) {
      .icon {
        background: $cl-green;
      }
      .text {
        color: $cl-green;
      }
    }
  }
}
.icon {
  display: block;
  background: $cl-white;
  width: 35px;
  height: 35px;
  @include hover(hover) {
    transition: background-color .3s ease;
  }
  &.is-countdown {
    mask: url('~@/assets/icons/countdown-timer.svg');
  }
  &.is-stopwatch {
    mask: url('~@/assets/icons/stopwatch.svg');
  }
  &.is-timezone {
    mask: url('~@/assets/icons/clock.svg');
  }
}
.text {
  font: 500 18px/22px $sourceSansPro;
  color: $cl-white;
  @include hover(hover) {
    transition: color .3s ease;
  }
}
.router-link-active {
  .icon {
    background: $cl-green;
  }
}
</style>
