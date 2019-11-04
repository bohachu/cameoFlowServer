import 'commonConverter.dart';

List tableDot(List lstTableTrello) {
  Map map = toNameStepField(lstTableTrello, '優先次序');
  List lstTable = toTable(map);
  return toSymbol(lstTable);
}

int howManySteps() {
  return 16;
}

List toTable(Map mapTableDot) {
  int intHowManySteps = howManySteps();
  List lstOut = [];
  for (var e in mapTableDot.entries) {
    String strName = e.key;
    List lstRow = [];
    for (int i = 0; i < intHowManySteps * 3; i++)
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
  //🍋🍀🍄🍏🍎🍊🍅🍑🍓🍒🎱
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
