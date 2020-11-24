
const routerBase = process.env.DEPLOY_ENV === 'PRODUCTION' ? {
  router: {
    // base: '/tqj23/230005R/',
    base: "/",
    mode: "hash",
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
  mode: 'spa',
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description',content: "黒人差別を高校生のために解説、紹介してあるサイトです。繊細な問題の為、意見などは控えております。ご了承ください。" },
      { hid: 'og:site_name', property: 'og:site_name', content: '高校生による高校生のため黒人差別' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '高校生による高校生のため黒人差別' },
      { hid: 'og:description', property: 'og:description', content: '黒人差別を高校生のために解説、紹介してあるサイトです。繊細な問題の為、意見などは控えております。ご了承ください。' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
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
      if(!ctx.isDev) {
        // config.output.publicPath = './_nuxt/'
        config.output.publicPath = '/tqj23/230005R/_nuxt/'
      }
    }
  }
}
