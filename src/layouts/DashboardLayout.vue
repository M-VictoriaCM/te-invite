<script setup>
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
    </div>
</template>
<style>
.main-content{
    width:100%;
    height:calc(100vh - 3.8rem);
    overflow-x: hidden;
}
</style>