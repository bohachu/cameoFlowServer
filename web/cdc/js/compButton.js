function funcCompButton(lstDart) {
  Vue.component('button-counter', {
    data: function () {
      console.log("Hi vue vue 耶耶耶");
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.'+lstDart[0]+'</button>'
  })
  new Vue({el: '#vue-components'})
}
