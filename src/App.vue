<template>
  <v-app>
    <Header />
    <v-content>
      <GlobalMap :countriesData=countriesDetails />
    </v-content>
  </v-app>
</template>

<script>
import GlobalMap from './components/GlobalMap'
import Header from './components/Header'

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
    Header
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
    continentLoaded: false
  }),

  created () {
    this.getGlobalDetails()
    this.getCountryDetails()
  },

  updated () {
    this.getGlobalDetails()
    this.getCountryDetails()
  },

  mounted () {
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
      }
    }
  }
}
</script>
