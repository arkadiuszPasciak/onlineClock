<template>
  <Time :minutes="minutes" :seconds="seconds" />
  <Button 
    :name="status ? 'Stop' : 'Start'"
    :modifier="status ? 'stop' : 'start'"
    @click="stopWatch"
  />
  <Button 
    name="Reset"
    modifier="reset"
    @click="resetStopWatch"
  />
  <RoundTable />
</template>

<script>
import { ref } from 'vue';
import Button from '@/components/Button';
import RoundTable from '@/components/RoundTable';
import Time from '@/components/Time';

export default {
  name: 'StopWatch',
  components: { Button, RoundTable, Time },
  setup() {
    let seconds = ref(0);
    let minutes = ref(0);
    let status = ref(false);

    function resetStopWatch() {
      if (minutes.value !== 0 || seconds.value !== 0) {
        minutes.value = 0
        seconds.value = 0
        status.value = true
        stopWatch()
      }
    }

    function stopWatch() {
      let interval = setInterval(countSeconds, 1000);

      if (status.value === false) {
        status.value = true
      } else if (status.value === true) {
        status.value = false
      }

      function countSeconds() {
        if (status.value === false) {
          clearInterval(interval)
        } else if (status.value === true) {
          seconds.value += 1
        
          if (seconds.value === 60) {
            minutes.value++
            seconds.value = 0
          }
        }
      }
    }
    
    return {
      seconds,
      minutes,
      status,
      resetStopWatch,
      stopWatch
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
