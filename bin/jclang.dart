import 'trelloData.dart';

/*
jclang v1.5
add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
add 起始日 /cards/customFieldItems/value/date
add 案件名稱 /cards/name
add 金額 /cards/customFieldItems/value/number
add 交期 /cards/due
add 人員 /cards/customFieldItems/idValue idCustomField=="*f3f0"
add 優先次序 /cards/labels/color
add 客戶 /cards/customFieldItems/value/text
add 階段 /cards/idList
add 產品類別 /cards/customFieldItems/idValue idCustomField=="*a129"
replace /cards/customFieldItems/idValue
/customFields/options/value/text ../id
*/

List lstIdValue = [];
String strCsv = '';

void processEachCard(Map mapCard) {
  strCsv += processIdValue(mapCard, '客源', '3a1b') + ',';
  strCsv += processIdValue(mapCard, '人員', 'f3f0') + ',';
  strCsv += processIdValue(mapCard, '產品類別', 'a129') + ',';
  strCsv += processCustomFieldItems(mapCard, '起始日', 'value', 'date') + ',';
  strCsv += processCustomFieldItems(mapCard, '金額', 'value', 'number') + ',';
  strCsv += processCustomFieldItems(mapCard, '客戶', 'value', 'text') + ',';
  strCsv += processSecondTier(mapCard, '案件名稱', 'name') + ',';
  strCsv += processSecondTier(mapCard, '交期', 'due') + ',';
  strCsv += processSecondTier(mapCard, '階段', 'idList') + ',';
  strCsv += processLabels(mapCard, '優先次序') + '\n';
}

void replaceIdValueToText(Map mapJson) {
  List lstCustomFields = mapJson['customFields'] ?? [];
  for (int i = 0; i < lstCustomFields.length; i++) {
    List lstOptions = lstCustomFields[i]['options'] ?? [];
    for (int j = 0; j < lstOptions.length; j++) {
      String strIdValue = lstOptions[j]['id'] ?? '';
      String strText = lstOptions[j]['value']['text'] ?? '';
      if (lstIdValue.contains(strIdValue)) {
        strCsv = strCsv.replaceAll(strIdValue, strText);
      }
    }
  }
}

void loopEachCard(Map mapJson) {
  print('jclang.dart/loopEachCard');
  List lstCards = mapJson['cards'];
  for (int i = 0; i < lstCards.length; i++) {
    Map mapCard = lstCards[i];
    processEachCard(mapCard);
    print('jclang.dart/loopEachCard/i:$i');
  }
}

void mainJclang() {
  print('jclang.dart/mainJclang');
  Map mapJson = getTrelloData();
  loopEachCard(mapJson);
  replaceIdValueToText(mapJson);
  print(strCsv);
}

String processLabels(Map mapCard, strName) {
  List lst = mapCard['labels'];
  String strResult = '';
  for (int i = 0; i < lst.length; i++) {
    try {
      strResult = lst[i]['color'];
    } catch (e) {
      strResult = null;
    }
    if (strResult != null) {
      print('jclang.dart/$strName,$strResult');
    }
  }
  return strResult;
}

String processSecondTier(Map mapCard, String strName, String strKey) {
  String strResult = mapCard[strKey] ?? '';
  if (strResult != null) {
    print('jclang.dart/strResult,$strName,$strResult');
  }
  return strResult;
}

String processCustomFieldItems(Map mapCard,
    String strName,
    String strKey1,
    String strKey2,) {
  String strResult = '';
  List lstCustomFieldItems = mapCard['customFieldItems'];
  for (int i = 0; i < lstCustomFieldItems.length; i++) {
    try {
      strResult = lstCustomFieldItems[i][strKey1][strKey2] ?? '';
    } catch (e) {
      strResult = '';
    }
    if (strResult != '') {
      print('jclang.dart/processCustomFieldItems,$strName,$strResult');
      break;
    }
  }
  return strResult;
}

String processIdValue(Map mapCard, String strName, String strEndsWith) {
  List lstCustomFieldItems = mapCard['customFieldItems'];
  String strResult = '';
  for (int i = 0; i < lstCustomFieldItems.length; i++) {
    String strIdValue = lstCustomFieldItems[i]['idValue'];
    String strIdCustomField = lstCustomFieldItems[i]['idCustomField'];
    if (strIdCustomField.endsWith(strEndsWith)) {
      strResult = strIdValue;
      print(
          'jclang.dart/processEachCard/strName:$strName,strIdValue:$strIdValue,strIdCustomField:$strIdCustomField');
    }
  }
  lstIdValue.add(strResult);
  return strResult;
}
