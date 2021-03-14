<template>
  <div class="TimeZoneItem">
    <p class="name">
      <span class="city">{{ city }}</span>
      <span class="country">{{ country }}</span>
    </p>
    <Clock modifier="small" :timezone="timezone" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Clock from './Clock';

export default defineComponent({
  name: 'TimeZoneItem',
  props: ['city', 'country', 'timezone'],
  components: { Clock },
});
</script>

<style lang="scss" scoped>
.TimeZoneItem {
  padding: 20px 17px 25px;
  background: $cl-dark-blue;
  color: $cl-white;
}
.name {
  font: 500 15px/19px $sourceSansPro;
  &:first-of-type {
    margin: 0 0 5px;
  }
  &:last-of-type {
    margin: 0 0 10px;
  }
}
.city {
  &::after {
    content: ', ';
  }
}
</style>
