<template>
  <v-app>
    <v-toolbar
      app
      class="mx-auto elevation-1"
      dense
    >
      <v-spacer />
      <v-container
        class="py-0"
        :class="$style['button-container']"
      >
        <v-btn
          to="/"
          no-prefetch
          flat
        >
          <va-icon
            class="mr-2"
            name="flag"
          />Home
        </v-btn>
        <v-btn
          to="/about"
          no-prefetch
          flat
        >
          About
        </v-btn>
        <v-btn flat>
          Link Three
        </v-btn>
      </v-container>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      app
      height="auto"
    >
      <v-card
        flat
        tile
        class="text-xs-center"
      >
        <v-card-text
          class="pt-0"
        >
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider />
        <v-card-text>
          &copy;2018 —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>>
  </v-app>
</template>

<style module>
.button-container > a:first-child {
  margin-left: 0;
}
</style>
