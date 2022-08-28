import clickoutside from './clickoutside'

const install = Vue => {
  Vue.directive('clickoutside', clickoutside)
}

export default {
  install
}
