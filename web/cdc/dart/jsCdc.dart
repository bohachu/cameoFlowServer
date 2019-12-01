import 'dart:math';
import 'dart:convert';
import 'dart:html';
import '../../common/dart/httpGet.dart';
import 'dart:js';
import 'package:http/http.dart';

String jsonToHtmlAddRecord(Map map) {
  String strType = map['type'];
  String strTitle = map['title'] ?? '';
  if (strType != 'addRecord') return '';
  String strHtml = '''
    <a href="#">$strTitle</a><br/>
  ''';
  return strHtml;
}

void main() async {
  window.console.log('jsCdc.dart/main()');
  Map map = getUriParameters();
  String strReportDiseaseJsonFile = map['strReportDiseaseJsonFile'];
  String strJson = '';
  if (strReportDiseaseJsonFile == null) {
    strReportDiseaseJsonFile = '../json/reportDisease登革熱_bowen.json';
  } else {
    strReportDiseaseJsonFile = Uri.decodeFull(strReportDiseaseJsonFile);
  }
  /*
  http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease登革熱_bowen.json
  http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease鼠疫_caro.json
  http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease梅毒_caro.json
  */
  window.console.log('jsCdc.dart/strReportDiseaseJsonFile: $strReportDiseaseJsonFile');
  strJson = await httpGet(strReportDiseaseJsonFile);
  String strDiseaseName = getDiseaseName(strReportDiseaseJsonFile);
  List lstJson = jsonDecode(strJson);
  String strHtml = await scanJsonToHtml(lstJson);
  setInnerHtml(strHtml, strDiseaseName);
}

String getDiseaseName(String strReportDiseaseJsonFile) {
  //strReportDiseaseJsonFile="reportDisease鼠疫_caro.json"
  RegExp reg = RegExp(r"reportDisease([^\u0000]+)(_[^\u0000]+)");
  Iterable<Match> matches = reg.allMatches(strReportDiseaseJsonFile);
  String strDiseaseName = matches.elementAt(0).group(1);
  return strDiseaseName;
}

void setInnerHtml(String strHtml, String strDiseaseName) {
  final NodeValidatorBuilder nodeValidator = NodeValidatorBuilder.common()
    ..allowElement('a', attributes: ['href'])..allowElement('div', attributes: ['style'])..allowElement('img', attributes: ['src'])..allowElement(
      'button', attributes: ['style'])..allowElement('input', attributes: ['data-options'])..allowElement(
      'span', attributes: ['flow', 'tooltip'])..allowElement('i', attributes: ['style'])
    ..allowHtml5();
  querySelector('#reportDiseaseDartHtml').setInnerHtml(strHtml, validator: nodeValidator);
  querySelector('#strDiseaseName').setInnerHtml('您所選取要通報的疾病為：$strDiseaseName');
}

Future<String> scanJsonToHtml(List lstJson) async {
  Map mapTypeToCode = {
    'radio': jsonToHtmlRadio,
    'checkbox': jsonToHtmlCheckbox,
    'json': jsonToHtmlImportJson,
    'h2': jsonToHtmlH2,
    'h3': jsonToHtmlH3,
    'select': jsonToHtmlSelect,
    'input': jsonToHtmlInput,
    'date': jsonToHtmlDate,
    'addRecord': jsonToHtmlAddRecord,
  };
  String strHtml = '';
  for (int i = 0; i < lstJson.length; i++) {
    String strType = lstJson[i]['type'];
    if (mapTypeToCode[strType] != null) {
      strHtml += await mapTypeToCode[strType](lstJson[i]);
    }
  }
  return strHtml;
}

String jsonToHtmlDate(Map map) {
  String strType = map['type'];
  String strTitle = map['title'] ?? '';
  if (strType != 'date') return '';
  int intRandomId = Random().nextInt(99999);
  String strHtml = '''
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker$intRandomId">$strTitle</label>
                <input class="form-control datetimepicker text-secondary flatpickr-input active" id="datepicker$intRandomId" type="text" value="年/月/日" data-options="{&quot;dateFormat&quot;:&quot;y/m/d&quot;}" placeholder="y/m/d" readonly="readonly">
              </div>
            </div>  
            ''';
  return strHtml;
}

String jsonToHtmlInput(Map map) {
  String strType = map['type'];
  String strTitle = map['title'] ?? '';
  if (strType != 'input') return '';
  int intRandomId = Random().nextInt(99999);
  String strHtml = '''
  <div class="col-lg-3">
    <div class="form-group">
      <label class="fs-0" for="name$intRandomId">$strTitle</label>
      <input class="form-control text-secondary" id="name$intRandomId" type="text" value="輸入內容">
    </div>
  </div>
          ''';
  return strHtml;
}

