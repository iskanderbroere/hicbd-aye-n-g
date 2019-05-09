<template>
  <picture>
    <source :data-src="require(`@/assets/unsamples/${src}.jpg?webp`)" type="image/webp">
    <source :data-src="require(`@/assets/unsamples/${src}.jpg`)" type="image/jpeg">
    <img
      :alt="alt"
      loading="lazy"
      :data-src="require(`@/assets/unsamples/${src}.jpg`)"
      data-optimumx="auto"
      data-sizes="auto"
      :class="$style.card_media"
      class="lazyload"
    >
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>


<style module>
.card_media {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  padding: 0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
