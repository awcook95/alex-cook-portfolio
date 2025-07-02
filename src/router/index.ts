import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ExhibitPage from '@/views/ExhibitPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/exhibit/:id', component: ExhibitPage, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router