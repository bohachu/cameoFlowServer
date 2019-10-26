import 'log.dart';
import 'dart:io';
import 'dart:async';
import 'dart:convert';

void main() async {
  Map mapTableTrello = await readTableTrelloAjax();
  Map mapNameStepLight = toNameStepLight(mapTableTrello);
  List lstTable = toTable(mapNameStepLight);
  String strJson = toSymbol(lstTable);
  log('strJson:$strJson');
}

String toSymbol(List lstTable) {
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
  return jsonEncode(lstTable);
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

Future<Map> readTableTrelloAjax() async {
  String str = await File('bss/tableTrello.ajax').readAsString();
  Map map = jsonDecode(str);
  return map;
}

Map toNameStepLight(Map map) {
  List lst = map['data'];
  Map mapNameStepLight = {};
  for (int i = 0; i < lst.length; i++) {
    String strName = lst[i][5];
    String strLight = lst[i][6];
    String strStep = lst[i][7];
    if (lst[i][5].length > 0) {
      addCounter(mapNameStepLight, strName, strStep, strLight);
    }
  }
  log('mapNameStepLight:$mapNameStepLight');
  return mapNameStepLight;
}

void addCounter(Map mapNameStepLight, String strName, String strStep, String strLight) {
  if (mapNameStepLight[strName] == null) mapNameStepLight[strName] = {};
  if (mapNameStepLight[strName][strStep] == null) mapNameStepLight[strName][strStep] = {};
  if (mapNameStepLight[strName][strStep][strLight] == null) mapNameStepLight[strName][strStep][strLight] = 0;
  mapNameStepLight[strName][strStep][strLight] += 1;
}