String jsonToHtmlSelect(Map map) {
  String strType = map['type'];
  String strTitle = map['title'] ?? '';
  List lstList = map['list'];

  if (strType != 'select') return '';
  String strHtml = '';
  String strList = '';
  int intRandomId = Random().nextInt(99999);
  strList += '<option>輸入內容</option>';
  for (int i = 0; i < lstList.length; i++) {
    strList += '<option>${lstList[i]}</option>';
  }
  strHtml = '''
          <div class="col-lg-6">
          <label class="fs-0" for="formControlSelect${intRandomId}">$strTitle</label><br/>
          <select class="form-control text-secondary" id="formControlSelect${intRandomId}">
            $strList
          </select>
          </div>
          ''';
  return strHtml;
}

class JsonToHtmlH2 {
  final strTypeName = 'h2';
  String strType = '';
  String strTitle = '';

  JsonToHtmlH2(Map map) {
    strType = map['type'];
    strTitle = map['title'];
  }

  String getHtml() {
    if (strTypeName != strType) return '';
    return '''<hr/><label class="fs-1 font-weight-bold text-black">$strTitle</label><br/>''';
  }
}

class JsonToHtmlH3 extends JsonToHtmlH2 {
  final strTypeName = 'h3';

  JsonToHtmlH3(Map map) : super(map);

  String getHtml() => '''<hr/><label class="fs-0 font-weight-bold text-black">$strTitle</label><br/>''';
}

Future<String> jsonToHtmlImportJson(Map map) async {
  String strJson = await httpGet(map['file']);
  List lstJson = jsonDecode(strJson);
  String strHtml = await scanJsonToHtml(lstJson);
  return strHtml;
}

class JsonToHtmlRadio {
  final String strTypeName = 'radio';
  String strType = '';
  String strTitle = '';
  String strText = '';
  String strTip = '';
  String strHtmlTip = '';
  String strList = '';
  List lstList = [];
  String strHtml = '';
  int intRandomId = Random().nextInt(999999);

  JsonToHtmlRadio(Map map) {
    strType = map['type'];
    strTitle = map['title'] ?? '';
    strText = map['text'] ?? '';
    strTip = map['tip'] ?? '';
    lstList = map['list'];
  }

  void buildTip() {
    if (strTip != '') {
      strHtmlTip = '''
      <span tooltip=$strTip flow="right">
        <i class="fas fa-exclamation-circle" style="color: #00a65a;"></i>
      </span>
    ''';
    }
  }

  void buildList() {
    for (int i = 0; i < lstList.length; i++) {
      strList += getListTemplate(i);
    }
  }

  String getListTemplate(int i) => '''
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="customRadioInline${intRandomId + i}" 
                         name="customRadioInline$intRandomId">
                  <label class="custom-control-label fs-0" for="customRadioInline${intRandomId + i}">${lstList[i]}</label>
                </div>
  ''';

  buildAllHtml() {
    strHtml = '''
          <div class="row ml-1 mr-1">
              <div class="form-group">
                <label class="fs-0 font-weight-bold text-black">$strTitle</label><br/>
                <div class="ml-1 mb-1">$strText $strHtmlTip</div>
                  $strList
              </div>
          </div>
    ''';
  }

  void buildInput() {}

  String getHtml() {
    if (strType != strTypeName) return '';
    buildTip();
    buildList();
    buildInput();
    buildAllHtml();
    return strHtml;
  }
}

class JsonToHtmlCheckbox extends JsonToHtmlRadio {
  final String strTypeName = 'checkbox';
  String strInput = '';
  String strHtmlInput = '';

  JsonToHtmlCheckbox(Map map) : super(map) {
    strInput = map['input'] ?? '';
  }

  String getListTemplate(int i) => '''
    <div class="form-check form-check-inline pb-2">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox${intRandomId + i}" value="option${intRandomId + i}">
    <label class="form-check-label fs-0" for="inlineCheckbox${intRandomId + i}">${lstList[i]}</label>
    </div>
  ''';

  void buildInput() {
    if (strInput != '') {
      strHtmlInput = '''            
    <div class="form-check form-check-inline pb-2">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox${intRandomId + 200}" value="option${intRandomId}">
      <label class="form-check-label fs-0" for="inlineCheckbox${intRandomId + 200}">$strInput</label>
      <input class="text-secondary ml-3 p-1" type="text" value="輸入內容">
    </div>
    ''';
    }
  }

  void buildAllHtml() {
    strHtml = '''
          <div class="row pl-4 pr-4 pt-4 pb-4" style="background-color: #F2F2F2">
            $strList
            $strHtmlInput
          </div>
          ''';
  }
}

String jsonToHtmlRadio(Map map) => JsonToHtmlRadio(map).getHtml();

String jsonToHtmlCheckbox(Map map) => JsonToHtmlCheckbox(map).getHtml();

String jsonToHtmlH2(Map map) => JsonToHtmlH2(map).getHtml();

String jsonToHtmlH3(Map map) => JsonToHtmlH3(map).getHtml();
