import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Montserrat',
            styles: 'wght@100;200;300;400;500;600;700;800;900',
          },
          {
            name: 'IBM Plex Mono',
            styles: 'wght@100;200;300;400;500;600;700;800;900',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '~/assets/styles/variables';
          @import '~/assets/styles/mixins';
          @import '~/assets/styles/typography';
        `,
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})
