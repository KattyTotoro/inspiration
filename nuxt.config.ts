// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    baseURL: '/inspiration/'
  },

  modules: ['@nuxt/image', '@pinia/nuxt', 'nuxt-tiptap-editor']
})