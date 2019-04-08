import { NormalizedCacheObject } from "apollo-cache-inmemory";

declare global {
    interface Window {
        __NUXT__: {
            apollo: {
                defaultClient: NormalizedCacheObject
            }
        }
    }
}
// declare module 'vuetify-loader/lib/plugin';