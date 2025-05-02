<script>
import logo from '../assets/img/logo.svg';
    export default {
        name: 'Navbar',
        data() {
            return {
                logo: logo
            };
        }
    };
</script>
<template>
    <header>
        <nav class="navbar section-content">
            <a href="#" class="nav-logo">
                <img :src="logo" alt="">
            </a>
        </nav>
    </header>
</template>
<style scoped>
.header{
    background-color: #f8f9fa;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 100;
    top:0;
    left:0;
}
.navbar{
    padding:5px 24px
}
.nav-logo img{
    width: 90px;
    height: auto;
    display: block;
    margin: .5rem auto;
}
</style>