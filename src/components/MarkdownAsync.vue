<template>
    <MarkerAsync />
</template>
<script lang="ts" setup>
import BaseSpin from './BaseSpin.vue';
import { defineAsyncComponent } from 'vue';
interface MarkerProps {
    md: Promise<any>
}
const props = defineProps<MarkerProps>();
const MarkerAsync = defineAsyncComponent({
    loader: () => props.md,
    loadingComponent: BaseSpin
});
</script>