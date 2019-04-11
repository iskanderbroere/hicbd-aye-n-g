<template>
  <article>
    <h1 :class="$style.header">
      {{ title }}
    </h1>
    <v-img ></v-img>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
        required: true
    }
  }
}
</script>

<style module>
.header {
    font-size: 22px;
    color: grey;
}
</style>
