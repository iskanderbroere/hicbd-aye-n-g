<template functional>
  <img loading="lazy" :class="$style.card_media" v-bind="data.attrs">
</template>

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
