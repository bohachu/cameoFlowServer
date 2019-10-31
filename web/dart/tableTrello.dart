import 'dart:convert';
import 'date.dart';
import 'httpGet.dart';
import 'log.dart';

List lstIdValue = [];
String strOut = '';

Future<Map> tableTrello() async {
  strOut = '';
  String strJson = await httpGetTrello();
  Map mapJson = json.decode(strJson);
  loopEachCard(mapJson);
  replaceIdValueToText(mapJson);
  replaceListsId(mapJson);
  Map map = json.decode(strOut);
  return map;
}

void loopEachCard(Map mapJson) {
  List lstCards = mapJson['cards'];
  strOut += '{"data":[\n';
  for (int i = 0; i < lstCards.length; i++) {
    Map mapCard = lstCards[i];
    processEachCardAjax(mapCard);
  }
  strOut = strOut.substring(0, strOut.length - 2); //delete last comma (ajax format can not accept)
  strOut += ']}';
}

void processEachCardAjax(Map mapCard) {
  strOut += '[';
  strOut += '"' + processIdValue(mapCard, '客源', '3a1b') + '",';
  strOut += '"' + getDate(getCustomFieldItems(mapCard, '起始日', 'value', 'date')) + '",';
  strOut += '"' + processSecondTier(mapCard, '案件名稱', 'name') + '",';
  strOut += '"' + getCustomFieldItems(mapCard, '金額', 'value', 'number') + '",';
  strOut += '"' + getDate(processSecondTier(mapCard, '交期', 'due')) + '",';
  strOut += '"' + processIdValue(mapCard, '人員', 'f3f0') + '",';
  strOut += '"' + processLabels(mapCard, '優先次序') + '",';
  strOut += '"' + processSecondTier(mapCard, '階段', 'idList') + '",';
  strOut += '"' + processIdValue(mapCard, '產品類別', 'a129') + '"';
  strOut += '],\n';
}

void replaceListsId(Map mapJson) {
  List lstLists = mapJson['lists'] ?? [];
  for (int i = 0; i < lstLists.length; i++) {
    String strId = lstLists[i]['id'] ?? '';
    String strName = lstLists[i]['name'] ?? '';
    strOut = strOut.replaceAll(strId, strName);
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
        strOut = strOut.replaceAll(strIdValue, strText);
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
  }
  return strResult;
}

String processSecondTier(Map mapCard, String strName, String strKey) {
  String strResult = mapCard[strKey] ?? '';
  if (strResult.contains("[Eline][佳福廖素慧][36][2020/9/30]")) {
    strResult = "Error Record";
  }
  return strResult;
}

String getCustomFieldItems(
  Map mapCard,
  String strName,
  String strKey1,
  String strKey2,
) {
  String strResult = '';
  List lstCustomFieldItems = mapCard['customFieldItems'];
  for (int i = 0; i < lstCustomFieldItems.length; i++) {
    try {
      strResult = lstCustomFieldItems[i][strKey1][strKey2] ?? '';
    } catch (e) {
      strResult = '';
    }
    if (strResult != '') {
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
    }
  }
  lstIdValue.add(strResult);
  return strResult;
}
