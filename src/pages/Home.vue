<script>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Hero from '../components/sections/Hero.vue';
import WhatWeDo from '../components/sections/WhatWeDo.vue';
import FrameVue from '../components/sections/Frame.vue'
import Sample from '../components/sections/Sample.vue';
import Contact from '../components/sections/Contact.vue';
// import FooterVue from '../components/Footer.vue';

export default {
  name: 'HomePage',
  components: { Hero, WhatWeDo, FrameVue, Sample, Contact },
   setup() {
    const route = useRoute();

    const scrollToSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    onMounted(() => {
      // Scroll inicial si hay meta.scrollTo
      if (route.meta.scrollTo) {
        setTimeout(() => scrollToSection(route.meta.scrollTo), 200);
      }
    });

    watch(
      () => route.fullPath,
      () => {
        if (route.meta.scrollTo) {
          setTimeout(() => scrollToSection(route.meta.scrollTo), 200);
        }
      }
    );
  }
}
</script>
<template>
  <div class="container_home">
    <Hero id="inicio" />
    <WhatWeDo id="que-hacemos" />
    <FrameVue id="frameSection" />
    <Sample id="modelos" />
    <Contact id="contacto" />
  </div>
</template>

<style scoped>
.container_home{
  width:100%;
}
</style>
