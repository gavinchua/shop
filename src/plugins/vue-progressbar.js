import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const VueProgressBarOptions = {
  color: '#41b883',
  failedColor: '#ff0000',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
}

Vue.use(VueProgressBar, VueProgressBarOptions)
