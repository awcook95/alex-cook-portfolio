<template>
  <div v-if="exhibit">
    <h1>{{ exhibit.title }}</h1>
    <img :src="exhibit.src" :alt="exhibit.title" />
    <p>{{ exhibit.description }}</p>
  </div>
  <div v-else>
    <h1>Exhibit Not Found</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getExhibitById } from '@/data/exhibits'
import type { Exhibit } from '@/types/Exhibit'

const route = useRoute()
const id = route.params.id as string
const exhibit: Exhibit | undefined = getExhibitById(id)
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
}
</style>
