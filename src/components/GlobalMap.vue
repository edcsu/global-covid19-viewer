<template>
  <div>
    <highcharts :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import mapData from '@highcharts/map-collection/custom/world.geo.json'
import mapInit from 'highcharts/modules/map'
import exportingInit from 'highcharts/modules/exporting'

mapInit(Highcharts)
exportingInit(Highcharts)

// eslint-disable-next-line dot-notation
Highcharts.maps['globalTrackerMap'] = mapData

export default {
  name: 'GlobalMap',

  props: ['countriesData'],

  data () {
    return {
      mapOptions: {
        chart: {
          map: 'globalTrackerMap'
        },
        title: {
          text: 'Global COVID19 total cases per country'
        },
        legend: {
          enabled: false
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        series: [{
          name: 'Countries',
          color: '#E0E0E0',
          enableMouseTracking: false
        }, {
          name: 'Total COVID19 cases',
          type: 'mapbubble',
          data: this.countriesData.features,
          keys: ['code', 'value'],
          joinBy: ['iso-a2', 'code'],
          minSize: '1%',
          maxSize: '12%',
          color: '#FF0000'
        }]
      }
    }
  }
}
</script>
 <style scoped>
.map {
  min-height: 500px;
}
 </style>
