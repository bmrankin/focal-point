<template>
  <v-app>
    <v-toolbar app flat dense color="transparent">
      <v-toolbar-title class="headline primary--text">
        <span class="font-weight-bold">Focal</span>
        <span class="font-weight-light">POINT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>v 0.1.0</span>
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer height="auto">
      <v-spacer />
      <div>Copyright 2019 - A Quick <a href="https://vuejs.org/" traget="_blank" ref="noopener">Vue.js</a> | <a href="https://vuetifyjs.com/en/" traget="_blank" ref="noopener">Vuetify</a> Project by <a href="https://bryanrankin.com">Bryan Rankin</a></div>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>
