import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { ConfigEnv, UserConfigExport } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/

export default function ({ command }: ConfigEnv): UserConfigExport {
  return {
    build: {
      sourcemap: true,
    },
    server: {
      host: '0.0.0.0',
      proxy: { // Add your proxy endpoints here
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      eslintPlugin({
        fix: true
      }),
    ],
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    }
  };
}
