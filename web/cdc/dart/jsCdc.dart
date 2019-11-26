import 'dart:math';
import 'dart:convert';
import 'dart:html';
import '../../common/dart/httpGet.dart';
import 'dart:js';
import 'package:http/http.dart';

void main() async {
  window.console.log('jsCdc.dart 001');
  String strJson = await httpGet('../json/reportDisease登革熱.json');
  List lst = jsonDecode(strJson);

  final NodeValidatorBuilder nodeValidator = NodeValidatorBuilder.common()
    ..allowElement('a', attributes: ['href'])
    ..allowElement('div', attributes: ['style'])
    ..allowElement('img', attributes: ['src'])
    ..allowElement('button', attributes: ['style'])
    ..allowElement('input', attributes: ['data-options'])
    ..allowElement('span', attributes: ['flow', 'tooltip'])
    ..allowElement('i', attributes: ['style'])
    ..allowHtml5();

  /* radio 0
  lst[0]=={
    "type": "radio",
    "title": "臨床症狀 Json1",
    "text": "有無症狀 Json1",
    "list": [
      "有 Json1",
      "無 Json1"
    ]
  },
   */
  strHtml0 = templateRadio(lst[0]);

  /* radio 2
  {
    "type": "radio",
    "title": "Json002 警示癥象",
    "text": "腹部疼痛及壓痛、持續性嘔吐、臨床上體液蓄積（腹水、胸水……）、黏膜出血、嗜睡/躁動不安、肝臟腫大超出肋骨下緣2公分、血比容增加（上升20%）伴隨血小板急速下降",
    "list": [
      "有(符合以上任一項)",
      "無"
    ]
  },
   */
  strHtml2 = templateRadio(lst[2]);

  /* radio 3
  {
    "type": "radio",
    "title": "Json003 通報時檢驗資料",
    "text": "登革熱快速檢驗結果",
    "tip": "．本檢驗結果必須為使用具有衛生福利部醫療器材許可證之登革熱NS1快速檢驗試劑之檢驗結果",
    "list": [
      "NS1陽性",
      "NS1陰性",
      "未確定"
    ]
  },
   */
  strHtml3 = templateRadio(lst[3]);

  querySelector('#reportDiseaseDartHtml').setInnerHtml(
      strHtml0 +
          strHtml1 +
          strHtml2 +
          strHtml3 +
          strHtml4 +
          strHtml5 +
          strHtml6 +
          strHtml7 +
          strHtml8 +
          strHtml9 +
          strHtml10 +
          strHtml11 +
          strHtml12 +
          strHtml13,
      validator: nodeValidator);
}

/*
void updateTables(lstTrelloTable) {
  context.callMethod('funcReportDiseaseJsonToHtml', [JsObject.jsify(lstTrelloTable)]);
}
*/

String templateRadio(Map map) {
  String strType = map['type'];
  if (strType != 'radio') return '';

  String strTitle = map['title'];
  String strText = map['text'];
  String strTip = map['tip']; //todo
  List lstList = map['list'];

  String strRadioList='';
  int intRandomId = Random().nextInt(99999);
  for (int i = 0; i < lstList.length; i++) {
    strRadioList += '''
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline${intRandomId + i}" type="radio"
                         name="customRadioInline$intRandomId">
                  <label class="custom-control-label fs-0" for="customRadioInline${intRandomId + i}">${lstList[i]}</label>
                </div>
    ''';
  }

  String strHtml = '''
          <div class="row ml-1 mr-1">
              <div class="form-group">
                <label class="fs-0 font-weight-bold text-black">$strTitle</label><br/>
                <div class="ml-1 mb-1">$strText</div>
                $strRadioList
              </div>
          </div>
    ''';

  return strHtml;
}

String strHtml0 = '';

String strHtml1 = '''
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

/*
String strHtml2 = '''
          <div class="ml-3 mt-3 mb-2 font-weight-bold">警示徵象</div>
          <div class="ml-3 mr-10 mb-3">腹部疼痛及壓痛、粘膜出血、持續性嘔吐、是睡、躁動不安、臨床上體液積蓄（腹水、胸水...）、肝臟腫大超過肋骨下緣2公分、血比容增加伴隨血小板急速下降
          </div>
          <div class="custom-control custom-radio custom-control-inline ml-3">
            <input class="custom-control-input" id="customRadioInline715" type="radio" name="customRadioInline3">
            <label class="custom-control-label fs-0" for="customRadioInline715">有(符合以上任一項)</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline ml-3">
            <input class="custom-control-input" id="customRadioInline719" type="radio" name="customRadioInline3">
            <label class="custom-control-label fs-0" for="customRadioInline719">無</label>
          </div>
