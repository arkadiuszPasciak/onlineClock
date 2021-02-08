<template>
  <div class="Round">
    <div class="heading">Round</div>
    <div class="heading">Time</div>
    <div class="heading">Total time</div>
    <div class="item">1</div>
    <div class="item">
      <span class="minutes">00</span>
      <span class="seconds">01</span>
    </div>
    <div class="item">
      <span class="minutes">00</span>
      <span class="seconds">05</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Round',
  props: ['minutes', 'seconds'],
};
</script>

<style lang="scss" scoped>
.Round {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 100px);
  column-gap: 5px;
  row-gap: 10px;
  flex-basis: 100%;
  margin: 75px 0 0;
  color: $cl-white;
}
.heading {
  font: 500 20px/24px $sourceSansPro;
}
.item {
  font: 500 30px/30px $digital;
}
.minutes {
  &::after {
    content: ':';
  }
}
</style>
