import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: {
            host: '127.0.0.1',
        },
    },
    plugins: [
        tailwindcss(),
        symfonyPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js",
                dashboard: "./assets/dashboard/app.js"
            },
        }
    },
});