''';
*/
String strHtml2 = '';

/*
String strHtml3 = '''
          <div class="row ml-1 mr-1 mt-5">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="fs-0 font-weight-bold text-black">通報時檢驗資料</label><br/>
                <div class="d-flex">
                  <label class="fs-0 mr-2" for="name">登革熱快速檢驗結果</label><br/>
                  <span tooltip="．本檢驗結果必須為使用具有衛生福利部醫療器材許可證之登革熱NS1快速檢驗試劑之檢驗結果" flow="right"><i
                    class="fas fa-exclamation-circle" style="color: #00a65a;"></i></span>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline732" type="radio"
                         name="customRadioInline4">
                  <label class="custom-control-label fs-0" for="customRadioInline732">NS1陽性</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline737" type="radio"
                         name="customRadioInline4">
                  <label class="custom-control-label fs-0" for="customRadioInline737">NS1陰性</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline742" type="radio"
                         name="customRadioInline4">
                  <label class="custom-control-label fs-0" for="customRadioInline742">未確定</label>
                </div>
              </div>
            </div>
          </div>
''';
*/
String strHtml3 = '';

String strHtml4 = '''
          <div class="row ml-1 mr-1 mt-4">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="fs-0 font-weight-bold text-black">流行病學資料</label><br/>
                <label class="fs-0" for="name">職業</label><br/>
                <select class="form-control text-secondary" id="exampleFormControlSelect984">
                  <option>輸入內容</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
''';

String strHtml5 = '''
          <div class="row ml-1 mr-1">
            <div class="col-lg-6">
              <label class="fs-0" for="name">旅遊史</label><br/>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline11" type="radio" name="customRadioInline5">
                <label class="custom-control-label fs-0" for="customRadioInline11">有</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline12" type="radio" name="customRadioInline5">
                <label class="custom-control-label fs-0" for="customRadioInline12">無</label>
              </div>
            </div>
          </div>
''';

String strHtml6 = '''
          <div class="row ml-1 mr-1 mt-2">
            <div class="col-lg-6">
              <label class="fs-0" for="name">旅遊史類別</label><br/>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" id="customCheck1012" type="checkbox">
                <label class="custom-control-label fs-0" for="customCheck1012">國內旅遊史</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" id="customCheck1016" type="checkbox">
                <label class="custom-control-label fs-0" for="customCheck1016">國外旅遊史</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input class="custom-control-input" id="customCheck1020" type="checkbox">
                <label class="custom-control-label fs-0" for="customCheck1020">外籍人士國外居住史</label>
              </div>
            </div>
          </div>
''';

String strHtml7 = '''
          <div class="text-black font-weight-bold p-3 mt-3" style="background-color: #F2F2F2">國內旅遊史</div>
          <div class="row m-1 mt-3">
            <div class="col-lg-3">
              <div class="form-group">
                <label class="fs-0" for="name">縣市</label>
                <input class="form-control text-secondary" id="name1030" type="text" value="輸入內容">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker1036">起始日期</label>
                <input class="form-control datetimepicker text-secondary" id="datepicker1036" type="text" value="年/月/日"
                       data-options='{"dateFormat":"y/m/d"}'>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker1043">結束日期</label>
                <input class="form-control datetimepicker text-secondary" id="datepicker1043" type="text" value="年/月/日"
                       data-options='{"dateFormat":"y/m/d"}'>
              </div>
            </div>
          </div>
''';

String strHtml8 = '''
          <div class="text-black font-weight-bold p-3 mt-3" style="background-color: #F2F2F2">國外旅遊史</div>
          <div class="row m-1 mt-3">
            <div class="col-lg-3">
              <div class="form-group">
                <label class="fs-0" for="name">國家</label>
                <input class="form-control text-secondary" id="name1053" type="text" value="輸入內容">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker1059">起始日期</label>
                <input class="form-control datetimepicker text-secondary" id="datepicker1059" type="text" value="年/月/日"
                       data-options='{"dateFormat":"y/m/d"}'>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker1066">結束日期</label>
                <input class="form-control datetimepicker text-secondary" id="datepicker1066" type="text" value="年/月/日"
                       data-options='{"dateFormat":"y/m/d"}'>
              </div>
            </div>
          </div>
