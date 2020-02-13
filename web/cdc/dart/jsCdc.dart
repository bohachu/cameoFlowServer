import 'dart:math';
import 'dart:convert';
import 'dart:html';
import '../../common/dart/httpGet.dart';
import '../../common/dart/stringUtil.dart';

Future<String> scanJsonToHtml(List lstJson) async {
  Map mapTypeToCode = {
    'diseaseName': JsonToHtmlDiseaseName(),
    'radio': JsonToHtmlRadio(),
    'radioBig': JsonToHtmlRadioCol6(),
    'radioNormal': JsonToHtmlRadioCol4(),
    'radioSmall': JsonToHtmlRadioCol3(),
    'checkbox': JsonToHtmlCheckbox(),
    'checkboxBig': JsonToHtmlCheckboxCol6(),
    'checkboxSmall': JsonToHtmlCheckboxCol3(),
    'json': JsonToHtmlImportJson(),
    'h2': JsonToHtmlH2(),
    'h3': JsonToHtmlH3(),
    'h4': JsonToHtmlH4(),
    'select': JsonToHtmlSelect(),
    'selectBig': JsonToHtmlSelectCol6(),
    'selectSmall': JsonToHtmlSelectCol3(),
    'input': JsonToHtmlInput(),
    'inputBig': JsonToHtmlInputCol6(),
    'inputSmall': JsonToHtmlInputCol3(),
    'date': JsonToHtmlDate(),
    'dateBig': JsonToHtmlDateCol6(),
    'dateSmall': JsonToHtmlDateCol3(),
    'addRecord': JsonToHtmlAddRecord(),
    'htmlSource': JsonToHtmlSource(),
    'htmlFile': JsonToHtmlFile(),
    'InputOneLine': InputOneLine(),
    'CheckboxOneLine': CheckboxOneLine(),
    'TitleOneLine': TitleOneLine(),
    'TitleOneLineFs0': TitleOneLineFs0(),
    'Radio2OptionsOneLine': Radio2OptionsOneLine(),
    'Radio4OptionsOneLine': Radio4OptionsOneLine(),
    'SelectOneLine': SelectOneLine(),
    'DateOneLine': DateOneLine(),
  };
  String strHtml = '';
  for (int i = 0; i < lstJson.length; i++) {
    String strType = lstJson[i]['type'];
    Map map = lstJson[i];
    strHtml += await mapTypeToCode[strType].getHtml(map);
  }
  return strHtml;
}

class DateOneLine extends JsonToHtml {
  Future<String> getTags() async {
    return '''    
      <label class="pt-2 fs-0">$strTitle</label>
      <input class="col-2 form-control text-secondary" type="text" placeholder="年/月/日">
    ''';
  }
}

class SelectOneLine extends JsonToHtml {
  Future<String> getTags() async {
    return '''    
      <label class="pt-2 fs-0">$strTitle</label>
      <select class="col-2 form-control text-secondary">
        <option>請選擇</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    ''';
  }
}

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
  RegExp reg = RegExp(
      r"disease_([^\u0000]+)(.json)"); //strReportDiseaseJsonFile="disease_鼠疫.json"
  Iterable<Match> matches = reg.allMatches(strReportDiseaseJsonFile);
  String strDiseaseName = matches.elementAt(0).group(1);
  return strDiseaseName;
}

void setInnerHtml(String strHtml, String strDiseaseName) {
  querySelector('#reportDiseaseDartHtml')
      .setInnerHtml(strHtml, treeSanitizer: NodeTreeSanitizer.trusted);
  querySelector('#strDiseaseName').setInnerHtml('通報疾病：$strDiseaseName');
}

class TitleOneLine extends JsonToHtml {
  Future<String> getTags() async {
    return '''
      <span class="pt-1 fs-1 font-weight-bold text-black">$strTitle</span>
    ''';
  }
}

class TitleOneLineFs0 extends JsonToHtml {
  Future<String> getTags() async {
    return '''
      <span class="pt-1 fs-0 font-weight-bold text-black">$strTitle</span>
    ''';
  }
}

class Radio2OptionsOneLine extends JsonToHtml {
  Future<String> getTags() async {
    String strOption1 = this.map['option1'] ?? '';
    String strOption2 = this.map['option2'] ?? '';
    return '''
      <div class="pt-2 pl-4 custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0">
          $strOption1
        </label>
      </div>
      <div class="pt-2 pl-4 custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0">
          $strOption2
        </label>
      </div>
    ''';
  }
}

