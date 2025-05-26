<script>
import mockup1 from '../../assets/img/0827_smartphone_on_hand_with_instagram_display_mockup 1.webp';
import linea from '../../assets/img/lineas.svg';
import textura from '../../assets/img/textura.webp';

export default {
  name: 'HeroSection',
  data() {
    return {
      subtitle: "Sumate a la nueva forma de invitar y sorprendé a tus familiares y amigos.",
      mockup1: mockup1,
      linea: linea,
      textura: textura,
      animated: false 
    }
  },
  mounted() { // Usamos el hook mounted de Options API
    setTimeout(() => {
      this.animated = true;
    }, 300);
  },
  methods: {
  scrollToContact() {
    const element = document.getElementById("contactSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
  
}
</script>
<template>
  <div id="inicio" class="hero_container">
    <img :src="textura" class="textura-img" alt="">
    <img :src="linea" class="lineas-img" alt="Patrón de líneas">
    <div class="section-content">
      <div class="hero-details">
        <div class="text1">
          <h1>
            <span class="acent-wrapper">
              <span class="acent-bg" :class="{ 'animated': animated }"></span>
              <span class="acent-text">La celebración</span>
            </span>
            empieza acá, tus 15, tu boda o tu cumple!" </h1>
        </div>
        <div class="text2">
          <h3>{{ subtitle }}</h3>
        </div>
        <button class="btn btn-primary btn-custom" @click="scrollToContact">Contactar</button>

      </div>
      <div class="hero-img">
        <img :src="mockup1" alt="mockup1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos para móvil (base) */
.hero_container {
  width: 100vw;
  height: 100vh;
  padding-top:3rem;
  background-color: #f7dd55;
  position: relative;
  overflow: hidden;
}

.section-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  position: relative;
  z-index: 2;
}

.hero-img {
  width: 100%;
  margin-top: auto;
}

.hero-img img {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
  margin-left: -20px;
  margin-bottom: -20px;
}

.hero-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

.text1,
.text2 {
  width: 100%;
  max-width: 250px;
  color: var(--color_primary);
}

.text1 h1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
}

.text2 h3 {
  font-size: 1.2rem;
  font-weight: normal;
}

.acent-wrapper {
  position: relative;
  display: inline-block;
}

.acent-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color_acent);
  z-index: -1;
  transform: scaleX(0.8) scaleY(0.9);
  opacity: 0;
  transform-origin: left center;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.4, 1);
}

.acent-bg.animated {
  transform: scaleX(1) scaleY(1);
  opacity: 1;
}

.acent-text {
  position: relative;
  color: white; /* Color del texto sobre el fondo */
  padding: 0 2px; /* Ajuste para el fondo */
}
.btn-custom {
  background-color: var(--color_primary);
  border: var(--color_primary);
  padding: 10px 30px;
}

.btn-custom:hover {
  color: var(--color_primary);
  background-color: #fff;
}

/* Fondos (deben estar detrás) */
.lineas-img,
.textura-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hero_container {
    width: 100vw;
    min-height: calc(100vh - var(--header));
    position: relative;
  }
  .section-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  position: relative;
  z-index: 2;
}

.hero-img {
  order: 1;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
}

.hero-img img {
  width: 100%;
  max-width: 700px;
  height: auto; 
  margin-left: -20px;
  margin-bottom: -100%;
}

.hero-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
}
.text1,
.text2 {
  width: 100%;
  max-width: 650px;
}
.text1 h1 {
    font-size: 2.5rem;
  }

  .text2 h3 {
    font-size: 1.5rem;
  }
}
/* Versión para desktop */
@media (min-width: 1024px) {
  .hero_container {
    width: 100vw;
    min-height: calc(100vh - var(--header));
    position: relative;
  }

  .section-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    height: 100vh;
    padding: 0;
  }

  .hero-details {
    order: 2;
    /* padding: 0 40px; */
    margin-top: 0;
    position: relative;
    z-index: 2;
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    justify-content: center;
  }

  .text1,
  .text2 {
    max-width: 320px;
    text-align: left;
  }

  .text1 h1 {
    font-size: 2.5rem;
  }

  .text2 h3 {
    font-size: 1.5rem;
  }

  .hero-img {
    order: 1;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .hero-img img {
    max-width: 500px;
    width: auto;
    max-height: 600px;
    margin-left: 0;
    margin-bottom: 0;
  }
}
</style>
