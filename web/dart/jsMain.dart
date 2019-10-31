import 'dart:convert';
import 'tableTrello.dart';
import 'tableDot.dart';
import 'tableStepIncome.dart';
import 'dart:js';
import 'dart:html';
import 'httpGet.dart';

void main() async {
  window.console.log('jsMain.dart AAA');
  if (window.localStorage['tableTrello'] != null) {
    List lstTrelloTable = jsonDecode(window.localStorage['tableTrello']);
    updateTables(lstTrelloTable);
  }
  List lstTrelloTable = (await tableTrello())['data'];
  window.localStorage['tableTrello'] = jsonEncode(lstTrelloTable);
  updateTables(lstTrelloTable);

  window.console.log('jsMain.dart 001');
  String str=await httpGet('https://movies.yahoo.com.tw/movie_intheaters.html');
  window.console.log('jsMain.dart 002');
  window.console.log(str);
}

void updateTables(lstTrelloTable){
  context.callMethod('funcTableTrello', [JsObject.jsify(lstTrelloTable)]);
  context.callMethod('funcTableDot', [JsObject.jsify(tableDot(lstTrelloTable))]);
  context.callMethod('funcTableStepIncome', [JsObject.jsify(tableStepIncome(lstTrelloTable))]);
}