class Radio4OptionsOneLine extends JsonToHtml {
  Future<String> getTags() async {
    String strOption1 = this.map['option1'] ?? '';
    String strOption2 = this.map['option2'] ?? '';
    String strOption3 = this.map['option3'] ?? '';
    String strOption4 = this.map['option4'] ?? '';
    return '''
      <div class="pt-1 pl-4 custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0">
          $strOption1
        </label>
      </div>
      <div class="pt-1 pl-4 custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0">
          $strOption2
        </label>
      </div>
      <div class="pt-1 pl-4 custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0">
          $strOption3
        </label>
      </div>
      <div class="pt-1 pl-4 custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input">
        <label class="custom-control-label fs-0">
          $strOption4
        </label>
      </div>
    ''';
  }
}

class CheckboxOneLine extends JsonToHtml {
  Future<String> getTags() async {
    String strList = '';
    for (int i = 0; i < lstList.length; i++) {
      strList += '''
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label class="form-check-label fs-0">${lstList[i]}</label>
        </div>      
      ''';
    }
    String strHtml = '''
        <b class="pr-3">$strTitle</b>
        $strList
    ''';
    return strHtml;
  }
}

class InputOneLine extends JsonToHtml {
  Future<String> getTags() async {
    return '''
      <div class="form-group form-inline $strCol">
        <b>$strTitle</b> <input class="form-control text-secondary ml-2" type="text" placeholder="$strText">
      </div>    
      ''';
  }
}

class JsonToHtmlSource extends JsonToHtml {
  Future<String> getTags() async => this.strText;
}

class JsonToHtmlFile extends JsonToHtml {
  Future<String> getTags() async {
    String strHtml = await httpGet(map['file']);
    return strHtml;
  }
}

class JsonToHtmlDate extends JsonToHtml {
  static String getHtmlDate(int intRandomId, String strTitle) => replaceAll(
      '.JsonToHtmlDate_getHtmlDate',
      {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});

  Future<String> getTags() async => getHtmlDate(intRandomId, strTitle);
}

class JsonToHtmlDateCol6 extends JsonToHtml {
  static String getHtmlDate(int intRandomId, String strTitle) => replaceAll(
      '.JsonToHtmlDateCol6_getHtmlDate',
      {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});

  Future<String> getTags() async => getHtmlDate(intRandomId, strTitle);
}

class JsonToHtmlDateCol3 extends JsonToHtml {
  static String getHtmlDate(int intRandomId, String strTitle) => replaceAll(
      '.JsonToHtmlDateCol3_getHtmlDate',
      {'\$strTitle': '$strTitle', '\$intRandomId': '$intRandomId'});

  Future<String> getTags() async => getHtmlDate(intRandomId, strTitle);
}

class JsonToHtmlInput extends JsonToHtml {
  String strClassTag = '.JsonToHtmlInput_getTags';

  Future<String> getTags() async {
    if (strText == null || strText == '') {
      strText = '輸入內容';
    }
    return replaceAll(strClassTag, {
      '\$strTitle': '$strTitle',
      '\$intRandomId': '$intRandomId',
      '\$strText': '$strText'
    });
  }
}

class JsonToHtmlInputCol6 extends JsonToHtmlInput {
  String strClassTag = '.JsonToHtmlInputCol6_getTags';
}

class JsonToHtmlInputCol3 extends JsonToHtmlInput {
  String strClassTag = '.JsonToHtmlInputCol3_getTags';
}

class JsonToHtmlSelect extends JsonToHtmlRadio {
  String getListTemplate(int i) => '<option>${lstList[i]}</option>';

  buildHtmlAll() {
    strList = '<option>請選擇</option>' + strList;
    strHtmlAll = replaceAll('.JsonToHtmlSelect_buildHtmlAll', {
      '\$intRandomId': '$intRandomId',
      '\$strTitle': '$strTitle',
      '\$strList': '$strList'
    });
  }
}

class JsonToHtmlSelectCol6 extends JsonToHtmlRadio {
  String getListTemplate(int i) => '<option>${lstList[i]}</option>';

