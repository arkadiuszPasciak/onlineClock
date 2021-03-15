<template>
  <StopWatchComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatchComponent from '@/components/Stopwatch.vue';

export default defineComponent({
  name: 'StopwatchView',
  components: { StopWatchComponent },
});
</script>
