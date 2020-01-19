Vue.component('big_green', {
  props: ['標題', '顏色'],
  template: `
    <div>
      <h5 class="title font-weight-bold mt-3" :style="顏色"> {{標題}} 通報單位資料</h5>
    </div>
  `
})

Vue.component('title_input', {
  props: ['標題', '預設文字', '註解', '必填嗎', '灰底嗎', '搜尋嗎'],
  template: `
    <div class="col-lg-6">
      <div class="form-group">
        <label class="fs-0" for="first-name"> {{標題}}
            <required :必填嗎="必填嗎"></required> 
            <memo :註解="註解"></memo>
        </label>
        <div class="d-flex">
          <input v-if="灰底嗎=='true'" class="form-control text-secondary" style="background-color: #F2F2F2;" id="first-name" type="text" :value="預設文字">
          <input v-if="灰底嗎=='false'" class="form-control text-secondary" id="first-name" type="text" :value="預設文字">
          <i v-if="搜尋嗎=='true'" class="fas fa-search" style="font-size: 20px; margin: auto 0; margin-left: 10px;"></i>                  
        </div>
      </div>
    </div>
  `
})

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
