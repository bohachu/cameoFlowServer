function funcCompButton(lstDart) {
  Vue.component('button-counter', {
    data: function () {
      console.log("Vue funcCompButton")
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.' + lstDart[0] + '</button>'
  })
  new Vue({el: '#vue-components'})
}

function funcH2(mapDart) {
  console.log("funcH2")
  var app = new Vue({
    el: '#idH2',
    data: mapDart
  })
}
