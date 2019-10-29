//import 'dart:js';
import 'tableTrello.dart';

//import 'tableDot.dart';
//import 'tableStepIncome.dart';

void main() async {
  List lstTrelloTable = (await tableTrello())['data'];
  /*
  context.callMethod('funcTableTrello', [JsObject.jsify(lstTrelloTable)]);
  context.callMethod('funcTableDot', [JsObject.jsify(tableDot(lstTrelloTable))]);
  context.callMethod('funcTableStepIncome', [JsObject.jsify(tableStepIncome(lstTrelloTable))]);
  */
}
