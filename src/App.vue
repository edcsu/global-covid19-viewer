<template>
  <v-app>
    <Header />
    <v-content>
      <v-snackbar
        top
        right
        v-model="showSnackbar"
        :timeout="snackbarTimeout"
        :color="snackbarColor"
      >
        {{ snackbarText }}
        <v-btn
          text
          @click="showSnackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
      <v-container fluid class="pt-0 pb-0">
        <v-row class="pr-0 pb-0">
          <v-col cols="2" class="scrollable">
            <Stats :summaryDetails="globalSummary" v-if="globalLoaded" />
            <StatsSkeleton v-else />
          </v-col>
          <v-col cols="10" class="pb-0">
            <GlobalMap :countriesData=countriesDetails v-if="countriesLoaded" />
            <MapSkeleton v-else />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import GlobalMap from './components/GlobalMap'
import Header from './components/Header'
import Footer from './components/Footer'
import MapSkeleton from './components/MapSkeleton'
import Stats from '@/components/Stats'
import StatsSkeleton from '@/components/StatsSkeleton'

import {
  getContent,
  getGeoJsonData
} from '@/Helpers/helperMethods'
import {
  baseApiUrl,
  globalTotals,
  countryObject,
  countryTotals
} from '@/Helpers/apiHelpers'

export default {
  name: 'App',

  components: {
    GlobalMap,
    Header,
    Footer,
    MapSkeleton,
    Stats,
    StatsSkeleton
  },

  data: () => ({
    globalSummary: countryObject,
    eaTimeline: [],
    countriesDetails: [],
    timeInterval: 600000,
    loaded: false,
    eaLoaded: false,
    globalLoaded: false,
    countriesLoaded: false,
    eaSummaryLoaded: false,
    defaultLoaded: false,
    continentLoaded: false,
    showSnackbar: false,
    snackbarColor: '',
    snackbarText: '',
    snackbarTimeout: 5000
  }),

  created () {
    this.getGlobalDetails()
    this.getCountryDetails()
  },

  mounted () {
    this.getGlobalDetails()
    this.getCountryDetails()
    setInterval(() => {
      this.getGlobalDetails()
      this.getCountryDetails()
    }, this.timeInterval)
  },

  methods: {
    async getGlobalDetails () {
      this.globalLoaded = false
      try {
        const response = await getContent(baseApiUrl, globalTotals.all)
        this.globalSummary = response.data
        this.globalLoaded = true
      } catch (error) {
        this.globalLoaded = false
        console.error(error)
        this.snackbarText = 'Failed to get data. Refresh again'
        this.snackbarColor = 'error'
        this.showSnackbar = true
      }
    },

    async getCountryDetails () {
      this.countriesLoaded = false
      try {
        const response = await getContent(baseApiUrl, countryTotals.countries)
        this.countriesDetails = getGeoJsonData(response.data)
        this.countriesLoaded = true
      } catch (error) {
        this.countriesLoaded = false
        console.error(error)
        this.snackbarText = 'Failed to get data. Refresh again'
        this.snackbarColor = 'error'
        this.showSnackbar = true
      }
    }
  }
}
</script>
