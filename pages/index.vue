<template>
  <main>
    <h1 v-if="heading">
      {{ heading }}
    </h1>
    <lazy-hydrate
      v-if="brandBars && brandBars.length > 0"
      when-idle
    >
      <i-n-g-carousel
        :carousel-items="brandBars"
      />
    </lazy-hydrate>
    <v-card
      class="pa-5 orange accent-4 my-4"
      raised
    >
      <v-card-text align-center>
        <h3
          v-if="callToAction"
          class="display-3 white--text"
        >
          {{ callToAction.heading }}
        </h3>
        <span
          v-if="callToAction"
          class="white--text headline"
        >
          {{ callToAction.description }}
        </span>
        <v-autocomplete
          v-model="autocompleteSelection"
          :search-input.sync="searchTerm"
          solo
          no-filter
          append-icon
          class="my-2"
          :items="suggestions"
        />
      </v-card-text>
    </v-card>
  </main>
</template>

<script>
import INGCarousel from '~/components/INGCarousel'
import LazyHydrate from 'vue-lazy-hydration'
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
    heading: '',
    callToAction: null,
    brandBars: [],
    suggestions: [],
    autocompleteSelection: [],
    searchTerm: ''
  }),
  watch: {
    async searchTerm (newSearchTerm) {
      try {
        const {
          data: { searchSuggestions }
        } = await this.$apollo.query({
          query: searchQuery,
          variables: { newSearchTerm }
        })
        this.suggestions = searchSuggestions.map(({ name }) => name)
      } catch (error) {
        console.error(error)
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
