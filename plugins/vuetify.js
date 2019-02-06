import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import LRU from 'lru-cache'
import Icon from 'vue-awesome/components/Icon'

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})

Vue.use(Vuetify, {
  theme: {
    primary: '#FF6200',
    secondary: '#212121'
  },
  options: {
    minifyTheme: function(css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
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
