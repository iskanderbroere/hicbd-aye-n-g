<template>
  <main>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex v-if="heading" tag="h1" xs12>{{ heading }}</v-flex>
        <v-flex xs12>
          <i-n-g-carousel v-if="brandBars && brandBars.length > 0" :carousel-items="brandBars"/>
        </v-flex>
        <v-flex xs12>
          <v-card class="pa-5 orange accent-4 my-4" raised>
            <v-card-text align-center>
              <h3 v-if="callToAction" class="display-3 white--text">{{ callToAction.heading }}</h3>
              <span v-if="callToAction" class="white--text headline">
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
                type="search"
                :items="suggestions"
              />
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 30" :key="`4${i}`" xs12 md4>
          <Card>
            <CardMedia
              :src="i"
              :alt="i"
            />
            <CardHeader>
              {{i}}
            </CardHeader>
          </Card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
import LazyHydrate from 'vue-lazy-hydration'
import homePageQuery from '~/graphql/queries/homePage'
import searchQuery from '~/graphql/queries/search'

@Component({
  components: {
    LazyHydrate,
    Card: () => import(/* webpackChunkName: "Card" */ '~/components/Card.vue'),
    CardHeader: () => import(/* webpackChunkName: "CardHeader" */ '~/components/CardHeader.vue'),
    CardMedia: () => import(/* webpackChunkName: "CardMedia" */ '~/components/CardMedia.vue'),
    LazyImage: () => import(/* webpackChunkName: "LazyImage" */ '~/components/LazyImage.vue'),
    INGCarousel: () =>
      import(/* webpackChunkName: "Carousel" */ '~/components/INGCarousel.vue')
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
