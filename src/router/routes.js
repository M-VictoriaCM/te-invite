import { createRouter, createWebHistory } from 'vue-router';
import DashboardLayout from '../layouts/DashboardLayout.vue';
import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '/inicio',
        name: 'inicio',
        component: Home,
        meta: { scrollTo: 'inicio' }
      },
      {
        path: '/que-hacemos',
        name: 'queHacemos',
        component: Home,
        meta: { scrollTo: 'que-hacemos' }
      },
      {
        path: '/modelos',
        name: 'sample',
        component: Home,
        meta: { scrollTo: 'modelos' }
      },
      {
        path: '/contacto',
        name: 'contacto',
        component: Home,
        meta: { scrollTo: 'contacto' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.meta.scrollTo) {
      return {
        el: `#${to.meta.scrollTo}`,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  }
});

export default router;