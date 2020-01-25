Vue.component('radio_one_row', {
  props: ['標題', '顏色', '註解', '必填嗎', 'radio問答1', 'radio問答2'],
  template: `
    <div class="row" style="clear: both;">
  <div class="col-0 ml-4 fs-1" style="顏色">
    <b> {{標題}} 旅遊史</b><required :必填嗎="必填嗎"></required>
    <memo :註解="註解"></memo>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" id="customRadioInline749398" name="customRadioInline749398">
    <label class="custom-control-label fs-0" for="customRadioInline749398">
      {{radio問答1}}
    </label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" class="custom-control-input" id="customRadioInline749" name="customRadioInline749">
    <label class="custom-control-label fs-0" for="customRadioInline749">
      {{radio 問答2}}
    </label>
  </div>
</div>
  `
})

// ?strDiseaseFile=../json/test_disease_梅毒_caro.json 沒有成功跑出來 vue 元件
// type class 要改成都可以共用的元件，像是 checkbox 等等


Vue.component('required', {
  props: ['必填嗎'],
  template: `
    <span v-if="必填嗎=='true'" style="color: red;">*</span>
  `
})

Vue.component('memo', {
  props: ['註解'],
  template: `
    <a v-if="註解.length > 0" :href="'codingMemo.html?strMemo='+註解">🔆</a>
  `
})

new Vue({el: '#vue_block'})
