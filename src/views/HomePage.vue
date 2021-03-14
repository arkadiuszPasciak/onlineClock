<template>
  <Nav :name="true" size="big" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: { Nav },
});
</script>
