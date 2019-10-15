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
  Map mapJson = getTrelloData();
  loopEachCard(mapJson);
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

//20191015 23:24 next : output csv format, print first, then use file stream to write JSON file.
void processEachCard(Map mapCard) {
  processIdValue(mapCard, '客源', '3a1b');
  processIdValue(mapCard, '人員', 'f3f0');
  processIdValue(mapCard, '產品類別', 'a129');
  processCustomFieldItems(mapCard, '起始日', 'value', 'date');
  processCustomFieldItems(mapCard, '金額', 'value', 'number');
  processCustomFieldItems(mapCard, '客戶', 'value', 'text');
  processSecondTier(mapCard, '案件名稱', 'name');
  processSecondTier(mapCard, '交期', 'due');
  processSecondTier(mapCard, '階段', 'idList');
  processLabels(mapCard, '優先次序');
}

void processLabels(Map mapCard, strName) {
  List lst = mapCard['labels'];
  for (int i = 0; i < lst.length; i++) {
    String strResult;
    try {
      strResult = lst[i]['color'];
    } catch (e) {
      strResult = null;
    }
    if (strResult != null) {
      print('jclang.dart/$strName,$strResult');
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

void processIdValue(Map mapCard, String strName, String strEndsWith) {
  List lstCustomFieldItems = mapCard['customFieldItems'];

  for (int i = 0; i < lstCustomFieldItems.length; i++) {
    String strIdValue = lstCustomFieldItems[i]['idValue'];
    String strIdCustomField = lstCustomFieldItems[i]['idCustomField'];
    if (strIdCustomField.endsWith(strEndsWith)) {
      print(
          'jclang.dart/processEachCard/strName:$strName,strIdValue:$strIdValue,strIdCustomField:$strIdCustomField');
    }
  }
}

