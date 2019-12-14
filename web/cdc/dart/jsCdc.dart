import 'dart:math';
import 'dart:convert';
import 'dart:html';
import '../../common/dart/httpGet.dart';
import '../../common/dart/stringUtil.dart';

class JsonToHtmlAddRecord extends JsonToHtml {
  Future<String> getTags() async => '<a href="#">$strTitle</a><br/>';
}

void main() async {
  window.console.log('jsCdc.dart/main()');

  Map map = getUriParameters();
  String strDiseaseFile = map['strDiseaseFile'];
  String strJson = '';
  if (strDiseaseFile == null) {
    strDiseaseFile = '../json/disease_登革熱.json';
    //strDiseaseFile = '../json/disease_梅毒.json';
    //strDiseaseFile='../json/disease_鼠疫.json';
  } else {
    strDiseaseFile = Uri.decodeFull(strDiseaseFile);
  }
  window.console.log('jsCdc.dart/strDiseaseFile: $strDiseaseFile');
  strJson = await httpGet(strDiseaseFile);
  String strDiseaseName = getDiseaseName(strDiseaseFile);
  List lstJson = jsonDecode(strJson);
  String strHtml = await scanJsonToHtml(lstJson);
  setInnerHtml(strHtml, strDiseaseName);
}

String getDiseaseName(String strReportDiseaseJsonFile) {
  //strReportDiseaseJsonFile="disease_鼠疫.json"
  RegExp reg = RegExp(r"disease_([^\u0000]+)(.json)");
  Iterable<Match> matches = reg.allMatches(strReportDiseaseJsonFile);
  String strDiseaseName = matches.elementAt(0).group(1);
  return strDiseaseName;
}

void setInnerHtml(String strHtml, String strDiseaseName) {
  querySelector('#reportDiseaseDartHtml').setInnerHtml(strHtml, treeSanitizer: NodeTreeSanitizer.trusted);
  querySelector('#strDiseaseName').setInnerHtml('您所選取要通報的疾病為：$strDiseaseName');
}

Future<String> scanJsonToHtml(List lstJson) async {
  Map mapTypeToCode = {
    'diseaseName': JsonToHtmlDiseaseName(),
    'radio': JsonToHtmlRadio(),
    'checkbox': JsonToHtmlCheckbox(),
    'json': JsonToHtmlImportJson(),
    'h2': JsonToHtmlH2(),
    'h3': JsonToHtmlH3(),
    'h4': JsonToHtmlH4(),
    'select': JsonToHtmlSelect(),
    'input': JsonToHtmlInput(),
    'date': JsonToHtmlDate(),
    'addRecord': JsonToHtmlAddRecord(),
  };
  String strHtml = '';
  for (int i = 0; i < lstJson.length; i++) {
    String strType = lstJson[i]['type'];
    Map map = lstJson[i];
    strHtml += await mapTypeToCode[strType].getHtml(map);
  }
  return strHtml;
}

class JsonToHtmlDate extends JsonToHtml {
  static String getHtmlDate(int intRandomId, String strTitle) {
    return '''
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="name$intRandomId">$strTitle</label>
                <input class="form-control text-secondary" id="name$intRandomId" type="text" value="年/月/日">
              </div>
            </div>
    ''';

    /*
    return '''
            <div class="col-lg-4">
              <div class="form-group">
                <label class="fs-0" for="datepicker$intRandomId">$strTitle</label>
                <input class="form-control datetimepicker text-secondary flatpickr-input active" id="datepicker$intRandomId" type="text" data-options="{&quot;dateFormat&quot;:&quot;y/m/d&quot;}" placeholder="y/m/d" readonly="readonly">
              </div>
            </div>
            ''';
     */
  }

  Future<String> getTags() async => getHtmlDate(intRandomId, strTitle);
}

class JsonToHtmlInput extends JsonToHtml {
  Future<String> getTags() async {
    return '''
  <div class="col-lg-3">
    <div class="form-group">
      <label class="fs-0" for="name$intRandomId">$strTitle</label>
      <input class="form-control text-secondary" id="name$intRandomId" type="text" value="輸入內容">
    </div>
  </div>
          ''';
  }
}

class JsonToHtmlSelect extends JsonToHtmlRadio {
  String getListTemplate(int i) => '<option>${lstList[i]}</option>';

  buildHtmlAll() {
    strList = '<option>輸入內容</option>' + strList;
    strHtmlAll = '''
          <div class="col-lg-6">
          <label class="fs-0" for="formControlSelect${intRandomId}">$strTitle</label><br/>
          <select class="form-control text-secondary" id="formControlSelect${intRandomId}">
            $strList
          </select>
          </div>
    ''';
  }
}

class JsonToHtml {
  String strType = '';
  String strTitle = '';
  String strText = '';
  int intRandomId;

  init(Map map) {
    strType = map['type'] ?? '';
    strTitle = map['title'] ?? '';
    strText = map['text'] ?? '';
    intRandomId = Random().nextInt(999999);
  }

