const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'jquery.mmenu/dist/jquery.mmenu.css', lang: 'css' },
    {
      src:
        'jquery.mmenu/dist/extensions/fullscreen/jquery.mmenu.fullscreen.css',
      lang: 'css'
    },
    {
      src:
        'jquery.mmenu/dist/extensions/positioning/jquery.mmenu.positioning.css',
      lang: 'css'
    },
    {
      src:
        'jquery.mmenu/dist/extensions/borderstyle/jquery.mmenu.borderstyle.css',
      lang: 'css'
    },
    {
      src: 'jquery.mmenu/dist/addons/navbars/jquery.mmenu.navbars.css',
      lang: 'css'
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/components', { src: '~/plugins/mmenu.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    //'@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    [
      'storyblok-nuxt',
      { accessToken: '1DoNYCD5Y2u2LXQbGYDbFwtt', cacheProvider: 'memory' }
    ],
    'nuxt-buefy'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  router: {
    middleware: 'languageDetection'
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
        // ...etc.
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
