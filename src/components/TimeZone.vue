<template>
  <Time :hours="hours" :minutes="minutes" :seconds="seconds" :microseconds="false" />
  <CalendarDate />
</template>

<script>
import CalendarDate from '@/components/CalendarDate';
import Time from '@/components/Time';

export default {
  name: 'TimeZone',
  components: { CalendarDate, Time },
  setup() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
      hours,
      minutes,
      seconds,
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
