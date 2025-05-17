<script>
import lucia from '../assets/img/lucia.webp';
import cata from '../assets/img/cata_rivero.webp';
import julia from '../assets/img/julia_rey.webp';
import martina from '../assets/img/martina.webp';
import Card from './CardPhone.vue';

export default {
  name: 'CardGrid',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: lucia,
          link: "https://teinvite.ar/invitacion-julia_rey/#/",
          alt: "Invitación de Lucía"
        },
        {
          id: 2,
          image: cata,
          link: "https://teinvite.ar/invitacion_cata_rivero/#/",
          alt: "Invitación de Cata"
        },
        {
          id: 3,
          image: julia,
          link: "https://teinvite.ar/invitacion-julia_rey/#/",
          alt: "Invitación de Julia"
        },
        {
          id: 2,
          image: martina,
          link: "https://teinvite.ar/modelo/invitacion_martina/#/",
          alt: "Invitación de Martina"
        }
      ]
    };
  },
  computed: {
    visibleCards() {
      return this.showAll ? this.cards : this.cards.slice(0, 3);
    }
  }

}
</script>
<template>
  <div class="container_grid">
    <Card v-for="card in cards" :key="card.id" :image="card.image" :link="card.link" :alt="card.alt" />
    <!-- <button v-if="!showAll" @click="showAll = true" class="btn btn-primary ver-mas">
      Ver más
    </button> -->
  </div>
</template>
<style>
.container_grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  /* Por defecto: 1 columna */
  gap: 1rem;
  justify-items: center;
  padding-bottom: 2rem;
}

/* .ver-mas {
  margin-top: 1rem;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: var(--color_primary);
  border: 1px solid var(--color_primary);
  z-index: 1;
  position: relative;
  height: 48px;
}

.ver-mas:hover {
  color: var(--color_primary);
  background-color: #fff;
  border: 1px solid var(--color_primary);
} */

@media (min-width: 768px) and (max-width: 1023px) {
  .container_grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  
  .container_grid {
    width:80%;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>