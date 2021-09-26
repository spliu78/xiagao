<script setup lang="ts">
import MainLayout from './components/MainLayout.vue';
</script>

<template>
    <MainLayout></MainLayout>
</template>

<style >
body {
    background: no-repeat center center;
    background-image: url("./assets/background.jpg");
    background-size: cover;
    background-attachment: fixed;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    justify-content: center;
}
</style>
