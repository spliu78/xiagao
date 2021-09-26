import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Components({
            resolvers: [
                AntDesignVueResolver(),
            ]
        }),
        Markdown({
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true,
            },
            wrapperClasses: 'markdown-body'
        })
    ]
})
