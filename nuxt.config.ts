// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
    '@nuxt/devtools',
    '@nuxt/test-utils/module',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui'
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-...',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-...',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
          
  pinia: {
    storesDirs: ['./stores/**'],
  },

  vite: {
    optimizeDeps: {
      include: ['vue-router']
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: ['~/plugins/fontawesome.js'],

  imports: {
    dirs: ['stores']
  },

  compatibilityDate: '2024-10-21'
})