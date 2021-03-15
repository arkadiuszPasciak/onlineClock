<template>
  <Time
    :hours="hours"
    :minutes="minutes"
    :seconds="seconds"
    :microseconds="false"
    :modifier="modifier"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Time from '@/components/Time.vue';

export default defineComponent({
  name: 'Clock',
  components: { Time },
  props: {
    modifier: {
      type: String,
      default: '',
    },
    timezone: {
      default: false,
    },
  },
  setup(props) {
    const date = new Date();
    let hour;

    if (props.timezone === false) {
      hour = date.toLocaleTimeString();
    } else {
      hour = date.toLocaleTimeString('en-GB', { timeZone: props.timezone });
    }

    const hours = ref(parseInt(hour.slice(0, 2), 10));
    const minutes = ref(parseInt(hour.slice(3, 5), 10));
    const seconds = ref(parseInt(hour.slice(6, 8), 10));

    function clock() {
      seconds.value += 1;

      if (seconds.value === 60) {
        minutes.value += 1;
        seconds.value = 0;
      }
      if (minutes.value === 60) {
        hours.value += 1;
        minutes.value = 0;
      }
      if (hours.value === 24) {
        hours.value = 0;
      }
    }

    setInterval(clock, 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  },
});
</script>
