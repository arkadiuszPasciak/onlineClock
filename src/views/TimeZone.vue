<template>
  <Clock />
  <CalendarDate />
  <TimeZoneTable />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarDate from '@/components/CalendarDate.vue';
import Clock from '@/components/Clock.vue';
import TimeZoneTable from '@/components/TimeZoneTable.vue';

export default defineComponent({
  name: 'TimeZoneView',
  components: { CalendarDate, Clock, TimeZoneTable },
});
</script>
