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
        <a-row>
            <a-col
                :xs="{ span: 20, offset: 2 }"
                :sm="{ span: 16, offset: 4 }"
                :lg="{ span: 12, offset: 6 }"
                style="background: hsla(0, 0%, 100%, 0.3); padding: 0 5%;"
            >
                <MarkdownAsync class="cell" :md="top_markdown" />
                <TheWeibo class="cell" />
            </a-col>
        </a-row>
        <a-layout-footer class="footer" style="text-align: center">
            Xiagao ©{{ dateFormat('yyyy', new Date()) }}
            <a
                target="_blank"
                href="https://beian.miit.gov.cn/"
                style="color: rgba(0, 0, 0, 0.85);display: block;"
            >备案号：京ICP备2021030795号-1</a>
        </a-layout-footer>
    </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MarkdownAsync from './MarkdownAsync.vue';
import TheWeibo from './TheWeibo.vue';
import { dateFormat } from '../util';

const selectedKeys = ref<string[]>(['1']);
const top_markdown = import('../markdown/HeadFirst.md');

</script>

<style lang="scss">
.ant-layout.layout {
    width: 100%;
    background: none;
    // background: hsla(0, 0%, 100%, 0.3);
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
.cell {
    background-color: #fff;
    padding: 24px;
    margin: 40px 0;
}
.markdown-body {
    text-align: left;

    @media print {
        *,
        *:before,
        *:after {
            background: transparent !important;
            color: #000 !important;
            box-shadow: none !important;
            text-shadow: none !important;
        }

        a,
        a:visited {
            text-decoration: underline;
        }

        a[href]:after {
            content: " (" attr(href) ")";
        }

        abbr[title]:after {
            content: " (" attr(title) ")";
        }

        a[href^="#"]:after,
        a[href^="javascript:"]:after {
            content: "";
        }

        pre,
        blockquote {
            border: 1px solid #999;
            page-break-inside: avoid;
        }

        thead {
            display: table-header-group;
        }

        tr,
        img {
            page-break-inside: avoid;
        }

        img {
            max-width: 100% !important;
        }

        p,
        h2,
        h3 {
            orphans: 3;
            widows: 3;
        }

        h2,
        h3 {
            page-break-after: avoid;
        }
    }

    pre,
    code {
        font-family: Menlo, Monaco, "Courier New", monospace;
    }

    pre {
        padding: 0.5rem;
        line-height: 1.25;
        overflow-x: scroll;
    }

    a,
    a:visited {
        color: #3498db;
    }

    a:hover,
    a:focus,
    a:active {
        color: #2980b9;
    }

    .modest-no-decoration {
        text-decoration: none;
    }

    p,
    .modest-p {
        font-size: 1rem;
        margin-bottom: 1.3rem;
    }

    h1,
    .modest-h1,
    h2,
    .modest-h2,
    h3,
    .modest-h3,
    h4,
    .modest-h4 {
        margin: 1.414rem 0 0.5rem;
        font-weight: inherit;
        line-height: 1.42;
    }

    h1,
    .modest-h1 {
        margin-top: 0;
        font-size: 3.998rem;
    }

    h2,
    .modest-h2 {
        font-size: 2.827rem;
    }

    h3,
    .modest-h3 {
        font-size: 1.999rem;
    }

    h4,
    .modest-h4 {
        font-size: 1.414rem;
    }

    h5,
    .modest-h5 {
        font-size: 1.121rem;
    }

    h6,
    .modest-h6 {
        font-size: 0.88rem;
    }

    small,
    .modest-small {
        font-size: 0.707em;
    }

    /* https://github.com/mrmrs/fluidity */

    img,
    canvas,
    iframe,
    video,
    svg,
    select,
    textarea {
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Arimo, Helvetica, sans-serif;
    }

    h1,
    h2,
    h3 {
        border-bottom: 2px solid #fafafa;
        margin-bottom: 1.15rem;
        padding-bottom: 0.5rem;
    }

    blockquote {
        border-left: 8px solid #fafafa;
        padding: 1rem;
    }

    pre,
    code {
        background-color: #fafafa;
    }
}
</style>
