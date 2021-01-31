<template>
  <div class="Time">902:50</div>
</template>

<script>
export default {
  name: 'Time',
};
</script>

<style lang="scss" scoped>
.Time {
  color: $cl-white;
  @include below(medium) {
    font: 500 100px/60px $digital;
    margin: 0 0 50px;
  }
  @include above(medium) {
    font: 500 160px/120px $digital;
    margin: 0 0 75px;
  }
}
</style>
