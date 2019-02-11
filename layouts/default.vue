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
          /> Home
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
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app />
  </v-app>
</template>

<style module>
.button-container > a:first-child {
  margin-left: 0;
}
</style>
