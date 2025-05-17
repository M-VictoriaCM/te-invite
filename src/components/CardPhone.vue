<script>
export default {
    name: 'CardPhone',
    props: {
        image: {
            type: Object, // o String dependiendo de cómo importes las imágenes
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
.card {
    margin: 30px 0;
    width: calc(40% - 100px);
    position: relative;
    background: none;
    border: none;
}

.card {
    width: 280px;
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

.hover-text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.icon {
    color: #fff;
    font-size: 2rem;
}

.card:hover .hover-text {
    opacity: 1;
}

.btn {
    background: rgba(19, 1, 31, 0.3);
}

.btn:hover {
    background: rgba(19, 1, 31, 0.8);
    color: white;
}
@media (min-width: 768px) and (max-width: 991px) {
    .card {
        margin: 20px;
    }
}

@media (min-width: 1024px) {
    .card {
        margin: 10px;
        width: 200px;
        height: auto;
    }
}
</style>