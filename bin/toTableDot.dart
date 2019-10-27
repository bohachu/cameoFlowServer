import 'dart:io';

import 'log.dart';
import 'dart:convert';
import 'readFile.dart';
import 'tableMainConverter.dart';

void main() async {
  Map mapTableTrello = await readTableTrelloAjax();
  Map mapNameStepDot = toNameStepField(mapTableTrello, 6);
  List lstTable = toTable(mapNameStepDot);
  String strJson = jsonEncode(toSymbol(lstTable));
  log('toTableDot.dart/strJson:$strJson');
  await File('adminlte/pages/tables/tableDot.json').writeAsString('{"data":\n $strJson \n}');
}

List toTable(Map mapTableDot) {
  int intStepNum = 16;
  List lstOut = [];
  for (var e in mapTableDot.entries) {
    String strName = e.key;
    List lstRow = [];
    for (int i = 0; i < intStepNum * 3; i++)
      lstRow.add(0);
    Map mapSteps = e.value;
    for (String strStep in mapSteps.keys) {
      int intStep2Digit = int.parse(strStep.substring(0, 2));
      lstRow[(intStep2Digit - 1) * 3 + 0] = mapSteps[strStep]['green'] ?? 0;
      lstRow[(intStep2Digit - 1) * 3 + 1] = mapSteps[strStep]['yellow'] ?? 0;
      lstRow[(intStep2Digit - 1) * 3 + 2] = mapSteps[strStep]['pink'] ?? 0;
    }
    lstRow.insert(0, strName);
    lstOut.add(lstRow);
  }
  return lstOut;
}

List toSymbol(List lstTable) {
  //🍋🍀🍄🍏🍎🍊🍅🍑🍓🍒
  for (int i = 0; i < lstTable.length; i++) {
    for (int j = 0; j < lstTable[i].length; j++) {
      if (lstTable[i][j] is int) {
        if ((j - 1) % 3 == 0) lstTable[i][j] = '🍏' * lstTable[i][j];
        if ((j - 1) % 3 == 1) lstTable[i][j] = '🍋' * lstTable[i][j];
        if ((j - 1) % 3 == 2) lstTable[i][j] = '🍅' * lstTable[i][j];
      }
    }
  }
  return lstTable;
}

