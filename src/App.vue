<template>
  <Header />
  <main>
    <router-link to="/">Home</router-link>
    <router-view/>
  </main>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
