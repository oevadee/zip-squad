import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        reactSvgPlugin({
            defaultExport: 'component',
        }),
    ],
    resolve: {
        alias: {
            apiTypes: path.resolve(__dirname, '../backend/schema.gql'),
            components: path.resolve(__dirname, './src/components'),
            api: path.resolve(__dirname, './src/api'),
            assets: path.resolve(__dirname, './src/assets'),
            constants: path.resolve(__dirname, './src/constants'),
            helpers: path.resolve(__dirname, './src/helpers'),
            layouts: path.resolve(__dirname, './src/layouts'),
            hooks: path.resolve(__dirname, './src/hooks'),
            locales: path.resolve(__dirname, './src/locales'),
            styles: path.resolve(__dirname, './src/styles'),
            utils: path.resolve(__dirname, './src/utils'),
            pages: path.resolve(__dirname, './src/pages'),
            router: path.resolve(__dirname, './src/router'),
            views: path.resolve(__dirname, './src/views'),
            providers: path.resolve(__dirname, './src/providers'),
        },
    },
    server: {
        port: 8000,
    },
});
