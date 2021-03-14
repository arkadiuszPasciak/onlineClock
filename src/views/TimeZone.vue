<template>
  <Clock />
  <CalendarDate />
  <TimeZoneTable />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalendarDate from '../components/CalendarDate';
import Clock from '../components/Clock';
import TimeZoneTable from '../components/TimeZoneTable';

export default defineComponent({
  name: 'TimeZoneView',
  components: { CalendarDate, Clock, TimeZoneTable },
});
</script>
