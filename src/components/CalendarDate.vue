<template>
  <div class="CalendarDate">
    <span class="day-of-the-week">{{ nameOfTheDay }}</span>
    <span class="day">{{ numberOfTheMonthDay }}</span>
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
    let numberOfTheMonthDay = new Date(year, month, 0).getDate();

    switch (day) {
      case 0:
        nameOfTheDay = 'Sunday';
        break;
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
    }

    switch (month) {
      case 0:
        nameOfTheMonth = 'January';
        break;
      case 1:
        nameOfTheMonth = 'February';
        break;
      case 2:
        nameOfTheMonth = 'March';
        break;
      case 3:
        nameOfTheMonth = 'April';
        break;
      case 4:
        nameOfTheMonth = 'May';
        break;
      case 5:
        nameOfTheMonth = 'June';
        break;
      case 6:
        nameOfTheMonth = 'July';
        break;
      case 7:
        nameOfTheMonth = 'August';
        break;
      case 8:
        nameOfTheMonth = 'September';
        break;
      case 9:
        nameOfTheMonth = 'October';
        break;
      case 10:
        nameOfTheMonth = 'November';
        break;
      case 11:
        nameOfTheMonth = 'December';
        break;
    }

    return {
      day,
      nameOfTheDay,
      nameOfTheMonth,
      numberOfTheMonthDay,
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
    padding: 20px 0 60px;
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
