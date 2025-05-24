import { createRouter, createWebHistory  } from 'vue-router'

import DashboardLayout from '../layouts/DashboardLayout.vue';
import Home from '../pages/Home.vue';

const routes = [
  { path: '/', component: DashboardLayout, children:[
    {path:'', name:'Home', component:Home, children:[
      {path:'/lo-que-hacemos', name:'LoQueHacemos',component:Home,meta:{scrollTo: 'whatWeDoSection'}},
      {path:'/muestras', name:'muestras',component:Home,meta:{scrollTo: 'sampleSection'}},
      {path:'/mockup', name:'frame',component:Home,meta:{scrollTo: 'frameSection'}},
      {path:'/contacto', name:'contacto',component:Home,meta:{scrollTo: 'contactSection'}}
    ]},
    
  ] }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.meta.scrollTo) {
      return {
        el: `#${to.meta.scrollTo}`,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
});

export default router;