import { createRouter, createMemoryHistory,createWebHistory  } from 'vue-router'

import DashboardLayout from '../layouts/DashboardLayout.vue';
import Home from '../pages/Home.vue';

const routes = [
  { path: '/', component: DashboardLayout, children:[
    {path:'', name:'Home', component:Home}
  ] }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;