  buildHtmlAll() {
    strList = '<option>請選擇</option>' + strList;
    strHtmlAll = replaceAll('.JsonToHtmlSelectCol6_buildHtmlAll', {
      '\$intRandomId': '$intRandomId',
      '\$strTitle': '$strTitle',
      '\$strList': '$strList'
    });
  }
}

class JsonToHtmlSelectCol3 extends JsonToHtmlRadio {
  String getListTemplate(int i) => '<option>${lstList[i]}</option>';

  buildHtmlAll() {
    strList = '<option>請選擇</option>' + strList;
    strHtmlAll = replaceAll('.JsonToHtmlSelectCol3_buildHtmlAll', {
      '\$intRandomId': '$intRandomId',
      '\$strTitle': '$strTitle',
      '\$strList': '$strList'
    });
  }
}

class JsonToHtml {
  String strType = '';
  String strTitle = '';
  String strText = '';
  String strTip = '';
  String strCol = '';
  String strRowStart = '';
  String strRowEnd = '';
  List lstList = [];
  int intRandomId;
  Map map = {};

  init(Map map) {
    strType = map['type'] ?? '';
    strTitle = map['title'] ?? '';
    strText = map['text'] ?? '';
    strTip = map['tip'] ?? '';
    strCol = map['col'] ?? '';
    strRowStart = map['rowStart'] ?? '';
    strRowEnd = map['rowEnd'] ?? '';
    lstList = map['list'];
    intRandomId = Random().nextInt(999999);
    this.map = map;
  }

  Future<String> getHtml(Map map) async {
    this.init(map);
    return '$strRowStart ${await getTags()} $strRowEnd';
  }

  Future<String> getTags() async {
    return '<div>Overrides html content here</div>';
  }
}

class JsonToHtmlDiseaseName extends JsonToHtml {
  //Future<String> getTags() async => strTitle;
  Future<String> getTags() async =>
      ''; //return empty string, 不要顯示小小的疾病名稱，因為上方已經有根據底線檔案名稱顯示了
}

class JsonToHtmlH2 extends JsonToHtml {
  final strFontSize = 'fs-2';
  final strHr = '<hr/>';
  String strCheckboxTitle = '';

  init(Map map) {
    super.init(map);
    strCheckboxTitle = map['checkboxTitle'] ?? '';
  }

  Future<String> getTags() async {
    String strHtmlTip = '';

    if (strTip != '' && strTip != null) {
      strHtmlTip = '''
      <span class="JsonToHtmlH2_tip fs-0" style="font-weight:400" tooltip="$strTip" flow="right">
      <i class="fas fas fa-info-circle" style="color: #00a65a;"></i>
      </span>''';
    }

    //20200126 bowen: 如果有checkbox手動寫在JSON標題上面，注意左邊要留白多一點不然會太左邊超出邊界。另外如果沒有手動checkbox則左邊留白別太多
//    if (strTitle.contains("type='checkbox'>")) {
//      strMl = 'ml-5 jsCdc_dart_type_checkbox001';
//    } else {
//      strMl = 'ml-3 jsCdc_dart_type_checkbox002';
//    }

    if (strCheckboxTitle.length > 0) {
      String strZoom = 'zoom:150%';
      if (strType == 'h3') strZoom = 'zoom:175%';
      strCheckboxTitle = ''' 
        <span><input class="form-check-input pretty-h3-checkbox" type="checkbox" style="$strZoom"></span> 
        <span class="mt-0 pt-0">$strCheckboxTitle</span>
      ''';
      //strMl = 'ml-5 jsCdc_dart_type_checkbox003';
    }

    //h2 h3 h4 mt高度在此設定
    String strHtml = '''
        <div class="row ml-0 pl-0 mt-0 mb-2 font-weight-bold text-black $strFontSize">
          $strTitle
          $strCheckboxTitle
          $strHtmlTip
        </div>
    ''';

    return strHtml;
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
  String strHtmlTip;
  String strList;
  String strHtmlAll;
  String strDate;
  String strHtmlDate;

  init(Map map) {
    super.init(map);
    strHtmlTip = '';
    strList = '';
    strHtmlAll = '';
    strDate = map['date'];
    strHtmlDate = '';
  }

  void buildTip() {
    if (strTip != '') {
      strHtmlTip =
          replaceAll('.JsonToHtmlRadio_buildTip', {'\$strTip': '$strTip'});
    }
  }

  void buildList() {
    for (int i = 0; i < lstList.length; i++) {
      strList += getListTemplate(i);
    }
  }

  String getListTemplate(int i) =>
      replaceAll('.JsonToHtmlRadio_getListTemplate', {
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

  Future<String> getTags() async {
    init(map);
    buildTip();
    buildList();
    buildInput();
    buildDate();
    buildHtmlAll();
    return strHtmlAll;
  }
}

class JsonToHtmlRadioCol6 extends JsonToHtmlRadio {
  @override
  buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlRadioCol6_buildHtmlAll', {
      '\$strTitle': '$strTitle',
      '\$strText': '$strText',
      '\$strHtmlTip': '$strHtmlTip',
      '\$strList': '$strList',
      '\$strHtmlDate': '$strHtmlDate',
    });
  }
}

