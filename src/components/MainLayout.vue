<template>
    <a-layout class="layout">
        <a-layout-header style="display: flex; align-items: flex-end;">
            <div class="logo">虾糕</div>
            <div class="slogan">
                <span>虾糕虾丸好好吃</span>
            </div>
            <a-menu
                theme="dark"
                mode="horizontal"
                v-model:selectedKeys="selectedKeys"
                :style="{ lineHeight: '64px' }"
            ></a-menu>
        </a-layout-header>
        <a-layout-content
            style="padding: 0 50px; margin:16px 0; min-height: 800px;"
            class="content"
        >
            <Spin v-if="!docs.length" />
            <Markdown v-for="item in docs" :url="item"></Markdown>
        </a-layout-content>
        <a-layout-footer
            class="footer"
            style="text-align: center"
        >Xiagao ©{{ moment().format('yyyy') }}</a-layout-footer>
    </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Markdown from './Markdown.vue';
import Spin from './Spin.vue';
import moment from 'moment';
const selectedKeys = ref<string[]>(['1']);
const docs = ref<string[]>([]);

(async () => {
    // get docs
    const { articles } = (await fetch('/markdown/article.json')
        .then(res => res.json())) as { articles: Array<article> };
    docs.value = articles.map(({ url }: { url: string }) => url);
    // console.log(docs.value);
})();

</script>

<style>
.ant-layout.layout {
    max-width: 960px;
    background: hsla(0, 0%, 100%, 0.3);
}
.ant-layout-footer.footer {
    background: hsla(0, 0%, 100%, 0.6);
}
.logo {
    padding: 0 16px;
    background: rgba(255, 255, 255, 0.3);
    font-size: 24px;
    color: aliceblue;
}
.slogan {
    color: aliceblue;
    font-size: 14px;
    padding: 0 8px;
    line-height: 24px;
    letter-spacing: 5px;
}
</style>
