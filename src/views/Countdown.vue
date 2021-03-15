<template>
  <CountdownComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountdownComponent from '@/components/Countdown.vue';

export default defineComponent({
  name: 'CountdownView',
  components: { CountdownComponent },
});
</script>
