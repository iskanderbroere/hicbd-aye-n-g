import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import fetch from 'node-fetch'

// Install the vue plugin
Vue.use(VueApollo)

const createApolloClient = (ssr: boolean, uri: string): ApolloClient<NormalizedCacheObject> => {
  const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri,
    fetch
  })

  const cache = new InMemoryCache()

  // If on the client, recover the injected state
  if (!ssr) {
    const state = window.__NUXT__ && window.__NUXT__.apollo.defaultClient
    if (state) {
      cache.restore(state)
    }
  }

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ...(ssr
      ? {
        // Set this on the server to optimize queries when SSR
        ssrMode: true
      }
      : {
        // This will temporary disable query force-fetching
        ssrForceFetchDelay: 100
      })
  })
  return apolloClient
}

export default ctx => {
  const { app, app: { $env }, beforeNuxtRender } = ctx
  const backendUri = process.env.NODE_ENV === 'production' ? `https://${$env.GOOGLE_CLOUD_PROJECT}.appspot.com${$env.BACKEND_URL}` : 'http://localhost:4000/api/graphql'
  const apolloClient = createApolloClient(process['server'], backendUri)
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })
  if (process['server']) {
    beforeNuxtRender(async ({ nuxtState }) => {
      const { getStates } = await import('vue-apollo/ssr')
      nuxtState.apollo = getStates(apolloProvider)
    })
  }
  app.apolloProvider = apolloProvider
}
