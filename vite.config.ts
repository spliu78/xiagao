import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Markdown from 'vite-plugin-md';
import visualizer from "rollup-plugin-visualizer";

const plugins = [];
if (process.env.npm_config_analysis) {
    console.log('Analysis On!');
    // 打包依赖展示
    plugins.push(
        visualizer({
            filename: './.visualizer/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true,
        })
    );
}

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3090
    },
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
        }),
        ...plugins,
    ]
});
