<template>
  <main>
    <h1>{{ heading }}</h1>
    <lazy-hydrate when-idle>
      <i-n-g-carousel :carousel-items="brandBars" />
    </lazy-hydrate>
    <v-card
      class="pa-5 orange accent-4 my-4"
      raised
    >
      <v-card-text align-center>
        <h3 class="display-3 white--text">
          {{ callToAction.heading }}
        </h3>
        <span class="white--text headline">
          {{ callToAction.description }}
        </span>
        <v-autocomplete
          v-model="searchTerm"
          solo
          class="my-2"
          append-icon
          hint="Click the icon to edit"
          :items="suggestions"
          @update:searchInput="updateSuggestions"
        />
        <button>hi there!</button>
      </v-card-text>
    </v-card>
  </main>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import INGCarousel from '~/components/INGCarousel'
import gql from 'graphql-tag'

const homePageQuery = gql`
  query homePage {
    brandBars {
      heading
      image {
        altText
        url
      }
    }
    heading
    callToAction {
      heading
      description
    }
  }
`
const searchQuery = gql`
  query searchSuggestions {
    searchSuggestions {
      henk
      name
      type
    }
  }
`

export default {
  components: {
    LazyHydrate,
    INGCarousel
  },
  apollo: {
    homePage: {
      query: homePageQuery,
      manual: true,
      result ({ data: { brandBars, heading, callToAction } }) {
        this.brandBars = brandBars
        this.heading = heading
        this.callToAction = callToAction
      }
    }
  },
  data: () => ({
    suggestions: [],
    searchTerm: ''
  }),
  methods: {
    async updateSuggestions (searchTerm) {
      try {
        const {
          data: { searchSuggestions }
        } = await this.$apollo.query({
          query: searchQuery,
          variables: { searchTerm }
        })
        this.suggestions = [].concat(searchSuggestions)
        return searchSuggestions
      } catch (error) {
        console.log(error)
      }
    }
  },
  head () {
    return {
      title: this.heading,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.heading
        }
      ]
    }
  }
}
</script>
