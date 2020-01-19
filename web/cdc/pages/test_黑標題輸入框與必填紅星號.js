Vue.component('black_input', {
  props: ['title','color','default_text'],
  template: `
  <div class="col-lg-6">
  <div class="form-group">
    <label class="fs-0" for="doctor">{{title}}<span :style="color">*</span></label>
    <input class="form-control text-secondary" id="doctor" type="text" :value="default_text">
  </div>
</div>
  `
})

new Vue({ el: '#vue_enable_block' })


