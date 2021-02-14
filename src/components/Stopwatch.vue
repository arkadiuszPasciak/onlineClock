<template>
  <Time :minutes="minutes" :seconds="seconds" />
  <Button
    :name="status ? 'Stop' : 'Start'"
    :modifier="status ? 'stop' : 'start'"
    @click="startAndStopStopwatch"
  />
  <Button
    name="Reset"
    :modifier="['reset', seconds <= 0 ? 'disabled' : '']"
    @click="resetStopwatch"
  />
  <Button
    name="Round"
    :modifier="['edit', seconds <= 0 ? 'disabled' : '']"
    @click="addRoundToTable"
  />
  <RoundTable :table="roundTable" />
</template>

<script>
import { ref } from 'vue';
import Button from '@/components/Button';
import RoundTable from '@/components/RoundTable';
import Time from '@/components/Time';

export default {
  name: 'Stopwatch',
  components: { Button, RoundTable, Time },
  setup() {
    const roundTable = ref([]);
    let id = ref(0);
    let minutes = ref(0);
    let seconds = ref(0);
    let status = ref(false);

    function resetStopwatch() {
      if (minutes.value !== 0 || seconds.value !== 0) {
        minutes.value = 0
        seconds.value = 0
        status.value = true
        roundTable.value.splice(0, roundTable.value.length)
        id.value = 0
        startAndStopStopwatch()
      }
    }

    function startAndStopStopwatch() {
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

    function addRoundToTable() {
      const values = [
        {
          id: id.value++,
          totalSecond: seconds.value,
          totalMinute: minutes.value,
          roundSecond: 0,
          roundMinute: 0,
        }
      ];

      console.log(values[0].id);

      if (values[0].id > 0) {
        let id = values[0].id - 1;
        values[0].roundSecond = seconds.value - roundTable.value[id].totalSecond

        if (minutes.value !== 0 && minutes.value !== values[0].totalMinute) {
          values[0].roundMinute = minutes.value - roundTable.value[id].totalMinute
        }
      } else if (values[0].id === 0) {
        values[0].roundSecond = seconds.value
      }

      roundTable.value.push(...values);
    }
    
    return {
      addRoundToTable,
      minutes,
      resetStopwatch,
      roundTable,
      seconds,
      status,
      startAndStopStopwatch,
    }
  }
};
</script>
