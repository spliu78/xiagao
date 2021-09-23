<template>
    <article>
        <Spin
            :style="{ background: '#fff', padding: '24px', minHeight: '280px', margin: '40px 0' }"
            v-if="!html.length"
        />
        <div
            :style="{ background: '#fff', padding: '24px', minHeight: '280px', margin: '40px 0' }"
            class="markdown-content"
            v-if="html.length"
            v-html="html"
        ></div>
    </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import showdown from 'showdown';
import Spin from "./Spin.vue";

interface MarkdownProps {
    url: string;
}
const props = defineProps<MarkdownProps>();
const html = ref<string>('');

(async () => {
    const converter = new showdown.Converter();
    const text = await fetch(props.url).then(res => res.text());
    html.value = converter.makeHtml(text);
})();

</script>

<style lang="scss">
.markdown-content {
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