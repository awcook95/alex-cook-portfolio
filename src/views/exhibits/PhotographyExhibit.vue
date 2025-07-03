<template>
  <div class="grid">
    <PhotoCard
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
    />
  </div>
</template>

<script setup lang="ts">
import PhotoCard from '@/components/PhotoCard.vue'
import { photos } from '@/data/photos'
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 2rem;
}
</style>
