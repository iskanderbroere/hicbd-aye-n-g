<template>
  <img
    style="height: 300px;"
    :src="src"
    loading="lazy"
  >
</template>

<script>
import { omit } from 'ramda'
const buildOptions = omit(['alt', 'src', 'sizes', 'optimumx', 'webp'])
export default {
  props: {
    alt: {
      type: String
    },
    src: {
      type: String,
      required: true
    },
    sizes: {
      type: String,
      default: 'auto'
    },
    aspectratio: {
      type: Number,
      default: 16
    },
    optimumx: {
      type: [Number, String],
      default: 'auto'
    },
    webp: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.image {
  display: block;
  width: 100%;
  height: auto;
}
img[data-sizes='auto'] {
  display: block;
  width: 100%;
}
</style>
