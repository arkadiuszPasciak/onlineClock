<template>
  <Time
    :hours="false"
    :microseconds="microseconds"
    :minutes="minutes"
    :seconds="seconds"
  />
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
    const id = ref(-1);
    const microseconds = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const status = ref(false);
    let intervalMicroseconds = null;
    let intervalSeconds = null;

    function resetStopwatch() {
      if (minutes.value !== 0 || seconds.value !== 0) {
        microseconds.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        status.value = true;
        roundTable.value.splice(0, roundTable.value.length);
        id.value = -1;
        startAndStopStopwatch();
      }
    }

    function countMicroseconds() {
      microseconds.value += 1;

      if (microseconds.value === 100) {
        microseconds.value = 0;
      }
    }

    function countSeconds() {
      seconds.value += 1;

      if (seconds.value === 60) {
        minutes.value += 1;
        seconds.value = 0;
      }
    }

    function startAndStopStopwatch() {
      if (status.value === false) {
        status.value = true;
        intervalMicroseconds = setInterval(countMicroseconds, 10);
        intervalSeconds = setInterval(countSeconds, 1000);
      } else if (status.value === true) {
        status.value = false;
        clearInterval(intervalMicroseconds);
        clearInterval(intervalSeconds);
      }
    }

    function addRoundToTable() {
      const values = [
        {
          id: id.value += 1,
          totalSeconds: seconds.value,
          totalMinutes: minutes.value,
          totalMicroseconds: microseconds.value,
          roundSeconds: 0,
          roundMinute: 0,
          roundMicroseconds: 0,
        },
      ];

      if (values[0].id > 0) {
        const previousId = values[0].id - 1;

        if (minutes.value !== 0 && minutes.value !== values[0].totalMinutes) {
          values[0].roundMinute = minutes.value - roundTable.value[previousId].totalMinutes;
        }
        if (microseconds.value !== 0 && roundTable.value[previousId].totalMicroseconds !== 0) {
          const currentTotalMicroseconds = values[0].totalMicroseconds + (values[0].totalSeconds * 100);
          const previousTotalMicroseconds = roundTable.value[previousId].totalMicroseconds + (roundTable.value[previousId].totalSeconds * 100);
          const sumMicroseconds = currentTotalMicroseconds - previousTotalMicroseconds;
          const restMicroseconds = parseInt(sumMicroseconds.toString().slice(-2), 10);
          const restSeconds = parseInt(sumMicroseconds.toString().slice(0, -2), 10);

          if (sumMicroseconds < 100) {
            values[0].roundMicroseconds = sumMicroseconds;
            values[0].roundSeconds = 0;
          } else if (sumMicroseconds >= 100) {
            values[0].roundMicroseconds = restMicroseconds;
            values[0].roundSeconds = restSeconds;
          }
        } else {
          values[0].roundSeconds = 0;
        }
      } else if (values[0].id === 0) {
        values[0].roundMinutes = minutes.value;
        values[0].roundSeconds = seconds.value;
        values[0].roundMicroseconds = microseconds.value;
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
    };
  },
};
</script>
