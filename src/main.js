import Vue from 'vue'
import ElementUI from 'element-ui'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios/axios'

import dialog from './utils/dialog.js'
import components from './components/index'
import directives from './directives/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use({
  install: vue => {
    vue.prototype.axios = axios
    vue.prototype.$store = store
    vue.prototype.$dialog = dialog
  }
})
Vue.use({install: components.install})
Vue.use(directives)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
