// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [vue(), react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'trackRouter',
            fileName: (format) => `track-router.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'react', 'react-dom'], // 排除 Vue 和 React，避免重复打包
            output: {
                globals: {
                    vue: 'Vue',
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
