import 'dart:convert';
import 'dart:js';
import 'dart:html';
import 'package:http/http.dart';
import '../../common/dart/httpGet.dart';
import 'dart:html' as dom;

void main() async {
  window.console.log('jsCdc.dart 001');
  String strJson = await httpGet('../json/reportDisease登革熱.json');
  List lst = jsonDecode(strJson);
  window.console.log(lst);

  final NodeValidatorBuilder nodeValidator = NodeValidatorBuilder.common()
    ..allowElement('a', attributes: ['href', 'data-target', 'data-toggle'])..allowElement('button', attributes: ['data-target', 'data-toggle'])..allowElement(
      'div', attributes: ['style']);

  String strHtml1 = '''
          11111 <a href="../json/reportDisease登革熱.json"> haha2 </a>
          <div class="row ml-1 mr-1">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="fs-0 font-weight-bold text-black">臨床症狀</label><br/>
                <label class="fs-0" for="name">有無症狀</label><br/>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline4" type="radio"
                         name="customRadioInline2">
                  <label class="custom-control-label fs-0" for="customRadioInline4">有</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline5" type="radio"
                         name="customRadioInline2">
                  <label class="custom-control-label fs-0" for="customRadioInline5">無</label>
                </div>
              </div>
            </div>
          </div>
  ''';

  String strHtml2 = '''
          22222
          <div class="row pl-5 pr-5 pt-4 pb-4" style="background-color: #F2F2F2">
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox888" value="option1">
              <label class="form-check-label fs-0" for="inlineCheckbox888">出血症狀</label>
            </div>
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox892" value="option2">
              <label class="form-check-label fs-0" for="inlineCheckbox892">後眼窩痛</label>
            </div>
            <div class="form-check form-check-inline col-md-3 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox896" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox896">頭痛</label>
            </div>
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox900" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox900">白血球減少</label>
            </div>
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox904" value="option2">
              <label class="form-check-label fs-0" for="inlineCheckbox904">皮疹/紅疹/出疹</label>
            </div>
            <div class="form-check form-check-inline col-md-3 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox908" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox908">發燒(38度以上)</label>
            </div>
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox912" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox912">關節痛</label>
            </div>
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox916" value="option2">
              <label class="form-check-label fs-0" for="inlineCheckbox916">血壓帶試驗陽性</label>
            </div>
            <div class="form-check form-check-inline col-md-3 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox920" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox920">肌肉痛</label>
            </div>
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox924" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox924">嘔吐</label>
            </div>
            <div class="form-check form-check-inline col-md-4 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox928" value="option2">
              <label class="form-check-label fs-0" for="inlineCheckbox928">噁心</label>
            </div>
            <div class="form-check form-check-inline col-md-3 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox932" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox932">骨頭痛</label>
            </div>
            <div class="form-check form-check-inline col-md-8 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox936" value="option2">
              <label class="form-check-label fs-0" for="inlineCheckbox936">其他症狀</label>
              <input class="text-secondary ml-3 p-1" type="text" value="輸入內容">
            </div>
          </div>
          ''';

  querySelector('#reportDiseaseDartHtml').setInnerHtml(strHtml1 + strHtml2, validator: nodeValidator);
}

/*
void updateTables(lstTrelloTable) {
  context.callMethod('funcReportDiseaseJsonToHtml', [JsObject.jsify(lstTrelloTable)]);
}
*/

/*
  final NodeValidatorBuilder nodeValidator = NodeValidatorBuilder.common()
    ..allowElement('a', attributes: ['data-target', 'data-toggle'])
    ..allowElement('button', attributes: ['data-target', 'data-toggle']);

  final NodeValidatorBuilder nodeValidator2= dom.NodeValidatorBuilder()
    ..allowHtml5()
    ..allowElement('a', attributes: ['href'])
    ..allowElement('img', attributes: ['src']);

 */
