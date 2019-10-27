import 'log.dart';
import 'dart:convert';
import 'readFile.dart';
import 'tableMainConverter.dart';

void main() async {
  Map mapTableTrello = await readTableTrelloAjax();
  Map mapNameStepLight = toNameStepField(mapTableTrello, 6);
  List lstTable = toTable(mapNameStepLight);
  String strJson = jsonEncode(toSymbol(lstTable));
  log('strJson:$strJson');
}

List toTable(Map mapThreeLight) {
  List lstOut = [];
  for (var e in mapThreeLight.entries) {
    String strName = e.key;
    List lstRow = [];
    for (int i = 0; i < 16 * 3; i++)
      lstRow.add(0);
    Map map14Steps = e.value;
    for (String strStep in map14Steps.keys) {
      int intStep2Digit = int.parse(strStep.substring(0, 2));
      lstRow[(intStep2Digit - 1) * 3 + 0] = map14Steps[strStep]['green'] ?? 0;
      lstRow[(intStep2Digit - 1) * 3 + 1] = map14Steps[strStep]['yellow'] ?? 0;
      lstRow[(intStep2Digit - 1) * 3 + 2] = map14Steps[strStep]['pink'] ?? 0;
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

