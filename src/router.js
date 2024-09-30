import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/PaginaPrincipal.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
