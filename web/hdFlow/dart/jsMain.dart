import 'dart:convert';
import 'tableTrello.dart';
import 'tableDot.dart';
import 'tableStepIncome.dart';
import 'dart:js';
import 'dart:html';
import '../../common/dart/httpGet.dart';

void main() async {
  window.console.log('jsMain.dart 001');
  List lstTrelloTable;
  if (window.localStorage[getTrelloUrl()] != null) {
    lstTrelloTable = jsonDecode(window.localStorage[getTrelloUrl()]);
  } else {
    lstTrelloTable = (await tableTrello())['data'];
    window.localStorage[getTrelloUrl()] = jsonEncode(lstTrelloTable);
  }
  updateTables(lstTrelloTable);
}

void updateTables(lstTrelloTable) {
  context.callMethod('funcTableTrello', [JsObject.jsify(lstTrelloTable)]);
  context.callMethod('funcTableDot', [JsObject.jsify(tableDot(lstTrelloTable))]);
  context.callMethod('funcTableStepIncome', [JsObject.jsify(tableStepIncome(lstTrelloTable))]);
}
