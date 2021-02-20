<template>
  <div class="Round" v-if="table.length">
    <div class="header">
      <div class="heading">Round</div>
      <div class="heading">Time</div>
      <div class="heading">Total time</div>
    </div>
    <div class="content">
      <div class="item" v-for="el in table" :key="el.id">
        <div class="number">{{ el.id + 1 }}</div>
        <div class="number">
          <div class="minutes">
            <span v-if="el.roundMinute < 10">0</span>
            <span>{{ el.roundMinute }}</span>
          </div>
          <div class="seconds">
            <span v-if="el.roundSeconds < 10">0</span>
            <span>{{ el.roundSeconds }}</span>
          </div>
          <div class="microseconds">
            <span v-if="el.roundMicroseconds < 10">0</span>
            <span>{{ el.roundMicroseconds }}</span>
          </div>
        </div>
        <div class="number">
          <div class="minutes">
            <span v-if="el.totalMinutes < 10">0</span>
            <span>{{ el.totalMinutes }}</span>
          </div>
          <div class="seconds">
            <span v-if="el.totalSeconds < 10">0</span>
            <span>{{ el.totalSeconds }}</span>
          </div>
          <div class="microseconds">
            <span v-if="el.totalMicroseconds < 10">0</span>
            <span>{{ el.totalMicroseconds }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Round',
  props: ['table'],
};
</script>

<style lang="scss" scoped>
.Round {
  margin: 75px 0 0;
  color: $cl-white;
}
.header,
.item {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 145px);
  column-gap: 5px;
  row-gap: 10px;
  flex-basis: 100%;
}
.header {
  margin: 0 0 20px;
}
.item {
  margin: 0 0 5px;
}
.content {
  display: flex;
  flex-direction: column-reverse;
}
.heading {
  font: 500 20px/24px $sourceSansPro;
}
.content {
  font: 500 30px/30px $digital;
}
.number {
  display: flex;
  justify-content: center;
}
.minutes {
  &::after {
    content: ':';
  }
}
.microseconds {
  &::before {
    content: '.';
  }
}
</style>