''';

String strHtml9 = '''
          <div class="text-black font-weight-bold p-3 mt-3" style="background-color: #F2F2F2">外籍人士國外居住史</div>
          <div class="row m-1 mt-3">
            <div class="col-lg-3">
              <div class="form-group">
                <label class="fs-0" for="name">國家</label>
                <input class="form-control text-secondary" id="name" type="text" value="輸入內容">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker1082">離境日期</label>
                <input class="form-control datetimepicker text-secondary" id="datepicker1082" type="text" value="年/月/日"
                       data-options='{"dateFormat":"y/m/d"}'>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker1089">入境日期</label>
                <input class="form-control datetimepicker text-secondary" id="datepicker1089" type="text" value="年/月/日"
                       data-options='{"dateFormat":"y/m/d"}'>
              </div>
            </div>
          </div>
''';

String strHtml10 = '''
          <hr>
          <a href="#">＋ 新增一筆國外旅遊史</a>
          <div class="row ml-1 mr-1 mt-4">
            <div class="col-lg-6">
              <label class="fs-0" for="name">動物接觸史</label><br/>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline14" type="radio" name="customRadioInline6">
                <label class="custom-control-label fs-0" for="customRadioInline14">有</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input class="custom-control-input" id="customRadioInline15" type="radio" name="customRadioInline6">
                <label class="custom-control-label fs-0" for="customRadioInline15">無</label>
              </div>
            </div>
            <div class="col-lg-6">
              <label class="fs-0" for="exampleFormControlSelect881">接觸動物種類</label><br/>
              <select class="form-control text-secondary" id="exampleFormControlSelect881">
                <option>輸入內容</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
''';
String strHtml11 = '''
          <div class="row ml-1 mr-1 mt-4">
            <div class="col-lg-6">
              <div class="form-group">
                <label class="fs-0 font-weight-bold text-black">個案狀況維護與補充資料</label><br/>
                <label class="fs-0" for="name">重症診斷條件</label><br/>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline896" type="radio"
                         name="customRadioInline896">
                  <label class="custom-control-label fs-0" for="customRadioInline896">有</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" id="customRadioInline901" type="radio"
                         name="customRadioInline901">
                  <label class="custom-control-label fs-0" for="customRadioInline901">無</label>
                </div>
              </div>
            </div>
          </div>
''';
String strHtml12 = '''
          <div class="custom-control custom-checkbox ml-3 mb-2">
            <input class="custom-control-input" id="customCheck1139" type="checkbox">
            <label class="custom-control-label fs-0" for="customCheck1139">嚴重血漿滲漏導致休克</label>
          </div>
          <div class="custom-control custom-checkbox ml-3 mb-2">
            <input class="custom-control-input" id="customCheck1143" type="checkbox">
            <label class="custom-control-label fs-0" for="customCheck1143">嚴重出血(由臨床醫師評估)</label>
          </div>
          <div class="custom-control custom-checkbox ml-3 mb-2">
            <input class="custom-control-input" id="customCheck1147" type="checkbox">
            <label class="custom-control-label fs-0" for="customCheck1147">嚴重血漿滲漏導致體液蓄積及呼吸窘迫</label>
          </div>
          <div class="custom-control custom-checkbox ml-3 mb-2">
            <input class="custom-control-input" id="customCheck1151" type="checkbox">
            <label class="custom-control-label fs-0" for="customCheck1151">嚴重器官損傷</label>
          </div>
          <div class="row pl-4 pr-4 pt-4 pb-3" style="background-color: #F2F2F2">
            <div class="form-check form-check-inline col-md-6 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1156" value="option1">
              <label class="form-check-label fs-0" for="inlineCheckbox1156">肝臟(GOT或GPT或GPT>=1000UL)</label>
            </div>
            <div class="form-check form-check-inline col-md-5 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1160" value="option2">
              <label class="form-check-label fs-0" for="inlineCheckbox1160">中樞神經系統：意識受損</label>
            </div>
            <div class="form-check form-check-inline col-md-6 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1164" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox1164">心臟衰竭</label>
            </div>
            <div class="form-check form-check-inline col-md-5 pb-2">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1168" value="option3">
              <label class="form-check-label fs-0" for="inlineCheckbox1168">其他器官損傷</label>
              <input class="text-secondary ml-3 p-1" type="text" value="請填寫">
            </div>
          </div>
''';
String strHtml13 = '''
          <div class="mt-8 mb-4">
            <button type="button" class="btn pl-3 pr-3 text-white ml-3"
                    style="background-color: #0F7841">確定通報
            </button>
            <button type="button" class="btn pl-3 pr-3 text-white ml-3"
                    style="background-color: #0F7841">預覽通報單
            </button>
            <button type="button" class="btn pl-3 pr-3 text-white ml-3"
                    style="background-color: #00a65a">存成草稿
            </button>
            <button type="button" class="btn pl-3 pr-3 text-white ml-3"
                    style="background-color: #00a65a">清除重填
            </button>
          </div>
          ''';
