<template>
  <div class="exhibit-container">
    <iframe
      :src="base + 'super_snake/snake_game/index.html'"
      width="800"
      height="600"
      frameborder="0"
      title="Super Snake Game"
    ></iframe>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL;
</script>

<style scoped>
.exhibit-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
