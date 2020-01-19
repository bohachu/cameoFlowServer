Vue.component('big_green', {
  props: ['標題','顏色'],
  template: `
    <div>
      <h5 class="title font-weight-bold mt-3" :style="顏色"> {{標題}} 通報單位資料</h5>
    </div>
  `
})

Vue.component('report_unit_name', {
  props: ['black_title', 'default_text'],
  template: `
            <div class="col-lg-6">
              <div class="form-group">
                <label class="fs-0" for="first-name"> {{ black_title }} <a href="codingMemo.html?strMemo=001 疾管署與卡米爾當面討論之後建議：按下放大鏡之後的醫院搜尋介面畫面已經做在精誠動態雛形，因此，可以用抓圖方式（彈出搜尋元件），精誠夥伴請提供給疾管署做確認。<br/>002 如果通報單位非醫院，要變成「非反灰」可自行輸入。">🔆</a></label>
                <div class="d-flex">
                  <input class="form-control text-secondary" style="background-color: #F2F2F2;" id="first-name"
                         type="text" :value="default_text">
                  <i class="fas fa-search" style="font-size: 20px; margin: auto 0; margin-left: 10px;"></i>                  
                </div>
              </div>
            </div>
  `
})

new Vue({el: '#vue_block'})
