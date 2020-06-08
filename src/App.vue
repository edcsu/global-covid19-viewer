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
  // getSpecificContent,
  // populateData,
  // getTimelineContent
} from '@/Helpers/helperMethods'
import {
  baseApiUrl,
  globalTotals,
  countryObject,
  // defaultCountry,
  countryTotals
  // continent,
  // continentObject,
  // defaultContinent,
  // johnsHopkins,
  // timelineObject,
  // eastAfricaCountries
} from '@/Helpers/apiHelpers'

export default {
  name: 'App',

  components: {
    GlobalMap,
    Header
  },

  data: () => ({
    globalSummary: countryObject,
    // defaultSummary: countryObject,
    // eastAfricaSummary: countryObject,
    // continentSummary: continentObject,
    // countryTimeline: timelineObject,
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
    // this.getEastAfricaDetails()
    this.getGlobalDetails()
    this.getCountryDetails()
    // this.getDefaultDetails()
    // this.getContinentDetails()
    // this.getCountryTimeline()
    // this.getEATimeline()
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
