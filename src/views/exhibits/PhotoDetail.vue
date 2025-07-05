<template>
  <div class="photo-detail">
    <img :src="photo?.src" :alt="photo?.title" />
    <h1>{{ photo?.title }}</h1>
    <p>{{ photo?.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { photos } from '@/data/photos'

const route = useRoute()
const photoId = route.params.photoId
const photo = photos.find(p => p.id === photoId)
</script>

<style scoped>
.photo-detail {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  text-align: center;
}
.photo-detail img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
