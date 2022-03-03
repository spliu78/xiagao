<template>
    <div class="carousel">
        <a-carousel autoplay dots-class="slick-dots slick-thumb">
            <!-- <template #customPaging="slotProps.i"> -->
            <template #customPaging="{ i }">
                <a>
                    <img :src="getImgUrl(i)" />
                </a>
            </template>
            <div v-for="(item, index) in props.imgs" :key="index">
                <a-image class="image" :src="item" />
            </div>
        </a-carousel>
    </div>
</template>
<script lang="ts" setup>
interface WeiboSlotCarousel {
    imgs: Array<string>
}
const props = defineProps<WeiboSlotCarousel>();
const getImgUrl = (i: number) => {
    return props.imgs[i];
};
</script>
<style scoped>
.ant-carousel :deep(.slick-dots) {
    position: relative;
    height: auto;
}
.ant-carousel :deep(.slick-track) {
    display: flex;
    align-items: center;
}
.ant-carousel :deep(.slick-slide) {
    float: none;
}
.ant-carousel :deep(.slick-slide .ant-image) {
    border: 5px solid #ddd;
    display: block;
    margin: auto;
    max-width: 80%;
}
.ant-carousel :deep(.slick-arrow) {
    display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
    bottom: 0px;
}
.ant-carousel :deep(.slick-thumb li) {
    width: 45px;
    height: 45px;
}
.ant-carousel :deep(.slick-thumb li img) {
    width: 100%;
    height: 100%;
    filter: grayscale(50%);
    object-fit: cover;
}
.ant-carousel :deep(.slick-thumb li.slick-active img) {
    filter: grayscale(0%);
}
</style>
