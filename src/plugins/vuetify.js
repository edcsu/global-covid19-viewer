import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import GithubComponent from '../Icons/GithubComponent'
import VirusComponent from '../Icons/VirusComponent'
import TwitterComponent from '../Icons/TwitterComponent'
import LinkedinComponent from '../Icons/LinkedinComponent'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      github: {
        component: GithubComponent
      },
      virus: {
        component: VirusComponent
      },
      twitter: {
        component: TwitterComponent
      },
      linkedin: {
        component: LinkedinComponent
      }
    }
  }
})
