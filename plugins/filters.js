import Vue from 'vue'

Vue.filter('price', function (value) {
  if (!value) return ''
  return value.toLocaleString()
})

Vue.filter('imageUrl', function (value) {
  if (!value) return ''
  return `http://coridor.ir/images/${value}`
})
