import 'dart:convert';
import 'date.dart';
import 'flattenJson.dart';
import 'httpGet.dart';

List lstIdValue = [];

Future<Map> tableTrello() async {
  String strJson = await httpGetTrello();
  Map mapJson = json.decode(strJson);
  String strOut = loopEachCard(mapJson);
  strOut = replaceIdValueToText(mapJson, strOut);
  strOut = replaceListsId(mapJson, strOut);
  Map map = json.decode(strOut);
  return map;
}

String loopEachCard(Map mapJson) {
  String strOut = '';
  Map json_actions = flatten_json(mapJson['actions']);
  Map mapDataText = getDataText(json_actions);
  List lstCards = mapJson['cards'];
  strOut += '{"data":[\n';
  for (int i = 0; i < lstCards.length; i++) {
    Map mapCard = lstCards[i];
    strOut += processEachCard(mapCard, mapDataText);
  }
  strOut = strOut.substring(0, strOut.length - 2); //delete last comma (ajax format can not accept)
  strOut += ']}';
  return strOut;
}

String processEachCard(Map mapCard, Map mapDataText) {
  String strOut = '';
  String strId = mapCard['id'];
  strOut += '{';
  strOut += addActions(strId, mapDataText);
  strOut += '"id":"+",';
  strOut += '"客源":"${processIdValue(mapCard, '客源', '3a1b')}",';
  strOut += '"起始日":"${getDate(getCustomFieldItems(mapCard, '起始日', 'value', 'date'))}",';
  strOut += '"案件名稱":"${processSecondTier(mapCard, '案件名稱', 'name')}",';
  strOut += '"金額":"${getCustomFieldItems(mapCard, '金額', 'value', 'number')}",';
  strOut += '"交期":"${getDate(processSecondTier(mapCard, '交期', 'due'))}",';
  strOut += '"人員":"${processIdValue(mapCard, '人員', 'f3f0')}",';
  strOut += '"優先次序":"${processLabels(mapCard, '優先次序')}",';
  strOut += '"階段":"${processSecondTier(mapCard, '階段', 'idList')}",';
  strOut += '"產品類別":"${processIdValue(mapCard, '產品類別', 'a129')}"';
  strOut += '},\n';
  return strOut;
}

Map getDataText(Map json_actions) {
  Map mapDataText = {};
  json_actions.forEach((k, v) {
    List lst = k.split('_');
    if (lst[1] == 'data' && lst[2] == 'text') {
      String strKey = lst[0] + '_' + 'data' + '_' + 'card' + '_' + 'id';
      if (mapDataText[json_actions[strKey]] == null) {
        mapDataText[json_actions[strKey]] = [v];
      } else {
        mapDataText[json_actions[strKey]].add(v);
      }
    }
  });
  return mapDataText;
}

String addActions(String strCardId, Map mapDataText) {
  String strOut = '';
  int intCnt = 1;
  List lstDataText = mapDataText[strCardId];
  if (lstDataText == null || lstDataText == []) return '';
  for (String strDataText in lstDataText) {
    strOut += '"備註$intCnt":"${strDataText.replaceAll('\n', '')}",';
    intCnt += 1;
  }
  return strOut;
}

String replaceListsId(Map mapJson, strOut) {
  List lstLists = mapJson['lists'] ?? [];
  for (int i = 0; i < lstLists.length; i++) {
    String strId = lstLists[i]['id'] ?? '';
    String strName = lstLists[i]['name'] ?? '';
    strOut = strOut.replaceAll(strId, strName);
  }
  return strOut;
}

String replaceIdValueToText(Map mapJson, String strOut) {
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
  return strOut;
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
