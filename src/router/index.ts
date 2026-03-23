import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth.ts'
const { isAuthenticated } = useAuth()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/HomeView.vue') },
    { path: '/login', component: () => import('@/views/AuthView.vue'), name: 'Login' },
    { path: '/profil', component: () => import('@/views/ProfilView.vue'), name: 'Profil'},
    { path: '/:pathMatch(.*)*', component: () => import('@/views/404View.vue') },
  ],
})
router.beforeEach(async (to) => {
  if (!isAuthenticated.value && to.name !== 'Login') {
    return { name: 'Login' }
  }
  })
export default router
