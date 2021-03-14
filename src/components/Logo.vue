<template>
  <router-link class="Logo" to="/" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
});
</script>

<style lang="scss" scoped>
.Logo {
  width: 90px;
  height: 45px;
  background: url('~@/assets/icons/logo.png') center center no-repeat;
}
</style>
