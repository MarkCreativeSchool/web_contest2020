
const routerBase = process.env.DEPLOY_ENV === 'PRODUCTION' ? {
  router: {
    base: '/tqj23/230005R/',
    extendRoutes(routes, resolve) {
      routes.push({
        path     : '/index.html',
        alias    : '/',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  hooks: {
    generate: {
      async extendRoutes(routes) {
        const filtered = routes.filter(page => !/\.html$/.test(page.route))
        routes.splice(0, routes.length, ...filtered)
      }
    }
  }
} : {}
export default {
  mode: 'universal',
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      "@/assets/css/event-modal.css",
      "@/assets/css/event-sub-modal.css",
      "@/assets/css/style.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
