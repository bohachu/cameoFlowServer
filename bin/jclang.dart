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

void mainJclang(){
  trelloDataHandler();
}
void trelloDataHandler(){
  Map mapJson=getTrelloData();
  String strJclangCommandRow='add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"';
  jclangCommandDispatcher(strJclangCommandRow,mapJson);
}

void jclangCommandDispatcher(String strJclangCommandRow, Map mapJson){
  List lstJclangCommandRow=strJclangCommandRow.split(' ');
  if(lstJclangCommandRow[0]=='add'){
    jclangAdd(lstJclangCommandRow[1],lstJclangCommandRow[2],lstJclangCommandRow[3],mapJson);
  }
}

void jclangAdd(strColumnName,strSelect,strWhere,Map mapJson){
  //add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
  //cards[] scan all list
  //customFieldItems scan all list
  //get idValue where idCustomField=="*3a1b" and skip all others
  //mapJson["cards"][2]["customFieldItems"][4]["idValue"]
  print('staticWeb.dart/jclangAdd/mapJson:'+mapJson["cards"][2]["customFieldItems"][4]["idValue"]);
}