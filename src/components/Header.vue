<template>
  <header class="Header">
    <div class="container">
      <div class="content">
        <Logo />
        <Nav :name="false" size="small" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import Nav from '@/components/Nav.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
    Nav,
  },
});
</script>

<style lang="scss" scoped>
.Header {
  background: $cl-dark-blue;
}
.container {
  margin: 0 auto;
  @include above(medium) {
    max-width: 80%;
  }
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
}
</style>
