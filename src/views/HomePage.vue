<template>
  <Nav :name="true" size="big" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';

export default defineComponent({
  name: 'HomePage',
  components: { Nav },
});
</script>
