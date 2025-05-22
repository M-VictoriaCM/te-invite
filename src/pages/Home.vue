<script>
import Hero from '../components/sections/Hero.vue';
import WhatWeDo from '../components/sections/WhatWeDo.vue';
import FrameVue from '../components/sections/Frame.vue'
import Sample from '../components/sections/Sample.vue';

import Footer from '../components/Footer.vue';

export default {
  components: { Hero, WhatWeDo, FrameVue, Sample, Footer },
  name: "Home"
}
</script>
<template>
  <div class="container_home">
    <Hero/>
    <WhatWeDo id="whatWeDoSection"/>
    <FrameVue id="frameSection"/>
    <Sample id="sampleSection"/>    
    <!-- <Contact id="contactSection"/> -->
    <Footer/>
  </div>
</template>

<style scoped>
.container_home{
  width:100%;
}
</style>
