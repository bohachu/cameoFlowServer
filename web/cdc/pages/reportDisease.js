Vue.component("vue_radio", {
  template: `
    <div class="col-2">
      <div class="JsonToHtmlRadio_getListTemplate custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0"></label>
      </div>
    </div>
  `
})

function fn_vue(str_vue_param) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var str_vue_file = urlParams.get(str_vue_param)
  if (str_vue_file) {
    console.log("reportDisease.js/fn_vue/str_vue_param:" + str_vue_param)
    console.log("reportDisease.js/fn_vue/str_vue_file:" + str_vue_file)
    Vue.component(str_vue_param, function (resolve, reject) {
      axios.get(str_vue_file).then(response => {
        resolve({template: response.data})
      })
    })
  }else{
    Vue.component(str_vue_param, {
      template: `<span></span>`
    })
  }
}

function vue_new() {
  var vue_block = new Vue({
    el: '#vue_block',
    data: {
      message: '🐰🐰🐰Hello Vue!🐑🐑🐑'
    }
  })
}

function main() {
  console.log("reportDisease.js/main()")
  fn_vue("vue_01")
  fn_vue("vue_03")
  fn_vue("vue_05")
  fn_vue("vue_07")
  vue_new()
}

main()
