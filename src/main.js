import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import HighchartsVue from 'highcharts-vue'
import { convertUnixTime, formattoLocalDate, timeAgo } from './Helpers/helperMethods'

import './assets/css/main.css'

Vue.config.productionTip = false

Vue.filter('unixToDate', (value) => {
  return value ? convertUnixTime(value) : 0
})

Vue.filter('commaSeparator', (value) => {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
})

Vue.filter('convertToLocalDate', (value) => {
  if (value) {
    return value ? formattoLocalDate(value) : 0
  }
})

Vue.filter('convertToTimeAgo', value => {
  if (value) {
    return value ? timeAgo(value) : 0
  }
})

Vue.use(HighchartsVue)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
