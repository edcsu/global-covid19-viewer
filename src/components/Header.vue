<template>
  <v-app-bar app color="primary" dark pa-0>
    <!-- <v-app-bar-nav-icon @click="$emit('hidesidemenu')"></v-app-bar-nav-icon> -->
    <v-icon >mdi-earth</v-icon>
    <div class="ml-1 d-flex align-center">
      COVID19 GLOBAL VIEWER
    </div>

    <v-spacer></v-spacer>

    <v-tooltip color="purple lighten-2" bottom nudge-left="150">
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://github.com/NovelCOVID/awesome-novelcovid"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="">mdi-seal</v-icon>
        </v-btn>
      </template>
      <span>
        Recognised on Awesome NovelCOVID projects
        <v-icon class="">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>
    <v-tooltip color="purple lighten-2" bottom nudge-left="70">
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon" v-text="'$vuetify.icons.linkedin'"></v-icon>
        </v-btn>
      </template>
      <span>
        Connect on LinkedIn
        <v-icon class="">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip color="purple lighten-2" bottom nudge-left="70">
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://twitter.com/skeith696"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon" v-text="'$vuetify.icons.twitter'"></v-icon>
        </v-btn>
      </template>
      <span>
        Follow on twitter
        <v-icon class="">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>
    <v-tooltip v-tooltip color="purple lighten-2" bottom>
      <template v-slot:activator="{ on }">
        <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        v-on="on"
        color="secondary"
        class="ml-5"
        label=""
        ></v-switch>
      </template>
      <span>
        Choose between light and dark
        <v-icon class="">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Header',

  data: () => ({
    //
  })
}
</script>
