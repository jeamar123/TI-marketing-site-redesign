const development = process.env.NODE_ENV !== 'production';
const config = require('./static/config');
const faviconPath = config.currentEvent === 'exploit'
  ? '/favicon.ico'
  : '/favicon.png';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'marketing-site-redesign',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: faviconPath },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap' }
    ],
    script: [
      { hid: 'stripe', src: 'https://js.stripe.com/v3/', defer: true }
    ]
  },

  loading: {
    color: '#FF0054',
    height: '2px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/index.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vueСarousel.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: development
      ? 'https://dev.exploitcon.com/api'
      : 'https://exploitcon.com/api',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'postcss-normalize': {},
      },
    },
  },
}
