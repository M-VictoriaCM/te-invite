<script>
import Hero from '../components/sections/Hero.vue';
import WhatWeDo from '../components/sections/WhatWeDo.vue';
import FrameVue from '../components/sections/Frame.vue'
import Sample from '../components/sections/Sample.vue';
import Contact from '../components/sections/Contact.vue';
import FooterVue from '../components/Footer.vue';

export default {
  name: 'HomePage',
  components: { Hero, WhatWeDo, FrameVue, Sample, Contact, FooterVue },
}
</script>
<template>
  <div class="container_home">
    <Hero/>
    <WhatWeDo id="whatWeDoSection"/>
    <FrameVue id="frameSection"/>
    <Sample id="sampleSection"/>    
    <Contact id="contactSection"/>
    <FooterVue/>
  </div>
</template>

<style scoped>
.container_home{
  width:100%;
}
</style>
