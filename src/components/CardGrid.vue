<script>
import lucia from '../assets/img/lucia.webp';
import cata from '../assets/img/cata_rivero.webp';
import julia from '../assets/img/julia_rey.webp';
import martina from '../assets/img/martina.webp';

export default {
  name: 'CardGrid',
  data() {
    return {
      cards: [
        {
          image:lucia,
          title: 'Lucia',
          link:"https://teinvite.ar/modelo/invitacion-lucia/#/"
        },
        {
          image: cata,
          title: 'Cata',
          link: "https://teinvite.ar/modelo/invitacion-cata/#/"
        },
        {
          image: julia,
          title: 'Julia',
          link: "https://teinvite.ar/modelo/invitacion-julia/#/"
        },
        {
          image: martina,
          title: 'Martina',
          link: "https://teinvite.ar/modelo/invitacion-martina/#/"
        }
      ]
    };
  }
}
</script>

<template>
  <div class="contenedor">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card">
      <img :src="card.image" :alt="'Preview ' + card.title"/>
      <div class="hover-text">
        <a href="card.link" type="button" target="_blank" class="btn" :title="'Open ' + card.title">
           <i class="fa-solid fa-arrow-up-right-from-square icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 0;
  }
  
  .card {
      margin: 30px 0;
      width: calc(40% - 100px);
      position: relative;
      background: none;
      border:none;
  }
  
  .card {
      width: 250px;
      height: auto;
  }
  
  .card>.mobile {
      width: 100%;
      height: auto;
      object-fit: cover;
  }
  
  .card:hover {
      transform: scale(1.1);
  }
  
  .hover-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      opacity: 0;
      transition: .5s;
      padding-top: 50%;
      background-image: linear-gradient(to top, rgba(22, 0, 34, 0.8), rgba(255, 255, 255, .3));
  }
  .hover-text{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
  }
  .icon{
      color: #fff;
      font-size: 2rem;
  }
  .card:hover .hover-text {
      opacity: 1;
  }
  .btn{
      background: rgba(19, 1, 31, 0.3);
  }
  .btn:hover{
      background: rgba(19, 1, 31, 0.8);
      color: white;
  }
</style>