  Future<String> getHtml(Map map) async {
    init(map);
    return getTags();
  }

  Future<String> getTags() async {
    return '<div>Overrides html content here</div>';
  }
}

class JsonToHtmlDiseaseName extends JsonToHtml {
  Future<String> getTags() async => strTitle;
}

class JsonToHtmlH2 extends JsonToHtml {
  final strFontSize = 'fs-2';
  final strHr = '<hr/>';

  Future<String> getTags() async {
    Map map = {
      '\$strTitle': '$strTitle',
      '\$strFontSize': '$strFontSize',
      '\$strHr': '$strHr',
    };
    return replaceAll(querySelector('.h2').outerHtml, map);
  }
}

class JsonToHtmlH3 extends JsonToHtmlH2 {
  final strFontSize = 'fs-1';
  final strHr = '';
}

class JsonToHtmlH4 extends JsonToHtmlH2 {
  final strFontSize = 'fs-0';
  final strHr = '';
}

class JsonToHtmlImportJson {
  Future<String> getHtml(Map map) async {
    String strJson = await httpGet(map['file']);
    List lstJson = jsonDecode(strJson);
    String strHtml = await scanJsonToHtml(lstJson);
    return strHtml;
  }
}

class JsonToHtmlRadio extends JsonToHtml {
  String strTip;
  String strHtmlTip;
  String strList;
  List lstList;
  String strHtmlAll;
  String strDate;
  String strHtmlDate;

  init(Map map) {
    super.init(map);
    strTip = map['tip'] ?? '';
    strHtmlTip = '';
    strList = '';
    lstList = map['list'];
    strHtmlAll = '';
    strDate = map['date'];
    strHtmlDate = '';
  }

  void buildTip() {
    if (strTip != '') {
      String strHtml = querySelector('.radio_strTip').outerHtml;
      strHtmlTip = replaceAll(strHtml, {'\$strTip': '$strTip'});
    }
  }

  void buildList() {
    for (int i = 0; i < lstList.length; i++) {
      strList += getListTemplate(i);
    }
  }

  String getListTemplate(int i) => replaceAll(querySelector('.radio_strList').outerHtml, {
        '\${intRandomId + i}': '${intRandomId + i}',
        '\$intRandomId': '$intRandomId',
        '\${lstList[i]}': '${lstList[i]}',
      });

  buildHtmlAll() {
    strHtmlAll = replaceAll(querySelector('.radio_strSkeleton').outerHtml, {
      '\$strTitle': '$strTitle',
      '\$strText': '$strText',
      '\$strHtmlTip': '$strHtmlTip',
      '\$strList': '$strList',
      '\$strHtmlDate': '$strHtmlDate',
    });
  }

  void buildInput() {}

  void buildDate() {
    if (strDate != null && strDate != '') {
      strHtmlDate = JsonToHtmlDate.getHtmlDate(intRandomId, strDate);
    }
  }

  Future<String> getHtml(Map map) async {
    init(map);
    buildTip();
    buildList();
    buildInput();
    buildDate();
    buildHtmlAll();
    return strHtmlAll;
  }
}

class JsonToHtmlCheckbox extends JsonToHtmlRadio {
  String strInput;
  String strHtmlInput;

  init(Map map) {
    super.init(map);
    strInput = map['input'] ?? '';
    strHtmlInput = '';
  }

  String getListTemplate(int i) {
    if (lstList[i] is String) {
      return getCheckboxWithLabel(i, lstList[i]);
    }
    if (lstList[i] is List) {
      String strCheckboxType = lstList[i][0];
      if (strCheckboxType == 'checkbox') {
        return getCheckboxWithLabel(i, lstList[i][1]);
      }
      if (strCheckboxType == 'input') {
        return getInputWithLabel(lstList[i][1]);
      }
    }
    return '';
  }

  String getCheckboxWithLabel(int i, String strLabel) {
    return '''
      <div class="form-check form-check-inline pb-2">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox${intRandomId + i}" value="option${intRandomId + i}">
        <label class="form-check-label fs-0" for="inlineCheckbox${intRandomId + i}">${strLabel}</label>
      </div>
    ''';
  }

  String getInputWithLabel(String strLabel) {
    return '''
      <div class="form-check form-check-inline pb-2">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox${intRandomId + 200}" value="option${intRandomId}">
        <label class="form-check-label fs-0" for="inlineCheckbox${intRandomId + 200}">$strLabel</label>
        <input class="text-secondary ml-3 p-1" type="text" value="輸入內容">
      </div>
    ''';
  }

  void buildInput() {
    if (strInput != '') {
      strHtmlInput = getInputWithLabel(strInput);
    }
  }

  void buildHtmlAll() {
    strHtmlAll = '''
          <div class="row pl-4 pr-4 pt-4 pb-4" style="background-color: #F2F2F2">
            $strList
            $strHtmlInput
          </div>
          ''';
  }
}
