import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

console.log(`Vuetify Version: ${Vuetify.version}`)

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#5d1049',
    secondary: '#e30425', // deep-orange darken-3
    accent: '#00c853',
    error: '#FFA000',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#fdd835'
  },
  
})
