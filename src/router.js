import { createRouter, createWebHistory } from 'vue-router'
import Error401 from './pages/Error401.vue'
import Error402 from './pages/Error402.vue'
import Error403 from './pages/Error403.vue'
import Error404 from './pages/Error404.vue'
import Error405 from './pages/Error405.vue'
import Error500 from './pages/Error500.vue'
import Error501 from './pages/Error501.vue'
import Error502 from './pages/Error502.vue'
import Error503 from './pages/Error503.vue'
import Error504 from './pages/Error504.vue'
import Error505 from './pages/Error505.vue'
import Error522 from './pages/Error522.vue'
import Maintain from './pages/Maintain.vue'

const routes = [
  { path: '/401', component: Error401 },
  { path: '/402', component: Error402 },
  { path: '/403', component: Error403 },
  { path: '/404', component: Error404 },
  { path: '/405', component: Error405 },
  { path: '/500', component: Error500 },
  { path: '/501', component: Error501 },
  { path: '/502', component: Error502 },
  { path: '/503', component: Error503 },
  { path: '/504', component: Error504 },
  { path: '/505', component: Error505 },
  { path: '/522', component: Error522 },
  { path: '/maintain', component: Maintain },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 