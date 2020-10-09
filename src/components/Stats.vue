<template>
  <div>
        <v-card outlined class="blue lighten-2 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total cases
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-figure">
                {{ stats.cases | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-circle</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="success mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total recoveries
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-figure">
                {{ stats.recovered | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="amber mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total active cases
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-figure">
                {{ stats.active | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="orange lighten-2 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total critical
              </v-list-item-title>
              <v-list-item-subtitle class=" font-weight-black stat-figure">
                {{ stats.critical | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-alert</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="pink lighten-1 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total Tests
              </v-list-item-title>
              <v-list-item-subtitle class=" font-weight-black stat-test">
                {{ stats.tests | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="24px">mdi-test-tube</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="red lighten-1 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Total deaths
              </v-list-item-title>
              <v-list-item-subtitle class=" font-weight-black stat-figure">
                {{ stats.deaths | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-remove</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="cyan lighten-4 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Cases today
              </v-list-item-title>
              <v-list-item-subtitle class=" font-weight-black stat-figure">
                {{ stats.todayCases | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-plus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="green lighten-1 mb-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Recovered today
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-black stat-figure">
                {{ stats.todayRecovered | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined class="red lighten-1 mb-1">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="mb-1 stat-title">
                Deaths today
              </v-list-item-title>
              <v-list-item-subtitle class=" font-weight-black stat-figure">
                {{ stats.todayDeaths | commaSeparator }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-minus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>

        <p class="last-updated mt-1">
          Last Updated : <strong> {{ stats.updated | convertToTimeAgo}} </strong>
        </p>
        <v-card
          class="mt-2 text-center pa-2"
          tile
        >
          <span class="mb-1">
           Scan to share app link
          </span>
          <GenQrCode/>
        </v-card>
  </div>
</template>

<script>
import GenQrCode from '@/components/GenQrCode'

export default {
  name: 'Stats',
  props: ['summaryDetails'],
  components: {
    GenQrCode
  },
  data: () => ({
    right: null
  }),
  computed: {
    stats: function () {
      return this.summaryDetails
    }
  }
}
</script>
