<template>
  <v-app>
    <v-toolbar app flat dense color="transparent">
      <v-toolbar-title class="headline primary--text">
        <span class="font-weight-bold">Focal</span>
        <span class="font-weight-light">POINT</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer height="auto">
      <v-spacer />
      <div>
        <p>Copyright 2019 - <a href="https://twitter.com/bmrankin">Bryan Rankin</a> |  v 0.2.0 | <a href="https://github.com/bmrankin/focal-point" target="_blank" rel="noopener">Project on Github</a></p>
      </div>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>
