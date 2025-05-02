<script>
import mockup1 from '../assets/img/0827_smartphone_on_hand_with_instagram_display_mockup 1.png';
import linea from '../assets/img/lineas.svg';
import textura from '../assets/img/textura.png';

export default {
  name: "Home",
  data() {
    return {
      subtitle: "Sumate a la nueva forma de invitar y sorprendé a tus familiares y amigos.",
      mockup1: mockup1,
      linea: linea,
      textura: textura
    }
  }
}
</script>
<template>
  <div class="hero_container">
    <img :src="textura" class="textura-img" alt="">
    <img :src="linea" class="lineas-img" alt="Patrón de líneas">
    <div class="section-content">
      <div class="hero-details">
        <div class="text1">
          <h1><span class="acent">La celebración</span> empieza acá, tus 15, tu boda o tu cumple!" </h1>
        </div>
        <div class="text2">
          <h3>{{ subtitle }}</h3>
        </div>
        <button class="btn btn-primary btn-custom">Contactar</button>
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
  min-height: calc(100% - var(--header_mobile));
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

.acent {
  color: #fff;
  background-color: var(--color_acent)
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
    overflow: hidden;
  }

  .section-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px; /* Más espacio interno */
    position: relative;
  }

  .hero-details {
    width: 100%;
    max-width: 500px; /* Ancho máximo para mejor legibilidad */
    margin: 0 auto; /* Centrado horizontal */
    padding: 20px 0;
  }

  .text1, .text2 {
    max-width: 100%; /* Aprovecha el ancho disponible */
  }

  .text1 h1 {
    font-size: 2.2rem; /* Tamaño intermedio entre móvil y desktop */
  }

  .hero-img {
    height: auto;
    margin-top: auto; /* Empuja la imagen hacia abajo */
    align-self: flex-start; /* Alinea a la izquierda */
    padding-left: 20px; /* Compensación izquierda */
  }

  .hero-img img {
    width: auto;
    max-width: 400px; /* Tamaño adecuado para tablet */
    height: 60vh; /* Altura proporcional */
    max-height: 500px;
    margin-left: -0px; /* Compensa el padding */
    object-fit: contain;
    object-position: left bottom;
  }

  /* Ajustes para las líneas/textura de fondo */
  .lineas-img, .textura-img {
    opacity: 0.3; /* Más transparente para mejor legibilidad */
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
