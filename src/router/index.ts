import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ExhibitPage from '@/views/ExhibitPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/exhibit/:id', component: ExhibitPage, props: true },
  {
    path: '/exhibit/photography',
    component: () => import('@/views/exhibits/PhotographyExhibit.vue')
  },
  {
    path: '/exhibit/photography/:photoId',
    component: () => import('@/views/exhibits/PhotoDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router