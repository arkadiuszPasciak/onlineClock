<template>
  <teleport to="#modal">
    <SetTime ref="setTime"/>
  </teleport>
  <Time
    :hours="hours"
    :minutes="minutes"
    :seconds="seconds"
    :microseconds="false"
  />
  <Button
    :name="status ? 'Stop' : 'Start'"
    :modifier="[
      status ? 'stop' : 'start',
      hours <= 0 && minutes <= 0 && seconds <= 0 ? 'disabled' : ''
    ]"
    @click="startAndStopCountdown"
  />
  <Button
    name="Edit"
    modifier="edit"
    @click="$refs.setTime.show = true"
  />
  <Button
    name="Reset"
    :modifier="['reset' , hours <= 0 && minutes <= 0 && seconds <= 0 ? 'disabled' : '']"
    @click="resetCountdown"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from '@/components/Button.vue';
import Time from '@/components/Time.vue';
import SetTime from '@/components/SetTime.vue';

export default defineComponent({
  name: 'Countdown',
  components: { Button, Time, SetTime },
  setup() {
    const hours = ref<number>(0);
    const minutes = ref<number>(0);
    const seconds = ref<number>(0);
    const status = ref<boolean>(false);

    function startAndStopCountdown() {
      const intervalSeconds = setInterval(countSeconds, 1000);

      function countSeconds() {
        if (status.value === false) {
          clearInterval(intervalSeconds);
        } else if (status.value === true) {
          seconds.value -= 1;

          if (seconds.value <= 0 && minutes.value <= 0 && hours.value > 0) {
            minutes.value = 59;
            seconds.value = 59;
            hours.value -= 1;
          }

          if (seconds.value <= 0 && minutes.value > 0) {
            seconds.value = 59;
            minutes.value -= 1;
          }

          if (seconds.value <= 0 && minutes.value <= 0 && hours.value <= 0) {
            clearInterval(intervalSeconds);
            status.value = false;
          }
        }
      }

      if (status.value === false) {
        status.value = true;
      } else if (status.value === true) {
        status.value = false;
      }
    }
    function resetCountdown() {
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
      status.value = false;
    }

    return {
      hours,
      minutes,
      seconds,
      status,
      startAndStopCountdown,
      resetCountdown,
    };
  },
  mounted() {
    this.emitter.on('countdown', (time: number[]) => {
      const [hours, minutes, seconds] = time;

      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    });
  },
});
</script>
