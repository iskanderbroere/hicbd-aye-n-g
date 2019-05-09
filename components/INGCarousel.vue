<template>
  <div :class="$style.glide">
    <div
      data-glide-el="track"
      :class="$style['glide__track']"
    >
      <ul :class="$style['glide__slides']">
        <li
          v-for="item in carouselItems"
          :key="item.heading"
          :class="$style['glide__slide']"
        >
          <v-img
            :src="'https://www.ing.nl' + item.image.url"
            :alt="item.image.altText"
          />
        </li>
      </ul>
    </div>
    <div
      :class="$style['glide__arrows']"
      data-glide-el="controls"
    >
      <v-btn
        flat
        icon
        absolute
        aria-label="Previous"
        color="white"
        :class="[$style['glide__arrow'], $style['glide__arrow--left']]"
        data-glide-dir="<"
      >
        <va-icon
          name="chevron-left"
        />
      </v-btn>
      <v-btn
        flat
        icon
        absolute
        aria-label="Next"
        color="white"
        :class="[$style['glide__arrow'], $style['glide__arrow--right']]"
        data-glide-dir=">"
      >
        <va-icon
          name="chevron-right"
        />
      </v-btn>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  props: {
    carouselItems: {
      type: Array,
      required: true
    }
  },
  mounted() {
    new Glide(this.$el, {
      classes: {
        direction: {
          ltr: this.$style['glide--ltr'],
          rtl: this.$style['glide--rtl']
        },
        slider: this.$style['glide--slider'],
        carousel: this.$style['glide--carousel'],
        swipeable: this.$style['glide--swipeable'],
        dragging: this.$style['glide--dragging'],
        cloneSlide: this.$style['glide__slide--clone'],
        activeNav: this.$style['glide__bullet--active'],
        activeSlide: this.$style['glide__slide--active'],
        disabledArrow: this.$style['glide__arrow--disabled']
      }
    }).mount()
  }
}
</script>

<style module>
.glide {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.glide * {
  box-sizing: inherit;
}
.glide__track {
  overflow: hidden;
}
.glide__slides {
  position: relative;
  width: 100%;
  list-style: none;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  touch-action: pan-Y;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  will-change: transform;
}
.glide__slides--dragging {
  user-select: none;
}
.glide__slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  white-space: normal;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
.glide__slide a {
  user-select: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.glide__arrows {
  -webkit-touch-callout: none;
  user-select: none;
}
.glide__bullets {
  -webkit-touch-callout: none;
  user-select: none;
}
.glide--rtl {
  direction: rtl;
}
.glide__arrow {
  position: absolute;
  display: block;
  top: 50%;
  z-index: 2;
  color: white;
  background-color: transparent;
  opacity: 1;
  cursor: pointer;
  transition: opacity 150ms ease, border 300ms ease-in-out;
  transform: translateY(-50%);
  line-height: 1;
}
.glide__arrow--left {
  left: 2em;
}
.glide__arrow--right {
  right: 2em;
}
.glide__arrow--disabled {
  opacity: 0.33;
}
.glide--swipeable {
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.glide--dragging {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
</style>
