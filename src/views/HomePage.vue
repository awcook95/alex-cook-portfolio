<template>
  <div class="grid">
    <ExhibitCard
      v-for="item in exhibits"
      :key="item.id"
      :exhibit="item"
    />
  </div>
</template>

<script setup lang="ts">
import ExhibitCard from '@/components/ExhibitCard.vue'
import type { Exhibit } from '@/types/exhibit'

const exhibits: Exhibit[] = [
  {
    id: 'first',
    title: 'First Exhibit',
    image: 'https://via.placeholder.com/400x200.png?text=Exhibit+1',
    description: 'A preview of the first collection.'
  },
  {
    id: 'second',
    title: 'Second Exhibit',
    image: 'https://via.placeholder.com/400x200.png?text=Exhibit+2',
    description: 'Another example showcase.'
  }
]
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 2rem;
}
</style>
