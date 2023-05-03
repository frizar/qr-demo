// https://nuxt.com/docs/api/configuration/nuxt-config

const baseURL = '/qr-demo/';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appURL: process.env.APP_URL,
      appProtocol: process.env.APP_PROTOCOL,
    },
  },
  app: {
    baseURL
  },
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/': { redirect: `${baseURL}memory/taras-shevchenko-6e758b11` },
  },
});
