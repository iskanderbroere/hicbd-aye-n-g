import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'ING - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FF6200' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vuetify', '~/plugins/icons', '~/plugins/apollo'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  build: {
    transpile: [/^vue-awesome/, /^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    presets ({ isServer }) {
      const targets = isServer ? { node: '10' } : { ie: '11' }
      return [[require.resolve('@nuxt/babel-preset-app'), { targets }]]
    }
  },
  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles
          .filter(f => f.asType === 'script' || 'style')
          .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  },
  env: {
    backendUrl: process.env.BACKEND_URL || 'http://localhost:4000'
  }
}
