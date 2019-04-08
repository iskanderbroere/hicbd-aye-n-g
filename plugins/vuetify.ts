import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import LRU from 'lru-cache'
import Icon from 'vue-awesome/components/Icon.vue'
import colors from 'vuetify/es5/util/colors'

const isProd = process.env.NODE_ENV !== 'development'

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.accent4,
    secondary: colors.grey.darken4
  },
  options: {
    minifyTheme: function(css) {
      return isProd ? css.replace(/[\s|\r\n|\r|\n]/g, '') : css
    },
    themeCache
  },
  icons: {
    next: {
      component: Icon,
      props: {
        name: 'chevron-right'
      }
    },
    prev: {
      component: Icon,
      props: {
        name: 'chevron-left'
      }
    }
  }
})
