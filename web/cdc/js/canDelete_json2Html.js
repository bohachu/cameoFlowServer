function funcJson2Html(lstDart) {
  Vue.component('button-counter', {
    data: function () {
      console.log("canDelete_json2Html.js/funcJson2Html")
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.' + lstDart[0] + '</button>'
  })
  new Vue({el: '.json2Html'})
}
