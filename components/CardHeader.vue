<template functional>
  <h1 :class="$style.card_header">
    <slot/>
  </h1>
</template>

<style module>
.card_header {
  padding: 15px;
  font-size: 22px;
  color: grey;
}
</style>