class JsonToHtmlRadioCol4 extends JsonToHtmlRadio {
  @override
  buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlRadioCol4_buildHtmlAll', {
      '\$strTitle': '$strTitle',
      '\$strText': '$strText',
      '\$strHtmlTip': '$strHtmlTip',
      '\$strList': '$strList',
      '\$strHtmlDate': '$strHtmlDate',
    });
  }
}

class JsonToHtmlRadioCol3 extends JsonToHtmlRadio {
  @override
  buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlRadioCol3_buildHtmlAll', {
      '\$strTitle': '$strTitle',
      '\$strText': '$strText',
      '\$strHtmlTip': '$strHtmlTip',
      '\$strList': '$strList',
      '\$strHtmlDate': '$strHtmlDate',
    });
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
      replaceAll('.JsonToHtmlCheckbox_getCheckboxWithLabel', {
        '\${intRandomId + i}': '${intRandomId + i}',
        '\${strLabel}': '${strLabel}'
      });

  String getInputWithLabel(String strLabel) =>
      replaceAll('.JsonToHtmlCheckbox_getInputWithLabel', {
        '\${intRandomId + 200}': '${intRandomId + 200}',
        '\${intRandomId}': '${intRandomId}',
        '\$strLabel': '$strLabel'
      });

  void buildInput() {
    if (strInput != '') {
      strHtmlInput = getInputWithLabel(strInput);
    }
  }

  void buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlCheckbox_buildHtmlAll', {
      '\$strTitle': '$strTitle',
      '\$strList': '$strList',
      '\$strHtmlInput': '$strHtmlInput'
    });
  }
}

class JsonToHtmlCheckboxCol6 extends JsonToHtmlCheckbox {
  @override
  String getCheckboxWithLabel(int i, String strLabel) =>
      replaceAll('.JsonToHtmlCheckboxCol6_getCheckboxWithLabel', {
        '\${intRandomId + i}': '${intRandomId + i}',
        '\${strLabel}': '${strLabel}'
      });

  @override
  String getInputWithLabel(String strLabel) =>
      replaceAll('.JsonToHtmlCheckboxCol6_getInputWithLabel', {
        '\${intRandomId + 200}': '${intRandomId + 200}',
        '\${intRandomId}': '${intRandomId}',
        '\$strLabel': '$strLabel'
      });

  @override
  void buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlCheckboxCol6_buildHtmlAll',
        {'\$strList': '$strList', '\$strHtmlInput': '$strHtmlInput'});
  }
}

class JsonToHtmlCheckboxCol3 extends JsonToHtmlCheckbox {
  @override
  String getCheckboxWithLabel(int i, String strLabel) =>
      replaceAll('.JsonToHtmlCheckboxCol3_getCheckboxWithLabel', {
        '\${intRandomId + i}': '${intRandomId + i}',
        '\${strLabel}': '${strLabel}'
      });

  @override
  String getInputWithLabel(String strLabel) =>
      replaceAll('.JsonToHtmlCheckboxCol3_getInputWithLabel', {
        '\${intRandomId + 200}': '${intRandomId + 200}',
        '\${intRandomId}': '${intRandomId}',
        '\$strLabel': '$strLabel'
      });

  @override
  void buildHtmlAll() {
    strHtmlAll = replaceAll('.JsonToHtmlCheckboxCol3_buildHtmlAll',
        {'\$strList': '$strList', '\$strHtmlInput': '$strHtmlInput'});
  }
}
