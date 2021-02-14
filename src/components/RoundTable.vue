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
          <span class="minutes" v-if="el.roundMinute < 10">0</span>
          <span class="minutes is-colon">{{ el.roundMinute }}</span>
          <span class="seconds" v-if="el.roundSecond < 10">0</span>
          <span class="seconds">{{ el.roundSecond }}</span>
        </div>
        <div class="number">
          <span class="minutes" v-if="el.totalMinute < 10">0</span>
          <span class="minutes is-colon">{{ el.totalMinute }}</span>
          <span class="seconds" v-if="el.totalSecond < 10">0</span>
          <span class="seconds">{{ el.totalSecond }}</span>
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
  grid-template-columns: repeat(3, 100px);
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
.minutes {
  &.is-colon {
    &::after {
      content: ':';
    }
  }
}
</style>
