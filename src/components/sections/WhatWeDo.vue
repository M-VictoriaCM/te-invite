<script>
import mockup2 from '../../assets/img/mockup2.png';
import linea2 from '../../assets/img/lineas2.svg';

export default{
    name: "WhatWeDo",
    data() {
        return {
            text: "Sabemos que los momentos únicos merecen invitaciones especiales. Por eso, creamos invitaciones digitales e interactivas, diseñadas a medida para cada ocasión. Con ellas, tus invitados tendrán toda la información que necesitan para ser parte de ese evento tan especial que se acerca",
            mockup2:mockup2,
            linea2:linea2
        }
    }

}
</script>
<template>
    <div class="whatwedo_container">
        <img :src="linea2"  class="lineas2-img" alt="">
        <div class="whatwedo_content">            
            <div class="details">
                <h1>¿Qúe hacemos?</h1>
                <h4>{{ text }}</h4>
            </div>
            <div class="whatwedo_img">
                <div class="circulos"></div>
                    <img :src="mockup2" class="mockup2" alt="mockup2"/>
            </div>
        </div>
    </div>
</template>
<style>
.whatwedo_container {
  width: 100%;
  height:100vh;
  position:relative;
  overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.lineas2-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.2;
}
.whatwedo_content{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    z-index: 2;
}
.details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 1.5rem;
}
.details h1{
    font-weight: 900;
}
.details h4{
    width: 280px;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: left;
}
.whatwedo_img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.whatwedo_img img {
  width: 300px;
  position: relative;
  z-index: 2; 
}

.circulos {
  position: absolute;
  width: 400px;
  height: 300px;
  background-image: url('../../assets/img/circulos.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1; /* Detrás de la imagen */
  opacity: 0.8; /* Ajusta según necesites */
}
@media (min-width: 768px) and (max-width: 1023px) {
    .whatwedo_container{
        width:100%;
    }
    .details h4{
        width: 600px;
        font-size: 1.8rem;
    }
    .whatwedo_img img {
        width: 600px;
    }
    
}
@media (min-width: 1024px) {
    .whatwedo_container{
        width:100%;
        height:100vh;
    }
    .whatwedo_content{
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: center;
    }
    .whatwedo_img img {
        width: 500px;
        height: auto;
    }
    .circulos{
        width: 500px;
        height:450px;
    }

}
</style>