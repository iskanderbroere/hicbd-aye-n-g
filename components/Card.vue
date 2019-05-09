<template functional>
  <article :class="[$style.card, $style.card_shadow_a]">
    <slot/>
  </article>
</template>

<style module>
.card {
  border-radius: 6px;
  margin-bottom: 24px;
}
.card_shadow_a {
  box-shadow: 0 3px 0 0 rgba(0,0,0,.15);
  border: 1px solid #EBEBEB;
}
</style>
