import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
  plugins: [
    preact(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          lcpImage: '/src/assets/images/tatum.jpeg',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
		    api: 'modern',
        additionalData: `
          @use "@styles/animations.scss" as *;
          @use "@styles/variables.scss" as *;
          @use "@styles/mixins.scss" as *;
        `,  
      },
    },
  },
});
