// @ts-nocheck
import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// Auto Import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// rollup
import { visualizer } from "rollup-plugin-visualizer";

// tailwind
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      vueDevTools(),
      tailwindcss(),
      VueRouter({
        dts: '.autoimports/typed-router.d.ts'
      }),
      vue(),
      AutoImport({
        dts: '.autoimports/auto-imports.d.ts',
        vueTemplate: true,
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dirs: [
          './src/stores/**',
          './src/composables'
        ],
        imports: [
          'vue',
          VueRouterAutoImports,
          '@vueuse/core',
        ],
      }),
      Components({
        dts: '.autoimports/components.d.ts',
        dirs: ['./src/components'],
        directoryAsNamespace: true,
      }),
      visualizer({
        filename: 'stats.nogit.html'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
          importers: [
            // ...
          ],
        },
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vueuse: [
              '@vueuse/core',
              '@vueuse/integrations/useAxios',
              '@vueuse/integrations/useSortable',
              '@vueuse/integrations/useChangeCase'
            ],
            vue: ['vue', 'vue-router', 'pinia'],
            elementPlus: ['element-plus'],
          }
        },
      }
    }
  }
})
