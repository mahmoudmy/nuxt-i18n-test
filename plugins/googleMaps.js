import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAjOUKHH_ATUu3DwWvBABO7LP_OHzwOJzc',
    libraries: 'places,drawing',
    language: 'fa',
    region: 'IR'
  }
})
