const I18n = require('./config/i18n')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxt i18n test',
    htmlAttrs: {
      dir: 'rtl'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt i18n test'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },

  /*
   ** Global CSS
   */
  css: [
    'uikit/dist/css/uikit-rtl.css',
    '@/assets/rtl.css',
  ],

  router: {
    linkExactActiveClass: 'uk-active'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '@/plugins/uikit.js',
    ssr: false
  },
  {
    src: '@/plugins/googleMaps.js',
    ssr: false
  },
    '@/plugins/filters.js',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // i18n
    ['nuxt-i18n', I18n]
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }

}
