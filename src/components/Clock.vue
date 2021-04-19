<template>
  <Time
    :hours="time.hours"
    :minutes="time.minutes"
    :seconds="time.seconds"
    :microseconds="false"
    :modifier="modifier"
  />
</template>

<script>
import { ref } from 'vue';
import Time from '@/components/Time';
import getTime from '@/utils/getTime';

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
    const time = ref(getTime(props.timezone));

    setInterval(() => {
      time.value = getTime(props.timezone);
    }, 500);

    return { time };
  },
};
</script>
