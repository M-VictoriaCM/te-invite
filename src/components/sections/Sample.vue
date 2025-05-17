<script>
import linea2 from '../../assets/img/lineas.svg';
import CardGrid from '../CardGrid.vue';

export default {
    name: "Sample",
    components: {
        CardGrid
    },
    data() {
        return {
            title:'🎀 Diseños únicos para momentos únicos',
            subtitle:'Cada tarjeta que ves acá fue creada especialmente para una quinceañera. Vos también podés tener la tuya, 100% personalizada',
            linea2: linea2,
        }
    }
}
</script>
<template>
    <div class="sample_container">
        <img :src="linea2" class="lineas-right" alt="Patrón de líneas">
        <div class="sample_content">
            <div class="sample_details">
                <h1>{{ title }}</h1>
                <p>{{ subtitle }}</p>
            </div>
            <CardGrid/>
        </div>
    </div>
</template>
<style>
.sample_container {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
}

.sample_content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.sample_details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 20px;
}

.sample_details h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
}

.sample_details p {
    width: 300px;
}
.lineas-right{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0; 
    opacity: 0.6;
    transform: rotate(180deg);
}
@media (min-width: 768px) and (max-width: 1023px) {
    .sample_content {
        width: 100%;
        height: 100%;
    }
    .sample_details p {
        width: 600px;
        font-size: 1.2rem;
    }
}
@media (min-width: 1024px) {
    .sample_details h1 {
        text-align: center;
        font-size: 2.2rem;
    }
    .sample_details p {
        width: 600px;
    }
    .lineas-right{
        width: 100%;
        height: 100%;
    }
}

</style>