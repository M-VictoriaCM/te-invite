<script setup>
import FooterVue from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template>
    <div class="dashboard">
        <Navbar/>
        <div class="dashboard-container">
            <main class="main-content">
                <router-view/>
            </main>
        </div>
        <FooterVue/>
    </div>
</template>
<style>
.dashboard{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
}
.main-content{
     width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin-top: 4rem; /* compensamos el navbar fijo */
    
}
</style>