<template>
  <main>
    <h1>{{ heading }}</h1>
    <lazy-hydrate when-idle>
      <i-n-g-carousel :carouselItems="brandBars" />
    </lazy-hydrate>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import INGCarousel from '~/components/INGCarousel'
import gql from 'graphql-tag'

export default {
  components: {
    LazyHydrate,
    INGCarousel
  },
  apollo: {
    brandBars: {
      query: gql`
        query brandBars {
          brandBars {
            heading
            image {
              altText
              url
            }
          }
        }
      `
    },
    heading: {
      query: gql`
        query heading {
          heading
        }
      `
    }
  },
  head() {
    return {
      title: this.heading,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.heading || ''
        }
      ]
    }
  }
}
</script>
