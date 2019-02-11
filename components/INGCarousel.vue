<template>
  <v-carousel
    hide-delimiters
    :height="295"
  >
    <v-carousel-item
      v-for="item in carouselItems"
      :key="item.heading"
      lazy
      :src="'https://www.ing.nl' + item.image.url"
      :alt="item.image.altText"
    />
  </v-carousel>
</template>

<script>
export default {
  props: {
    carouselItems: {
      type: Array,
      required: true
    }
  }
}
</script>
