export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Shared SCSS mixins, available in every component's <style lang="scss"> block.
          additionalData: '@use "~/assets/css/mixins.scss" as *;\n',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      // WPGraphQL endpoint the project list is fetched from at build time.
      // Override with NUXT_PUBLIC_WP_GRAPHQL_ENDPOINT.
      wpGraphqlEndpoint: 'https://wp.devgru.net/graphql',
      // Canonical origin, used to build absolute URLs for canonical/OG/JSON-LD.
      // Override with NUXT_PUBLIC_SITE_URL.
      siteUrl: 'https://d-e-v.group',
    },
  },
  css: [
    '~/assets/css/styles.css',
  ],
  app: {
    head: {
      htmlAttrs: { class: 'fonts-loading', lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icons/computer.svg' },
        // Preload above-the-fold faces so they download at highest priority,
        // before the stylesheet is parsed. crossorigin is required so the
        // preload matches the CORS-anonymous request the @font-face makes.
        {
          rel: 'preload',
          as: 'font',
          type: 'font/otf',
          href: '/fonts/ABCDiatype-Light-Trial.otf',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/otf',
          href: '/fonts/ABCDiatype-Medium-Trial.otf',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/ITCGaramondStd-LtCond.woff2',
          crossorigin: '',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/ITCGaramondStd-BkCond.woff2',
          crossorigin: '',
        },
      ],
      script: [
        {
          // Hold the first paint until the branded fonts are ready, so the
          // page never renders with a fallback font and then swaps. Runs
          // inline in <head> before hydration; a timeout guards slow networks.
          innerHTML:
            `(function(){var d=document,r=function(){var c=d.documentElement.classList;c.remove('fonts-loading');c.add('fonts-loaded');};if(d.fonts&&d.fonts.load){Promise.all([d.fonts.load("300 1em 'ABC Diatype'"),d.fonts.load("500 1em 'ABC Diatype'"),d.fonts.load("300 1em 'ITC Garamond Std'"),d.fonts.load("400 1em 'ITC Garamond Std'")]).then(r).catch(r);setTimeout(r,1200);}else{r();}})();`,
          tagPosition: 'head',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-VXHED8DV26',
          async: true,
        },
        {
          innerHTML:
            `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-VXHED8DV26');`,
          tagPosition: 'head',
        },
      ],
    },
  },
})
