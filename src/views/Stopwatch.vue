<template>
  <StopWatchComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatchComponent from '../components/Stopwatch';

export default defineComponent({
  name: 'StopwatchView',
  components: { StopWatchComponent },
});
</script>
