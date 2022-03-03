<template>
    <div>
        <a-avatar :size="64" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></a-avatar>
        <p>微博文字{{ props.title }}</p>
        <WeiboSlotCarousel v-if="props.img && props.img?.length > 1" :imgs="props.img" />
    </div>
</template>
<script lang="ts" setup>
import WeiboSlotCarousel from './WeiboSlotCarousel.vue';
interface WeiboSlot {
    title: string,
    img?: Array<string>
}
const props = defineProps<WeiboSlot>();
</script>
<style lang="scss" scoped>
</style>