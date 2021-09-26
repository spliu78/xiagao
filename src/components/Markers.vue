<template>
    <Marker />
</template>
<script lang="ts" setup>
import Spin from './Spin.vue';
import { defineAsyncComponent } from 'vue';
interface MarkerProps {
    md: Promise<any>
}
const props = defineProps<MarkerProps>();
const Marker = defineAsyncComponent({
    loader: () => props.md,
    loadingComponent: Spin
});
</script>