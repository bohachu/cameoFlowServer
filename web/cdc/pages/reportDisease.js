function vue_str_html_first() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  strHtmlFirst = urlParams.get('strHtmlFirst')
  if (strHtmlFirst) {
    console.log("reportDisease.js/str_html_first/strHtmlFirst:" + strHtmlFirst)
    Vue.component('vue_str_html_first', function (resolve, reject) {
      axios.get(strHtmlFirst).then(response => {
        resolve({template: response.data})
      })
    })
  } else {
    console.log("reportDisease.js/str_html_first/strHtmlFirst: no value")
  }
}

Vue.component("vue_radio", {
  template:`
    <div class="col-2">
      <div class="JsonToHtmlRadio_getListTemplate custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0"></label>
      </div>
    </div>
  `
})

function vue_new() {
  var app = new Vue({
    el: '#vue_block',
    data: {
      message: '🐰🐰🐰Hello Vue!🐑🐑🐑'
    }
  })
}

function main() {
  console.log("reportDisease.js/main()")
  vue_str_html_first()
  vue_new()
}

main()


