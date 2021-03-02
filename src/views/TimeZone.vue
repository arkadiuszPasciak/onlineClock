<template>
  <Clock />
  <CalendarDate />
  <TimeZoneTable />
</template>

<script>
import CalendarDate from '@/components/CalendarDate';
import Clock from '@/components/Clock';
import TimeZoneTable from '@/components/TimeZoneTable';

export default {
  name: 'TimeZone',
  components: { CalendarDate, Clock, TimeZoneTable },
};
</script>
