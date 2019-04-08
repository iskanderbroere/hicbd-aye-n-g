import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
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
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-env', {
      keys: ['BACKEND_URL', 'GOOGLE_CLOUD_PROJECT']
    }]
  ],
  build: {
    parallel: true,
    transpile: [/^vue-awesome/, /^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    babel: {
      presets ({ isServer }: { isServer: boolean }) {
        const targets = isServer ? { node: '10' } : { ie: '11' }
        return [[require.resolve('@nuxt/babel-preset-app'), { targets }]]
      }
    }
  },
  render: {
    http2: {
      push: true,
      pushAssets: (_: unknown, __: unknown, publicPath: string, preloadFiles: File[]) =>
        preloadFiles
          .filter((f: File) => f.asType === 'script' || 'style')
          .map((f: File) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  },
  vue: {
    config: {
      performance: true,
      devtools: true,
      silent: false
    }
  }
}
interface File {
  asType: string
  file: string
}
export default config
