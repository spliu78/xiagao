<template>
    <div>
        <WeiboSlot class="weibo-slot" :title="title" :img="img" />
        <WeiboSlot class="weibo-slot" :title="title" :img="img" />
        <WeiboSlot class="weibo-slot" :title="title" :img="img" />
    </div>
</template>
<script lang="ts" setup>
import WeiboSlot from './WeiboSlot.vue';
const title = "title here title here title here title here title here title here title here title here "
const img = [
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract01.jpg",
    "http://tva1.sinaimg.cn/mw600/00745YaMgy1gxoowebdggj30hs0qo75w.jpg",
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract03.jpg",
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract01.jpg",
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract02.jpg",
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract01.jpg",
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract01.jpg",
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract01.jpg",
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/abstract03.jpg",
];
</script>
<style lang="scss" scoped>
.weibo-slot {
    margin: 20px 0;
}
</style>