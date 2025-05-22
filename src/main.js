import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VueReCaptcha } from 'vue-recaptcha-v3';


const app = createApp(App);

app.use(router);
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    autoHideBadge: true
  }
})

AOS.init({ duration: 1200 })

app.mount('#app')