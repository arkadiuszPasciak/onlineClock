<template>
  <header class="Header">
    <div class="container">
      <div class="content">
        <Logo />
        <Nav />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo';
import Nav from '@/components/Nav';

export default {
  name: 'Header',
  components: {
    Logo,
    Nav,
  }
};
</script>

<style lang="scss" scoped>
.Header {
  background: $cl-dark-blue;
}
.container {
  max-width: 80%;
  margin: 0 auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}
</style>
