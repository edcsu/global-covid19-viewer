<template>
  <v-app>

    <Header />

    <v-content>
      <GlobalMap/>
    </v-content>
  </v-app>
</template>

<script>
import GlobalMap from './components/GlobalMap'
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    GlobalMap,
    Header
  },

  data: () => ({
    //
  })
}
</script>
