<template>
  <Time 
    :hours="hours"
    :minutes="minutes"
    :seconds="seconds"
    :microseconds="false"
  />
  <Button
    :name="status ? 'Stop' : 'Start'"
    :modifier="[status ? 'stop' : 'start', hours <= 0 && minutes <= 0 && seconds <= 0 ? 'disabled' : '']"
    @click="startAndStopCountdown"
  />
  <Button
    name="Edit"
    modifier="edit"
  />
  <Button
    name="Reset"
    :modifier="['reset' , hours <= 0 && minutes <= 0 && seconds <= 0 ? 'disabled' : '']"
    @click="resetCountdown"
  />
</template>

<script>
import { ref } from 'vue';
import Button from '@/components/Button';
import Time from '@/components/Time';

export default {
  name: 'Countdown',
  components: { Button, Time },
  setup() {
    let hours = ref(1);
    let minutes = ref(0);
    let seconds = ref(2);
    let status = ref(false);

    function startAndStopCountdown() {
      let intervalSeconds = setInterval(countSeconds, 1000);

      if (status.value === false) {
        status.value = true
      } else if (status.value === true) {
        status.value = false
      }

      function countSeconds() {
        if (status.value === false) {
          clearInterval(intervalSeconds)
        } else if (status.value === true) {
          seconds.value--

          if (seconds.value === 0 && minutes.value > 0) {
            seconds.value = 59
            minutes.value--
          }

          if (seconds.value === 0 && minutes.value === 0 && hours.value > 0) {
            minutes.value = 59
            seconds.value = 59
            hours.value--
          }

          if (seconds.value <= 0 && minutes.value <= 0 && hours.value <= 0) {
            clearInterval(intervalSeconds)
            status.value = false
          }
        }
      }
    }
    function resetCountdown() {
      if (hours.value !== 0 || minutes.value !== 0 || seconds.value !== 0) {
        hours.value = 0
        minutes.value = 0
        seconds.value = 0
        if (status.value === true) {
          status.value = false
        }
      }
    }

    return { hours, minutes, seconds, status, startAndStopCountdown, resetCountdown }
  }
}
</script>
