import 'dart:io';

import 'log.dart';
import 'dart:convert';
import 'readFile.dart';
import 'tableMainConverter.dart';

void main() async {
  Map mapTableTrello = await readTableTrelloAjax();
  Map mapNameStepIncome = toNameStepField(mapTableTrello, 3);
  List lstTable = toTable(mapNameStepIncome);
  String strJson = jsonEncode(lstTable);
  log(mapNameStepIncome);
  log(strJson);
  await File('adminlte/pages/tables/tableStepIncome.json').writeAsString('{"data":\n $strJson \n}');
}

List toTable(Map mapNameStepLight) {
  int intStepNum=16;
  List lstOut = [];
  for (var e in mapNameStepLight.entries) {
    String strName = e.key;
    List lstRow = [];
    for (int i = 0; i < intStepNum; i++) lstRow.add(0);
    Map mapSteps = e.value;
    for (String strStep in mapSteps.keys) {
      int intStep2Digit = int.parse(strStep.substring(0, 2));
      lstRow[intStep2Digit - 1] = mapNameStepLight[strName][strStep];
    }
    lstRow.insert(0, strName);
    lstOut.add(lstRow);
  }
  return lstOut;
}
