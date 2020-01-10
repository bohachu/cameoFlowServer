import 'dart:math';
import 'dart:convert';
import 'dart:html';
import '../../common/dart/httpGet.dart';
import '../../common/dart/stringUtil.dart';

class JsonToHtmlAddRecord extends JsonToHtml {
  Future<String> getTags() async => replaceAll('.JsonToHtmlAddRecord_getTags', {
        '\$strTitle': '$strTitle',
      });
}

void main() async {
  window.console.log('jsCdc.dart/main()');

  Map map = getUriParameters();
  String strDiseaseFile = map['strDiseaseFile'];
  String strJson = '';
  if (strDiseaseFile == null) {
    strDiseaseFile = '../json/disease_登革熱.json';
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
  RegExp reg = RegExp(r"disease_([^\u0000]+)(.json)"); //strReportDiseaseJsonFile="disease_鼠疫.json"
  Iterable<Match> matches = reg.allMatches(strReportDiseaseJsonFile);
  String strDiseaseName = matches.elementAt(0).group(1);
  return strDiseaseName;
}

void setInnerHtml(String strHtml, String strDiseaseName) {
  querySelector('#reportDiseaseDartHtml').setInnerHtml(strHtml, treeSanitizer: NodeTreeSanitizer.trusted);
  querySelector('#strDiseaseName').setInnerHtml('通報疾病：$strDiseaseName');
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
    'selectBig':JsonToHtmlSelectCol6(),
    'selectSmall':JsonToHtmlSelectCol3(),
    'input': JsonToHtmlInput(),
    'inputBig':JsonToHtmlInputCol6(),
    'inputSmall':JsonToHtmlInputCol3(),
    'date': JsonToHtmlDate(),
    'dateBig':JsonToHtmlDateCol6(),
    'dateSmall':JsonToHtmlDateCol3(),
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
  static String getHtmlDate(int intRandomId, String strTitle) =>
      replaceAll('.JsonToHtmlDate_getHtmlDate', {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});

  Future<String> getTags() async => getHtmlDate(intRandomId, strTitle);
}

class JsonToHtmlDateCol6 extends JsonToHtml {
  static String getHtmlDate(int intRandomId, String strTitle) =>
      replaceAll('.JsonToHtmlDateCol6_getHtmlDate', {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});

  Future<String> getTags() async => getHtmlDate(intRandomId, strTitle);
}

class JsonToHtmlDateCol3 extends JsonToHtml {
  static String getHtmlDate(int intRandomId, String strTitle) =>
      replaceAll('.JsonToHtmlDateCol3_getHtmlDate', {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});

  Future<String> getTags() async => getHtmlDate(intRandomId, strTitle);
}

class JsonToHtmlInput extends JsonToHtml {
  Future<String> getTags() async => replaceAll('.JsonToHtmlInput_getTags', {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});
}

class JsonToHtmlInputCol6 extends JsonToHtml {
  Future<String> getTags() async => replaceAll('.JsonToHtmlInputCol6_getTags', {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});
}

class JsonToHtmlInputCol3 extends JsonToHtml {
  Future<String> getTags() async => replaceAll('.JsonToHtmlInputCol3_getTags', {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});
}

class JsonToHtmlSelect extends JsonToHtmlRadio {
  String getListTemplate(int i) => '<option>${lstList[i]}</option>';
  buildHtmlAll() {
    strList = '<option>請選擇</option>' + strList;
    strHtmlAll = replaceAll('.JsonToHtmlSelect_buildHtmlAll', {'\$intRandomId': '$intRandomId', '\$strTitle': '$strTitle', '\$strList': '$strList'});
  }
}

class JsonToHtmlSelectCol6 extends JsonToHtmlRadio {
  String getListTemplate(int i) => '<option>${lstList[i]}</option>';
  buildHtmlAll() {
    strList = '<option>請選擇</option>' + strList;
    strHtmlAll = replaceAll('.JsonToHtmlSelectCol6_buildHtmlAll', {'\$intRandomId': '$intRandomId', '\$strTitle': '$strTitle', '\$strList': '$strList'});
  }
}

class JsonToHtmlSelectCol3 extends JsonToHtmlRadio {
  String getListTemplate(int i) => '<option>${lstList[i]}</option>';
  buildHtmlAll() {
    strList = '<option>請選擇</option>' + strList;
    strHtmlAll = replaceAll('.JsonToHtmlSelectCol3_buildHtmlAll', {'\$intRandomId': '$intRandomId', '\$strTitle': '$strTitle', '\$strList': '$strList'});
  }
}

class JsonToHtml {
  String strType = '';
  String strTitle = '';
  String strText = '';
  String strTip = '';
  int intRandomId;

  init(Map map) {
    strType = map['type'] ?? '';
    strTitle = map['title'] ?? '';
    strText = map['text'] ?? '';
    strTip = map['tip'] ?? '';
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
  //Future<String> getTags() async => strTitle;
  Future<String> getTags() async => ''; //return empty string, 不要顯示小小的疾病名稱，因為上方已經有根據底線檔案名稱顯示了
}

class JsonToHtmlH2 extends JsonToHtml {
  final strFontSize = 'fs-2';
  final strHr = '<hr/>';

  Future<String> getTags() async {
    String strHtmlTip = '';

    if (strTip != '' && strTip != null) {
      strHtmlTip = '''
      <span class="JsonToHtmlH2_tip" tooltip="$strTip" flow="right">
      <i class="fas fas fa-info-circle" style="color: #00a65a;"></i>
      </span>''';
    }

    Map map = {
      '\$strTitle': '$strTitle',
      '\$strFontSize': '$strFontSize',
      '\$strHr': '$strHr',
      '\$strHtmlTip': '$strHtmlTip',
    };

    return replaceAll('.JsonToHtmlH2', map);
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
      strHtmlTip = replaceAll('.JsonToHtmlRadio_buildTip', {'\$strTip': '$strTip'});
    }
  }

  void buildList() {
    for (int i = 0; i < lstList.length; i++) {
      strList += getListTemplate(i);
    }
  }

  String getListTemplate(int i) => replaceAll('.JsonToHtmlRadio_getListTemplate', {
        '\${intRandomId + i}': '${intRandomId + i}',
        '\$intRandomId': '$intRandomId',
        '\${lstList[i]}': '${lstList[i]}',
      });

  buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlRadio_buildHtmlAll', {
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

  String getCheckboxWithLabel(int i, String strLabel) =>
      replaceAll('.JsonToHtmlCheckbox_getCheckboxWithLabel', {'\${intRandomId + i}': '${intRandomId + i}', '\${strLabel}': '${strLabel}'});

  String getInputWithLabel(String strLabel) => replaceAll('.JsonToHtmlCheckbox_getInputWithLabel',
      {'\${intRandomId + 200}': '${intRandomId + 200}', '\${intRandomId}': '${intRandomId}', '\$strLabel': '$strLabel'});

  void buildInput() {
    if (strInput != '') {
      strHtmlInput = getInputWithLabel(strInput);
    }
  }

  void buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlCheckbox_buildHtmlAll', {'\$strList': '$strList', '\$strHtmlInput': '$strHtmlInput'});
  }
}
