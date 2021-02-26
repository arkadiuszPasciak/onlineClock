<template>
  <div class="CalendarDate">
    <span class="day-of-the-week">{{ nameOfTheDay }}</span>
    <span class="day">{{ day }}</span>
    <span class="month">{{ nameOfTheMonth }}</span>
    <span class="year">{{ year }}</span>
  </div>
</template>

<script>
export default {
  name: 'CalendarDate',
  setup() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    let nameOfTheDay = '';
    let nameOfTheMonth = '';

    switch (day) {
      case 1:
        nameOfTheDay = 'Monday';
        break;
       case 2:
        nameOfTheDay = 'Tuesday';
        break;
      case 3:
        nameOfTheDay = 'Wednesday';
        break;
      case 4:
        nameOfTheDay = 'Thursday';
        break;
      case 5:
        nameOfTheDay = 'Friday';
        break;
      case 6:
        nameOfTheDay = 'Saturday';
        break;
      case 7:
        nameOfTheDay = 'Sunday';
        break;
    }

    switch (month) {
      case 1:
        nameOfTheMonth = 'January';
        break;
       case 2:
        nameOfTheMonth = 'February';
        break;
      case 3:
        nameOfTheMonth = 'March';
        break;
      case 4:
        nameOfTheMonth = 'April';
        break;
      case 5:
        nameOfTheMonth = 'May';
        break;
      case 6:
        nameOfTheMonth = 'June';
        break;
      case 7:
        nameOfTheMonth = 'July';
        break;
      case 8:
        nameOfTheMonth = 'August';
        break;
      case 9:
        nameOfTheMonth = 'September';
        break;
      case 10:
        nameOfTheMonth = 'October';
        break;
      case 11:
        nameOfTheMonth = 'November';
        break;
      case 12:
        nameOfTheMonth = 'December';
        break;
    }

    return {
      day,
      nameOfTheDay,
      nameOfTheMonth,
      year,
    }
  }
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
    padding: 40px;
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
