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
        subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        colorAxis: {
          min: 0,
          maxColor: '#FF0000',
          minColor: '#FFEBEE'
        },
        series: [{
          name: 'Total COVID19 cases',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: false,
          data: this.countriesData.features,
          keys: ['code', 'value'],
          joinBy: ['iso-a2', 'code']
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
