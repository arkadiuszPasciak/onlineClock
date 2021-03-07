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
    :modifier="[status ? 'stop' : 'start', hours <= 0 && minutes <= 0 && seconds <= 0 ? 'disabled' : '']"
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

<script>
import { ref } from 'vue';
import Button from '@/components/Button';
import Time from '@/components/Time';
import SetTime from '@/components/SetTime';

export default {
  name: 'Countdown',
  components: { Button, Time, SetTime },
  setup() {
    let hours = ref(0);
    let minutes = ref(0);
    let seconds = ref(0);
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

          if (seconds.value <= 0 && minutes.value <= 0 && hours.value > 0) {
            minutes.value = 59
            seconds.value = 59
            hours.value--
          }

          if (seconds.value <= 0 && minutes.value > 0) {
            seconds.value = 59
            minutes.value--
          }

          if (seconds.value <= 0 && minutes.value <= 0 && hours.value <= 0) {
            clearInterval(intervalSeconds)
            status.value = false
          }
        }
      }
    }
    function resetCountdown() {
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      status.value = false
    }

    return { hours, minutes, seconds, status, startAndStopCountdown, resetCountdown }
  },
  mounted() {
    this.emitter.on('countdown', (time) => {
      this.hours = time[0];
      this.minutes = time[1];
      this.seconds = time[2];
    });
  },
}
</script>
