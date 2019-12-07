Vue.component('button-counter', {
  data: function () {
    console.log("hihi vue vue 耶耶耶");
    var a = 0;
    a = a + 1;
    console.log(a);
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({el: '#vue-components'})
