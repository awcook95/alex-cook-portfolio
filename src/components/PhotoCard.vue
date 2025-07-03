<template>
  <div class="photo-card" @click="goToDetail">
    <img :src="photo.image" :alt="photo.title" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { PhotoEntry } from '@/data/photos'

const props = defineProps<{ photo: PhotoEntry }>()
const router = useRouter()

function goToDetail() {
  router.push(`/exhibit/photography/${props.photo.id}`)
}
</script>

<style scoped>
.photo-card img {
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 8px;
}
</style>
