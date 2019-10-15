import 'trelloData.dart';

/*
jclang v1.4
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
/cards/customFields/options/value/text ../id
*/

void mainJclang() {
  print('jclang.dart/mainJclang');
  executeJclangCommand();
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

void processEachCard(Map mapCard) {
  processIdValue(mapCard);
  processCustomFieldItems(mapCard, '起始日', 'value', 'date');
  processCustomFieldItems(mapCard, '金額', 'value', 'number');
  processCustomFieldItems(mapCard, '客戶', 'value', 'text');
  processSecondTier(mapCard, '案件名稱', 'name');
  processSecondTier(mapCard, '交期', 'due');
  processSecondTier(mapCard, '階段', 'idList');
  processLabels(mapCard);
}

void processLabels(Map mapCard) {
  List lst = mapCard['labels'];
  for (int i = 0; i < lst.length; i++) {
    String strResult;
    try {
      strResult = lst[i]['color'];
    } catch (e) {
      strResult = null;
    }
    if (strResult != null) {
      print('jclang.dart/優先次序,$strResult');
    }
  }
}

void processSecondTier(Map mapCard, String strName, String strKey) {
  String strResult = mapCard[strKey];
  if (strResult != null) {
    print('jclang.dart/strResult,$strName,$strResult');
  }
}

void processCustomFieldItems(Map mapCard,
    String strName,
    String strKey1,
    String strKey2,) {
  List lstCustomFieldItems = mapCard['customFieldItems'];
  for (int i = 0; i < lstCustomFieldItems.length; i++) {
    String strResult;
    try {
      strResult = lstCustomFieldItems[i][strKey1][strKey2];
    } catch (e) {
      strResult = null;
    }
    if (strResult != null) {
      print('jclang.dart/processCustomFieldItems,$strName,$strResult');
    }
  }
}

void processIdValue(Map mapCard) {
  List lstCustomFieldItems = mapCard['customFieldItems'];

  for (int i = 0; i < lstCustomFieldItems.length; i++) {
    String strIdValue = lstCustomFieldItems[i]['idValue'];
    String strIdCustomField = lstCustomFieldItems[i]['idCustomField'];
    bool isHit = false;
    if (strIdCustomField.endsWith("3a1b")) {
      print('客源 jclang.dart/processEachCard/hit 3a1b');
      isHit = true;
    }
    if (strIdCustomField.endsWith("f3f0")) {
      print('人員 jclang.dart/processEachCard/hit f3f0');
      isHit = true;
    }
    if (strIdCustomField.endsWith("a129")) {
      print('產品類別 jclang.dart/processEachCard/hit a129');
      isHit = true;
    }
    if (isHit) {
      print(
          'jclang.dart/processEachCard/strIdValue:$strIdValue,strIdCustomField:$strIdCustomField');
    }
  }
}

void executeJclangCommand() {
  Map mapJson = getTrelloData();
  loopEachCard(mapJson);
}

void jclangCommandDispatcher(String strJclangCommandRow, Map mapJson) {
  List lstJclangCommandRow = strJclangCommandRow.split(' ');
  if (lstJclangCommandRow[0] == 'add') {
    jclangAdd(lstJclangCommandRow[1], lstJclangCommandRow[2],
        lstJclangCommandRow[3], mapJson);
  }
}

void jclangAdd(strColumnName, strSelect, strWhere, Map mapJson) {
  //add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
  //cards[] scan all list
  //customFieldItems scan all list
  //get idValue where idCustomField=="*3a1b" and skip all others
  //mapJson["cards"][2]["customFieldItems"][4]["idValue"]
  print('staticWeb.dart/jclangAdd/mapJson:' +
      mapJson["cards"][2]["customFieldItems"][4]["idValue"]);
}
