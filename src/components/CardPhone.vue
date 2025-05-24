<script>
export default {
    name: 'CardPhone',
    props: {
        image: {
            type: String, // o String dependiendo de cómo importes las imágenes
            required: true
        },
        link: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        }
    }

}
</script>
<template>
    <div class="card" data-aos="fade-up-right">
        <img :src="image" class="mobile" :alt="alt">
        <div class="hover-text">
            <a :href="link" type="button" class="btn" title="Open" target="_blank">
                <i class="fa-solid fa-arrow-up-right-from-square icon"></i>
            </a>
        </div>
    </div>
</template>
<style>
/* En CardPhone.vue */
.card {
    width: 100%; /* Ocupa todo el espacio del grid */
    max-width: 300px; /* Máximo ancho */
    height: auto; /* Altura automática */
    margin: 0 auto; /* Centrado si es necesario */
}

.mobile {
    width: 100%; /* La imagen ocupa todo el espacio de la card */
    height: auto;
    display: block; /* Elimina espacios fantasma */
}
</style>