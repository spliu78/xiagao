<script setup lang="ts">
import MainLayout from './components/MainLayout.vue';
import 'ant-design-vue/dist/antd.css';
</script>

<template>
    <MainLayout></MainLayout>
</template>

<style>
body {
    background: no-repeat center center
        url("https://wx1.sinaimg.cn/large/002mJpQTly1gurokkhkgoj62tc240kjm02.jpg");
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
