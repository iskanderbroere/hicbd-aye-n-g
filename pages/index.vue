<template>
  <main>
    <v-container grid-list-md>
      <v-layout
        row
        wrap
      >
        <v-flex
          v-if="heading"
          tag="h1"
          xs12
        >
          {{ heading }}
        </v-flex>
        <v-flex xs12>
          <lazy-hydrate
            v-if="brandBars && brandBars.length > 0"
            when-idle
          >
            <i-n-g-carousel :carousel-items="brandBars" />
          </lazy-hydrate>
        </v-flex>
        <v-flex xs12>
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
                {{
                  callToAction.description
                }}
              </span>
              <v-autocomplete
                v-model="autocompleteSelection"
                :search-input.sync="searchTerm"
                label="Type om te zoeken..."
                solo
                no-filter
                append-icon
                class="my-2"
                :items="suggestions"
              />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          v-for="i in 3"
          :key="`4${i}`"
          xs4
        >
          <v-card
            dark
            color="primary"
          >
            <v-card-text class="px-0">
              4
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import INGCarousel from '~/components/INGCarousel.vue'
import LazyHydrate from 'vue-lazy-hydration'
import homePageQuery from "~/graphql/queries/homePage";
import searchQuery from "~/graphql/queries/search";

@Component({
  components: {
    LazyHydrate,
    INGCarousel
  },
  apollo: {
    homePage: {
      query: homePageQuery,
      manual: true,
      result({ data: { brandBars, heading, callToAction } }) {
        this.brandBars = brandBars
        this.heading = heading
        this.callToAction = callToAction
      }
    }
  }
})
export default class Home extends Vue {
  heading = ''
  callToAction = null
  brandBars = []
  suggestions = []
  autocompleteSelection = []
  searchTerm = ''
  head() {
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
  @Watch('searchTerm')
  async search(newSearchTerm: string) {
    const {
        data: { searchSuggestions }
      } = await this.$apollo.query({
        query: searchQuery,
        variables: { searchTerm: newSearchTerm }
      })
      this.suggestions = searchSuggestions.map(({ name }) => name)
  }
}

</script>
