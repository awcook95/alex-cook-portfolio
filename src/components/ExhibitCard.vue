<template>
  <div class="exhibit-card" @click="goToExhibit">
    <img :src="exhibit.src" alt="Exhibit preview" />
    <h2>{{ exhibit.title }}</h2>
    <p>{{ exhibit.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Exhibit } from '@/types/Exhibit'

const props = defineProps<{ exhibit: Exhibit }>()

const router = useRouter()

function goToExhibit() {
  router.push(`/exhibit/${props.exhibit.id}`)
}
</script>

<style scoped>
.exhibit-card {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: box-shadow 0.2s ease;
}
.exhibit-card:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.exhibit-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
