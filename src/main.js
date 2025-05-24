import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App);

app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right"
})
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    autoHideBadge: true
  }
})

AOS.init({ duration: 1200 })

app.mount('#app')