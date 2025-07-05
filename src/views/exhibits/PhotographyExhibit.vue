<template>
  <div v-if="Object.values(groupedPhotos).some(arr => arr.length)">
    <div v-for="(groupPhotos, group) in groupedPhotos" :key="group" class="group">
      <div class="grid">
        <PhotoCard
          v-for="photo in groupPhotos"
          :key="photo.id"
          :photo="photo"
        />
      </div>
    </div>
  </div>
  <div v-else>Loading photos...</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PhotoCard from '@/components/PhotoCard.vue'
import { photos } from '@/data/photos'
import type { PhotoEntry } from '@/types/PhotoEntry'


const groupedPhotos = ref<Record<string, typeof photos>>({
    portrait: [],
    landscape: [],
    square: []
})

function getAspectGroup(width: number, height: number) {
  const ratio = width / height
  if (ratio > 1.3) return 'landscape'
  else if (ratio < 0.77) return 'portrait'
  return 'square'
}

onMounted(async () => {
  const promises = photos.map((photo: PhotoEntry) => {
    return new Promise<{ group: string; photo: PhotoEntry }>((resolve) => {
      const img = new Image()
      img.onload = () => {
        const group = getAspectGroup(img.width, img.height)
        resolve({ group, photo })
      }
      img.src = photo.src
    })
  })

  const results = await Promise.all(promises)
  for (const { group, photo } of results) {
    groupedPhotos.value[group].push(photo)
  }
})
</script>

<style scoped>
.group {
  margin-bottom: 2rem;
}

.group-title {
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
