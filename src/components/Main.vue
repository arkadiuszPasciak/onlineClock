<template>
  <main class="Main">
    <div class="container">
      <div class="content">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0;
}
</style>
