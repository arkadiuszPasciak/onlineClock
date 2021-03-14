<template>
  <Header />
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header';
import Main from './components/Main';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Main,
  },
});
</script>
