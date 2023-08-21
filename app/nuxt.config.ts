import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
   // ssr: true,
   srcDir: 'src/',
   css: ['~/assets/css/main.css'],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   plugins: [{ src: '~/plugins/fontawesome.ts' }],
   modules: ['@nuxtjs/i18n', 'nuxt-delay-hydration', "@nuxtjs/sanity"],
   sanity: {
      projectId: "20m2sobp",
      apiVersion: '2021-03-25', 
      dataset: "production",
   },
   i18n: {
      fallbackLocale: { default: ['fi', 'en'] },
      detectBrowserLanguage: {
         useCookie: true,
         cookieKey: 'i18n_redirected',
         redirectOn: 'root',
      },
      locales: [
         {
            code: 'fi',
            iso: 'fi-FI',
            file: 'fi.json',
         },
         {
            code: 'en',
            iso: 'en-US',
            file: 'en.json',
         },
      ],
      lazy: false,
      langDir: 'lang',
      defaultLocale: 'fi',
   },
   runtimeConfig: {
      // Config within public will be also exposed to the client
      public: {
         API_URL: process.env.NUXT_API_URL || 'http://localhost:3333',
      },
   },
});
