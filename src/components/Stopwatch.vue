<template>
  <Time :minutes="minutes" :seconds="seconds" :microseconds="microseconds" />
  <Button
    :name="status ? 'Stop' : 'Start'"
    :modifier="status ? 'stop' : 'start'"
    @click="startAndStopStopwatch"
  />
  <Button
    name="Reset"
    :modifier="['reset', seconds !== 0 || microseconds !== 0 || minutes <= 0 ? '' : 'disabled']"
    @click="resetStopwatch"
  />
  <Button
    name="Round"
    :modifier="['edit', !status ? 'disabled' : '']"
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
    let microseconds = ref(0);
    let minutes = ref(0);
    let seconds = ref(0);
    let status = ref(false);

    function resetStopwatch() {
      if (minutes.value !== 0 || seconds.value !== 0) {
        microseconds.value = 0
        minutes.value = 0
        seconds.value = 0
        status.value = true
        roundTable.value.splice(0, roundTable.value.length)
        id.value = 0
        startAndStopStopwatch()
      }
    }

    function startAndStopStopwatch() {
      let intervalMicroseconds = setInterval(countMicroseconds, 10);
      let intervalSeconds = setInterval(countSeconds, 1000);

      if (status.value === false) {
        status.value = true
      } else if (status.value === true) {
        status.value = false
      }

      function countMicroseconds() {
        if (status.value === false) {
          clearInterval(intervalMicroseconds)
        } else if (status.value === true) {
          microseconds.value += 1
        
          if (microseconds.value === 100) {
            microseconds.value = 0
          }
        }
      }

      function countSeconds() {
        if (status.value === false) {
          clearInterval(intervalSeconds)
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
          totalSeconds: seconds.value,
          totalMinutes: minutes.value,
          totalMicroseconds: microseconds.value,
          roundSeconds: 0,
          roundMinute: 0,
          roundMicroseconds: 0,
        }
      ];

      if (values[0].id > 0) {
        let id = values[0].id - 1;

        if (minutes.value !== 0 && minutes.value !== values[0].totalMinutes) {
          values[0].roundMinute = minutes.value - roundTable.value[id].totalMinutes
        }
        if (microseconds.value !== 0 && roundTable.value[id].totalMicroseconds !== 0) {
          let currentTotalMicroseconds = values[0].totalMicroseconds + (values[0].totalSeconds * 100);
          let previousTotalMicroseconds = roundTable.value[id].totalMicroseconds + (roundTable.value[id].totalSeconds * 100);
          let sumMicroseconds = currentTotalMicroseconds - previousTotalMicroseconds;
          let restMicroseconds = parseInt(sumMicroseconds.toString().slice(-2));
          let restSeconds = parseInt(sumMicroseconds.toString().slice(0, -2));

          if (sumMicroseconds < 100) {
            values[0].roundMicroseconds = sumMicroseconds
            values[0].roundSeconds = 0
          } else if (sumMicroseconds >= 100) {
            values[0].roundMicroseconds = restMicroseconds
            values[0].roundSeconds = restSeconds
          }
        } else {
          values[0].roundSeconds = 0
        }
      } else if (values[0].id === 0) {
        values[0].roundSeconds = seconds.value
        values[0].roundMicroseconds = microseconds.value
      }

      roundTable.value.push(...values);
    }
    
    return {
      addRoundToTable,
      microseconds,
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
