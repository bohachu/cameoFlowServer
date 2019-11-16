import 'dart:convert';
import 'date.dart';
import 'flattenJson.dart';
import 'httpGet.dart';

List lstIdValue = [];

Future<Map> tableTrello() async {
  //print('tableTrello.dart/001:${DateTime.now()}');
  String strJson = await httpGetTrello(getTrelloUrl());
  Map mapJson = json.decode(strJson);
  Map mapNameId = customFields(mapJson);
  String strOut = loopEachCard(mapJson, mapNameId);
  strOut = replaceIdValueToText(mapJson, strOut);
  strOut = replaceListsId(mapJson, strOut);
  Map map = json.decode(strOut);
  return map;
}

String loopEachCard(Map mapJson, Map mapNameId) {
  String strOut = '';
  Map json_actions = flatten_json(mapJson['actions']);
  Map mapDataText = getDataText(json_actions);
  List lstCards = mapJson['cards'];
  strOut += '{"data":[\n';
  for (int i = 0; i < lstCards.length; i++) {
    Map mapCard = lstCards[i];
    //if (mapCard['closed'] != true) {
    strOut += processEachCard(mapCard, mapDataText, mapNameId);
    //}
  }
  strOut = strOut.substring(0, strOut.length - 2); //delete last comma (ajax format can not accept)
  strOut += ']}';
  return strOut;
}

Map customFields(mapJson) {
  List lstCustomFields = mapJson['customFields'];
  Map mapResult = {};
  for (int i = 0; i < lstCustomFields.length; i++) {
    Map map = lstCustomFields[i];
    if (map['name'] == '人員') mapResult['人員'] = map['id'];
    if (map['name'] == '客源') mapResult['客源'] = map['id'];
    if (map['name'] == '產品類別') mapResult['產品類別'] = map['id'];
  }
  return mapResult;
}

String processEachCard(Map mapCard, Map mapDataText, Map mapNameId) {
  String strOut = '';
  String strCardId = mapCard['id'];
  strOut += '{';
  strOut += addActions(strCardId, mapDataText);
  List lstDataText = mapDataText[strCardId];
  if (lstDataText != null && lstDataText != []) {
    strOut += '"canOpen":"ℹ️️",';
  } else {
    strOut += '"canOpen":"",';
  }
  strOut += '"客源":"${processIdValue(mapCard, '客源', mapNameId['客源'])}",';
  strOut += '"起始日":"${getDate(getCustomFieldItems(mapCard, '起始日', 'value', 'date'))}",';
  strOut += '"案件名稱":"${processSecondTier(mapCard, '案件名稱', 'name')}",';
  strOut += '"金額":"${getCustomFieldItems(mapCard, '金額', 'value', 'number')}",';
  strOut += '"交期":"${getDate(processSecondTier(mapCard, '交期', 'due'))}",';
  strOut += '"人員":"${processIdValue(mapCard, '人員', mapNameId['人員'])}",';
  strOut += '"優先次序":"${processLabels(mapCard, '優先次序')}",';
  strOut += '"階段":"${processSecondTier(mapCard, '階段', 'idList')}",';
  strOut += '"產品類別":"${processIdValue(mapCard, '產品類別', mapNameId['產品類別'])}",';
  if (mapCard['closed'] == true) {
    strOut += '"關案":"🎱"';
  } else {
    strOut += '"關案":"🏐"';
  }
  strOut += '},\n';
  return strOut;
}

Map getDataText(Map json_actions) {
  Map mapDataText = {};
  json_actions.forEach((k, v) {
    List lst = k.split('_');
    if (lst[1] == 'data' && lst[2] == 'text') {
      String strKey = lst[0] + '_' + 'data' + '_' + 'card' + '_' + 'id';
      String strDate = json_actions[lst[0] + '_' + 'date'];
      if (mapDataText[json_actions[strKey]] == null) {
        mapDataText[json_actions[strKey]] = [getDateTime(strDate) + ',' + v];
      } else {
        mapDataText[json_actions[strKey]].add(getDateTime(strDate) + ',' + v);
      }
    }
  });
  return mapDataText;
}

String addActions(String strCardId, Map mapDataText) {
  String strOut = '';
  int intCnt = 1;
  List lstDataText = mapDataText[strCardId];
  if (lstDataText != null && lstDataText != []) {
    for (String strDataText in lstDataText) {
      strOut += '"備註$intCnt":"${strDataText.replaceAll('\n', '')}",';
      intCnt += 1;
    }
  }
  for (int i = intCnt; i <= 3; i++) {
    strOut += '"備註$i":"",';
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
