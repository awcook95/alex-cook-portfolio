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
import { exhibits } from '@/data/exhibits'
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 2rem;
}
</style>
