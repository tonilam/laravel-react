import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/Login.jsx', 'resources/js/Main.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
