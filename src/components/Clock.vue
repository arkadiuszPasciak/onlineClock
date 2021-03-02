<template>
  <Time
    :hours="hours"
    :minutes="minutes"
    :seconds="seconds"
    :microseconds="false"
    :modifier="modifier"
  />
</template>

<script>
import { ref } from 'vue';
import Time from '@/components/Time';

export default {
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
    let date = new Date();
    let hour;

    if (props.timezone === false) {
      hour = date.toLocaleTimeString();
    } else {
      hour = date.toLocaleTimeString('en-GB', {timeZone: props.timezone});
    }

    const hours = ref(parseInt(hour.slice(0, 2)));
    const minutes = ref(parseInt(hour.slice(3, 5)));
    const seconds = ref(parseInt(hour.slice(6, 8)));

    function clock() {
      seconds.value += 1

      if (seconds.value === 60) {
        minutes.value++
        seconds.value = 0
      }
      if (minutes.value === 60) {
        hours.value++
        minutes.value = 0
      }
      if (hours.value === 24) {
        hours.value = 0
      }
    }

    setInterval(clock, 1000);

    return {
      hours,
      minutes,
      seconds,
    }
  },
}
</script>

