<template>
  <div class="CalendarDate">
    <span class="day-of-the-week">{{ nameOfTheDay }}</span>
    <span class="day">{{ numberOfTheMonthDay }}</span>
    <span class="month">{{ nameOfTheMonth }}</span>
    <span class="year">{{ year }}</span>
  </div>
</template>

<script>
import { getNameOfTheDay, getNameOfTheMonth } from '@/utils/date';

export default {
  name: 'CalendarDate',
  setup() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const numberOfTheMonthDay = new Date(year, month, 0).getDate();
    const nameOfTheDay = getNameOfTheDay(day);
    const nameOfTheMonth = getNameOfTheMonth(month);

    return {
      day,
      nameOfTheDay,
      nameOfTheMonth,
      numberOfTheMonthDay,
      year,
    };
  },
};
</script>

<style lang="scss" scoped>
.CalendarDate {
  color: $cl-white;
  @include below(medium) {
    padding: 20px;
    font: 500 25px/29px $sourceSansPro;
  }
  @include above(medium) {
    padding: 0 0 60px;
    font: 500 37px/41px $sourceSansPro;
  }
}
.day-of-the-week {
  &::after {
    content: '-';
    margin: 0 10px;
  }
}
.month {
  margin: 0 10px;
}
</style>
