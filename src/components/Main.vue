<template>
  <main class="Main">
    <div class="container">
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
});
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  @include above(medium) {
    max-width: 75%;
  }
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  @include below(medium) {
    padding: 50px 10px;
  }
  @include above(medium) {
    padding: 100px 50px;
  }
}
</style>
