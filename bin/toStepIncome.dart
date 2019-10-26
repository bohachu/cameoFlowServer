import 'log.dart';
import 'dart:convert';
import 'readFile.dart';
import 'mainTableConverter.dart';

void main() async {
  Map mapTableTrello = await readTableTrelloAjax();
  Map mapNameStepIncome = toNameStepField(mapTableTrello, 3);
  List lstTable = toTable(mapNameStepIncome);
  String strJson = jsonEncode(lstTable);
  log(mapNameStepIncome);
  log(strJson);
}

List toTable(Map mapNameStepLight) {
  List lstOut = [];
  for (var e in mapNameStepLight.entries) {
    String strName = e.key;
    List lstRow = [];
    for (int i = 0; i < 16; i++) lstRow.add(0);
    Map map16Steps = e.value;
    for (String strStep in map16Steps.keys) {
      int intStep2Digit = int.parse(strStep.substring(0, 2));
      lstRow[intStep2Digit - 1] = mapNameStepLight[strName][strStep];
    }
    lstRow.insert(0, strName);
    lstOut.add(lstRow);
  }
  return lstOut;
}
