<script>
import mockupImage from '../../assets/img/mobile-portada.webp';

export default {
  name: 'FrameSection',
  data() {
    return {
      mockupImage,
      showCartel: true,
      circle:'Presioná aquí para vivir la experiencia',
      frase1:'Mostrá tu estilo desde el primer clic.',
      frase2:'Cada tarjeta es 100% personalizada, porque ninguna historia se cuenta igual dos veces.'
    };
  }
}
</script>

<template>
  <div class="container_frame">

    <div class="content_frame">
      <div class="content_detalle_frame">
        <h1 >
          <span class="container_text">
            <span class="frase1">{{ frase1 }}</span>
          </span><br/>
          <span class="frase2">{{ frase2 }}</span>
        </h1>        
      </div>

      <div class="mockup_">
        <div class="mockup_frame">
          <iframe src="https://teinvite.ar/invitacion-julia_rey/" class="iframe_inside_mockup"
            style="border: none;">
          </iframe>
            <div v-if="showCartel" class="iframe_overlay"></div>
        </div>
      <div v-if="showCartel" class="container_cartel">
        <div class="circle pulse" @click="showCartel = false">
          <p> {{ circle }}</p>
        </div>
      </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

.container_frame {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #FFEA7A;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_frame { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
}
.content_detalle_frame {
  margin: 1rem;
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.content_detalle_frame h1{
  width:90%;
  text-align: center;
}
.container_text{
  background-color: var(--color_acent); 
  text-align: center;
  font-size: 1.9rem;
  font-weight: bold;
  line-height: 1.3;
  
}
.frase1{
  color:white;
}
.frase2{
  color:var(--font-primary);
  font-size: 1.5rem;

}
.mockup_ {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.mockup_frame {
  width: 290px; 
  height: 540px;
  position: relative;
  background-image: url('../../assets/img/white_blank_smartphone_mockup.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.iframe_inside_mockup {
  position: absolute;
  top: 8px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 250px;
  height: 520px;
  border: none;
  border-radius: 26px;
}

.container_cartel {
  width: 130px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
}

.circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: violet;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle p{
  color:white;
  font-size: .8rem;
  text-align: center;
  margin-top:1rem;
  transform: rotate(-10deg);
}

@keyframes pulse { 
  0% { 
    transform: scale(1); 
    opacity: 1; 
  } 
    50% { 
      transform: scale(1.1); 
      opacity: 0.7; 
    } 
    100% { 
      transform: scale(1); opacity: 1; 
    } 
  } 
  .pulse { 
    animation: pulse 1.5s infinite; 
  } 
  .iframe_overlay { 
    position: absolute; 
    top: 8px; 
    left: 0; 
    right: 0; 
    margin: 0 auto; 
    width: 250px; 
    height: 520px; 
    background-color: rgba(0, 0, 0, 0.4); 
    border-radius: 26px; 
    z-index: 1; 
    pointer-events: auto; 
  } 
@media (min-width: 768px) and (max-width: 1023px) {
.container_text{
    font-size: 2.5rem;
  
  }
  .frase2{
    font-size: 2rem;
  }
}
@media(min-width:1024px) {
  .content_frame {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .content_detalle_frame {
    width: 50%;
  }

  .mockup_ {
    width: 50%;
  }
  .content_detalle_frame h1{
    width:100%;
    text-align: right;
  }
  .container_text{
    font-size: 2.5rem;
  
  }
  .frase2{
    font-size: 2rem;
  }
}
</style>
