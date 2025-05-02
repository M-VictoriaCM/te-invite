<script>
import mockup1 from '../assets/img/0827_smartphone_on_hand_with_instagram_display_mockup 1.png';
export default {
  name: "Home",
  data() {
    return {
      subtitle: "Sumate a la nueva forma de invitar y sorprendé a tus familiares y amigos.",
      mockup1:mockup1
    }
  }
}
</script>
<template>
  <div class="hero_container">
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
        <img :src="mockup1" alt="mockup1"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero_container {
  width: 100%;
  height: 100vh;
  background-color: #f7dd55;
  overflow: hidden;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
}

.hero-img img {
  width: 100%; 
  height: auto;
  display: block;
  margin: 0 auto;
}

.hero-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top:1rem;
}
.text1, .text2{
  width: 250px;
  border:1px solid red;
}
.text1 h1{
  font-size: 1.5rem;
  font-weight: bold;
}
.text2 h3{
  font-size: 1rem;
  font-weight: normal;
}
.acent{
  color:white;
  background-color: var(--color_acent);
}
.btn-custom{
  background-color: black;
  border:1px solid black;
  padding: 10px 20px;
}
.btn-custom:hover{
  color:#000;
  background-color: #fff;
  border:1px solid #fff; 
}
/* Versión para desktop */
@media (min-width: 768px) {
  .hero_container{
    width: 100%;
    height:100vh;

  }
  .section-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    gap: 0;
  }
  
  .hero-details {
    order: 2;
    text-align: left;
    flex: 1;
    border:1px solid red;
}
  .text1, .text2{
  width: 350px;
  }
.text1 h1{
  font-size: 2.5rem;
  font-weight: bold;
  /* margin-bottom: 2rem; */
}
.text2 h3{
  font-size: 1.5rem;
  font-weight: normal;
}
  .hero-img {
    order: 1;
    flex: 1;
    border: 1px solid red;
  }
  
  .hero-img img {
    margin: 0;
    max-width: 100%;
    height: 100%;
  }
}
</style>
