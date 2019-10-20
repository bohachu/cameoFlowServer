//import 'trelloData.dart';
import 'dart:convert';
import 'dart:io';

import 'package:logging/logging.dart';

import 'fetchTrello.dart';

final Logger log = Logger('staticWeb.dart');

void initLog() {
  Logger.root.level = Level.ALL; // defaults to Level.INFO
  Logger.root.onRecord.listen((record) {
    print('${record.level.name}: ${record.time}: ${record.message}');
  });
}

/*
jclang v1.6
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
replace /cards/customFieldItems/idValue /customFields/options/value/text ../id
replace /lists/id /lists/name
*/

List lstIdValue = [];
String strOutput = '';

void mainJclang() async {
  initLog();
  log.fine('jclang.dart/mainJclang/String strJson=await fetchTrello();');
  String strJson = await fetchTrello();
  log.fine('jclang.dart/mainJclang/Map mapJson = json.decode(strJson);');
  /*
  String strFetchTrello = await FetchTrello.fetchTrello();
  print('server.dart/strFetchTrello:\n$strFetchTrello');
   */
  Map mapJson = json.decode(strJson);
  loopEachCard(mapJson);
  replaceIdValueToText(mapJson);
  replaceListsId(mapJson);
}

void loopEachCard(Map mapJson) {
  log.fine('jclang.dart/loopEachCard');
  List lstCards = mapJson['cards'];
  strOutput += '{"data":[\n';
  for (int i = 0; i < lstCards.length; i++) {
    Map mapCard = lstCards[i];
    processEachCardAjax(mapCard);
  }
  strOutput = strOutput.substring(
      0, strOutput.length - 2); //delete last comma (ajax format can not accept)
  strOutput += ']}';
  log.fine('jclang.dart/loopEachCard/lstCards.length:${lstCards.length}');
  File('bss/data.ajax').writeAsString(strOutput);
}

void processEachCardAjax(Map mapCard) {
  strOutput += '[';
  strOutput += '"' + processIdValue(mapCard, '客源', '3a1b') + '",';
  strOutput += '"' + processIdValue(mapCard, '人員', 'f3f0') + '",';
  strOutput += '"' + processIdValue(mapCard, '產品類別', 'a129') + '",';
  strOutput +=
      '"' + processCustomFieldItems(mapCard, '起始日', 'value', 'date') + '",';
  strOutput +=
      '"' + processCustomFieldItems(mapCard, '金額', 'value', 'number') + '",';
  strOutput +=
      '"' + processCustomFieldItems(mapCard, '客戶', 'value', 'text') + '",';
  strOutput += '"' + processSecondTier(mapCard, '案件名稱', 'name') + '",';
  strOutput += '"' + processSecondTier(mapCard, '交期', 'due') + '",';
  strOutput += '"' + processSecondTier(mapCard, '階段', 'idList') + '",';
  strOutput += '"' + processLabels(mapCard, '優先次序') + '"';
  strOutput += '],\n';
}

void processEachCardCsv(Map mapCard) {
  strOutput += processIdValue(mapCard, '客源', '3a1b') + ',';
  strOutput += processIdValue(mapCard, '人員', 'f3f0') + ',';
  strOutput += processIdValue(mapCard, '產品類別', 'a129') + ',';
  strOutput += processCustomFieldItems(mapCard, '起始日', 'value', 'date') + ',';
  strOutput += processCustomFieldItems(mapCard, '金額', 'value', 'number') + ',';
  strOutput += processCustomFieldItems(mapCard, '客戶', 'value', 'text') + ',';
  strOutput += processSecondTier(mapCard, '案件名稱', 'name') + ',';
  strOutput += processSecondTier(mapCard, '交期', 'due') + ',';
  strOutput += processSecondTier(mapCard, '階段', 'idList') + ',';
  strOutput += processLabels(mapCard, '優先次序') + '\n';
}

void replaceListsId(Map mapJson) {
  List lstLists = mapJson['lists'] ?? [];
  for (int i = 0; i < lstLists.length; i++) {
    String strId = lstLists[i]['id'] ?? '';
    String strName = lstLists[i]['name'] ?? '';
    strOutput = strOutput.replaceAll(strId, strName);
  }
}

void replaceIdValueToText(Map mapJson) {
  List lstCustomFields = mapJson['customFields'] ?? [];
  for (int i = 0; i < lstCustomFields.length; i++) {
    List lstOptions = lstCustomFields[i]['options'] ?? [];
    for (int j = 0; j < lstOptions.length; j++) {
      String strIdValue = lstOptions[j]['id'] ?? '';
      String strText = lstOptions[j]['value']['text'] ?? '';
      if (lstIdValue.contains(strIdValue)) {
        strOutput = strOutput.replaceAll(strIdValue, strText);
      }
    }
  }
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
      //print('jclang.dart/$strName,$strResult');
    }
  }
  return strResult;
}

String processSecondTier(Map mapCard, String strName, String strKey) {
  String strResult = mapCard[strKey] ?? '';
  if (strResult != null) {
    //print('jclang.dart/strResult,$strName,$strResult');
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
      //print('jclang.dart/processCustomFieldItems,$strName,$strResult');
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
      //print('jclang.dart/processEachCard/strName:$strName,strIdValue:$strIdValue,strIdCustomField:$strIdCustomField');
    }
  }
  lstIdValue.add(strResult);
  return strResult;
}
